import { Router } from 'express';
import { supabase } from '../supabase.js';
import { validateApiKey } from '../middleware/auth.js';

const router = Router();

router.get('/', validateApiKey, async (req, res) => {
  try {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) throw error;

    res.json({ categories });
  } catch (error) {
    console.error('Error in GET /categories:', error);
    res.status(500).json({ error: { code: 'server_error', message: 'サーバーエラーが発生しました' } });
  }
});

export default router;