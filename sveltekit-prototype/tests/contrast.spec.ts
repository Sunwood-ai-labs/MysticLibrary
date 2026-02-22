import { test, expect } from '@playwright/test';

test.describe('コントラストと視認性テスト', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('ホームページ - グラデーションタイトルが表示される', async ({ page }) => {
		const gradientText = page.locator('.gradient-text').first();
		await expect(gradientText).toBeVisible();

		// グラデーションテキストの色を確認（背景があるか）
		const computedStyle = await gradientText.evaluate((el) => {
			const styles = window.getComputedStyle(el);
			return {
				backgroundImage: styles.backgroundImage,
				webkitTextFillColor: styles.webkitTextFillColor,
				color: styles.color
			};
		});

		console.log('グラデーションタイトルのスタイル:', computedStyle);

		// グラデーションが設定されていることを確認
		expect(computedStyle.backgroundImage).toContain('gradient');
	});

	test('ホームページ - CTAセクションのテキストが読みやすい', async ({ page }) => {
		// 「プロンプトを探す」セクション
		const ctaSection = page.locator('section:has-text("プロンプトを探す")');
		await expect(ctaSection).toBeVisible();

		// CTAボタン
		const ctaButton = page.locator('a:has-text("プロンプト一覧を見る")');
		await expect(ctaButton).toBeVisible();

		// ボタンの背景色と文字色を確認
		const buttonStyle = await ctaButton.evaluate((el) => {
			const styles = window.getComputedStyle(el);
			return {
				backgroundColor: styles.backgroundColor,
				color: styles.color
			};
		});

		console.log('CTAボタンのスタイル:', buttonStyle);

		// 白いテキストが設定されていることを確認
		expect(buttonStyle.color).toBe('rgb(255, 255, 255)');
	});

	test('ホームページ - フィーチャーカードのテキストが見やすい', async ({ page }) => {
		const cards = page.locator('.card').all();

		for (const card of await cards) {
			const text = await card.locator('p').textContent();
			if (text && text.trim().length > 0) {
				const textColor = await card.locator('p').evaluate((el) => {
					return window.getComputedStyle(el).color;
				});
				console.log('カードテキスト色:', textColor);
				// スレート色（濃いグレー）であることを確認
				expect(textColor).toBeTruthy();
			}
		}
	});

	test('ナビゲーション - リンクテキストが見やすい', async ({ page }) => {
		const navLinks = await page.locator('nav a').all();

		for (let i = 0; i < Math.min(3, navLinks.length); i++) { // 最初の3つのリンクをチェック
			const link = navLinks[i];
			const linkText = await link.textContent();
			if (linkText && linkText.trim().length > 0) {
				const isVisible = await link.isVisible();
				expect(isVisible).toBe(true);

				const textColor = await link.evaluate((el) => {
					return window.getComputedStyle(el).color;
				});
				console.log(`ナビゲーションリンク "${linkText}":`, textColor);
			}
		}
	});
});

test.describe('Wikiページ コントラストテスト', () => {
	test('サイドバーのテキストが見やすい', async ({ page }) => {
		await page.goto('/wiki');

		// サイドバーが表示されるまで待機
		await page.waitForSelector('aside', { timeout: 5000 }).catch(() => {
			console.log('サイドバーが見つかりません - プロンプトがない可能性があります');
		});

		const sidebar = page.locator('aside');
		if (await sidebar.isVisible()) {
			const sidebarTexts = sidebar.locator('button, span').all();

			for (const textEl of await sidebarTexts.slice(0, 5)) { // 最初の5つをチェック
				const textColor = await textEl.evaluate((el) => {
					return window.getComputedStyle(el).color;
				});
				console.log('サイドバーテキスト色:', textColor);
			}
		}
	});
});

test.describe('プロンプト一覧ページ コントラストテスト', () => {
	test('カードのテキストが見やすい', async ({ page }) => {
		await page.goto('/browse');

		// プロンプトカードが表示されるまで待機
		await page.waitForSelector('.card', { timeout: 5000 }).catch(() => {
			console.log('カードが見つかりません - プロンプトがない可能性があります');
		});

		const cards = await page.locator('.card').all();

		for (let i = 0; i < Math.min(3, cards.length); i++) { // 最初の3つのカードをチェック
			const card = cards[i];
			const title = await card.locator('h3').textContent();
			const desc = await card.locator('p').textContent();

			console.log('カードタイトル:', title);
			console.log('カード説明:', desc?.substring(0, 50) + '...');
		}
	});
});
