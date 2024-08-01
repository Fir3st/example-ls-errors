import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import postcss from './postcss.config';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/ts/app.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        svgr(),
    ],
    css: {
        postcss,
    },
    resolve: {
        alias: {
            '@': '/resources/ts',
            '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
            '@tailwindTheme': path.resolve(__dirname, 'tailwind-theme.js'),
        },
    },
    optimizeDeps: {
        include: ['@tailwindConfig', '@tailwindTheme'],
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
