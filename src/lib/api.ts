import { supabase } from './supabase';

export async function generateApiKey(name: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('認証が必要です');

    // Generate API key using the database function
    const { data: keyData, error: keyError } = await supabase
      .rpc('generate_api_key');
    
    if (keyError) throw keyError;
    
    // Store the API key
    const { data: apiKey, error: insertError } = await supabase
      .from('api_keys')
      .insert({
        user_id: user.id,
        name,
        key: keyData
      })
      .select('id, name, key, created_at')
      .single();

    if (insertError) throw insertError;
    return apiKey;
  } catch (error) {
    console.error('Error generating API key:', error);
    throw error;
  }
}

export async function revokeApiKey(keyId: string) {
  try {
    const { error } = await supabase
      .from('api_keys')
      .update({ revoked_at: new Date().toISOString() })
      .eq('id', keyId);

    if (error) throw error;
  } catch (error) {
    console.error('Error revoking API key:', error);
    throw error;
  }
}

export async function listApiKeys() {
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('id, name, created_at, last_used_at, revoked_at')
      .is('revoked_at', null)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error listing API keys:', error);
    throw error;
  }
}
