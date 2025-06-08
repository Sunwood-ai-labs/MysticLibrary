import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;
};

export type Category = {
  id: string;
  name: string;
  description?: string;
  created_at?: string;
};

export type Tag = {
  id: string;
  name: string;
  created_at?: string;
};

export type Prompt = {
  id: string;
  title: string;
  content: string;
  description?: string;
  category_id?: string;
  user_id?: string;
  views_count: number;
  likes_count: number;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
  icon_name?: string;
  gradient_from?: string;
  gradient_to?: string;
  category?: Category;
  user?: Profile;
  tags?: Tag[];
};
