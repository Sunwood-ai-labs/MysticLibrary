import { useState, useEffect } from 'react';
import { Key, Plus, Trash2 } from 'lucide-react';
import { generateApiKey, revokeApiKey, listApiKeys } from '../../lib/api';

type ApiKey = {
  id: string;
  name: string;
  key?: string;
  created_at: string;
  last_used_at?: string;
};

export function ApiKeys() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showNewKeyModal, setShowNewKeyModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKey, setNewKey] = useState<ApiKey | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchApiKeys = async () => {
    try {
      const keys = await listApiKeys();
      setApiKeys(keys);
    } catch (error) {
      console.error('Error fetching API keys:', error);
      setError('APIキーの取得に失敗しました');
    }
  };

  useEffect(() => {
    fetchApiKeys();
  }, []);


  const handleCreateKey = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const key = await generateApiKey(newKeyName);
      setNewKey(key);
      await fetchApiKeys();
      setNewKeyName('');
    } catch (error) {
      setError('APIキーの生成に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleRevokeKey = async (keyId: string) => {
    try {
      await revokeApiKey(keyId);
      await fetchApiKeys();
    } catch (error) {
      setError('APIキーの失効に失敗しました');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-primary-dark font-kaisei">APIキー</h2>
        <button
          onClick={() => setShowNewKeyModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors font-zen"
        >
          <Plus className="h-5 w-5" />
          <span>新規作成</span>
        </button>
      </div>

      {apiKeys.length === 0 ? (
        <div className="text-center py-8 bg-white rounded-xl shadow-sm border border-light">
          <Key className="h-12 w-12 mx-auto text-primary opacity-50 mb-4" />
          <p className="text-primary-dark font-zen">APIキーがありません</p>
        </div>
      ) : (
        <div className="space-y-4">
          {apiKeys.map((key) => (
            <div
              key={key.id}
              className="bg-white rounded-xl shadow-sm border border-light p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-primary-dark font-zen">{key.name}</h3>
                <p className="text-sm text-primary-dark font-zen">
                  作成日: {new Date(key.created_at).toLocaleDateString('ja-JP')}
                </p>
                {key.last_used_at && (
                  <p className="text-sm text-primary-dark font-zen">
                    最終使用: {new Date(key.last_used_at).toLocaleDateString('ja-JP')}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleRevokeKey(key.id)}
                className="p-2 text-accent hover:bg-accent hover:bg-opacity-10 rounded-lg transition-colors"
                title="失効"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {showNewKeyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-primary-dark font-kaisei mb-4">
              新規APIキー作成
            </h2>
            {newKey ? (
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-primary-dark font-zen mb-1">
                    APIキー
                  </p>
                  <div className="bg-light rounded-lg p-4 font-mono text-sm break-all">
                    {newKey.key}
                  </div>
                  <p className="text-sm text-accent mt-2 font-zen">
                    ⚠️ このキーは一度しか表示されません。必ず保存してください。
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowNewKeyModal(false);
                    setNewKey(null);
                  }}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg font-zen hover:bg-opacity-90"
                >
                  閉じる
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateKey} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark font-zen mb-1">
                    キー名
                  </label>
                  <input
                    type="text"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                    className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
                    placeholder="開発用キー"
                    required
                  />
                </div>

                {error && (
                  <div className="text-accent font-zen">
                    {error}
                  </div>
                )}

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowNewKeyModal(false)}
                    className="px-4 py-2 text-primary font-zen hover:bg-primary hover:bg-opacity-10 rounded-lg"
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-primary text-white rounded-lg font-zen hover:bg-opacity-90 disabled:opacity-50"
                  >
                    作成
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
