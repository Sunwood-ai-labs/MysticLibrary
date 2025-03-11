import { supabase } from '../supabase.js';

export async function validateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(401).json({ error: { code: 'invalid_api_key', message: 'APIキーが必要です' } });
  }

  try {
    const { data: userId, error } = await supabase.rpc('validate_api_key', { key_to_validate: apiKey });
    
    if (error || !userId) {
      console.error('API key validation error:', error);
      return res.status(401).json({ error: { code: 'invalid_api_key', message: '無効なAPIキーです' } });
    }

    req.userId = userId;
    next();
  } catch (error) {
    console.error('Error validating API key:', error);
    return res.status(500).json({ error: { code: 'server_error', message: 'サーバーエラーが発生しました' } });
  }
}