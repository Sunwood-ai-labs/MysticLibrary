// クライアントサイドのみでレンダリング（静的サイト生成対応）
export const ssr = false;

export async function load() {
	// データはクライアントサイドでonMountを使って読み込む
	return {};
}
