import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/ts/**/*.vue',
        './resources/ts/**/*.ts',
        './app/**/*.php',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            zIndex: {
                55: '55',
            },
            screens: {
                xs: '475px',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                },
            },
            aspectRatio: {
                '3/2': '3 / 2',
            },
            maxWidth: {
                '8xl': '88rem',
            },
            animation: {
                'pointer-events-from-none-to-auto': 'pointerEventsFromNoneToAuto forwards',
            },
            keyframes: {
                pointerEventsFromNoneToAuto: {
                    '0%': { 'pointer-events': 'none' },
                    '100%': { 'pointer-events': 'auto' },
                },
            },
        },
    },

    plugins: [forms],
};
