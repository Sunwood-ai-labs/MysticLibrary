/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2E578C',
					50: '#e8f0f7',
					100: '#d4e1ef',
					200: '#aec7e0',
					300: '#88acd0',
					400: '#6292c1',
					500: '#2E578C',
					600: '#274675',
					700: '#20365d',
					800: '#192746',
					900: '#12182e'
				},
				accent: {
					DEFAULT: '#BF807A',
					50: '#fbece8',
					100: '#f7d9d1',
					200: '#f0b3a6',
					300: '#e98d7b',
					400: '#BF807A',
					500: '#a86a65',
					600: '#8d5652',
					700: '#6f433f',
					800: '#52322f',
					900: '#35221f'
				},
				dark: '#0f172a',
				light: '#f8fafc',
				muted: '#64748b'
			},
			fontFamily: {
				kaisei: ['Kaisei Decol', 'serif'],
				yomogi: ['Yomogi', 'cursive'],
				zen: ['Zen Kurenaido', 'sans-serif']
			},
			animation: {
				float: 'float 3s ease-in-out infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			typography: (theme) => ({
				primary: {
					css: {
						'--tw-prose-body': theme('colors.dark'),
						'--tw-prose-headings': theme('colors.primary-900'),
						'--tw-prose-lead': theme('colors.muted'),
						'--tw-prose-links': theme('colors.primary'),
						'--tw-prose-bold': theme('colors.primary-900'),
						'--tw-prose-counters': theme('colors.primary'),
						'--tw-prose-bullets': theme('colors.primary'),
						'--tw-prose-hr': theme('colors.primary'),
						'--tw-prose-quotes': theme('colors.dark'),
						'--tw-prose-quote-borders': theme('colors.primary'),
						'--tw-prose-captions': theme('colors.muted'),
						'--tw-prose-code': theme('colors.primary'),
						'--tw-prose-pre-code': theme('colors.light'),
						'--tw-prose-pre-bg': theme('colors.dark'),
						'--tw-prose-th-borders': theme('colors.primary'),
						'--tw-prose-td-borders': theme('colors.primary')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
