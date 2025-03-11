/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E578C',
        'primary-dark': '#182D40',
        accent: '#BF807A',
        'accent-dark': '#592A2A',
        light: '#F2F2F2',
      },
      fontFamily: {
        kaisei: ['Kaisei Decol', 'serif'],
        yomogi: ['Yomogi', 'cursive'],
        zen: ['Zen Kurenaido', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: (theme) => ({
        primary: {
          css: {
            '--tw-prose-body': theme('colors.primary-dark'),
            '--tw-prose-headings': theme('colors.primary-dark'),
            '--tw-prose-lead': theme('colors.primary-dark'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.primary-dark'),
            '--tw-prose-counters': theme('colors.primary'),
            '--tw-prose-bullets': theme('colors.primary'),
            '--tw-prose-hr': theme('colors.primary'),
            '--tw-prose-quotes': theme('colors.primary-dark'),
            '--tw-prose-quote-borders': theme('colors.primary'),
            '--tw-prose-captions': theme('colors.primary-dark'),
            '--tw-prose-code': theme('colors.primary'),
            '--tw-prose-pre-code': theme('colors.primary'),
            '--tw-prose-pre-bg': theme('colors.light'),
            '--tw-prose-th-borders': theme('colors.primary'),
            '--tw-prose-td-borders': theme('colors.primary'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};