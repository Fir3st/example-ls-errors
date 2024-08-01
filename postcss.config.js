import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssMixins from 'postcss-mixins';
import tailwindcssNesting from 'tailwindcss/nesting';
import postcssNested from 'postcss-nested';
import tailwindConfig from './tailwind.config.js';

export default {
    plugins: [
        postcssMixins,
        tailwindcssNesting,
        postcssNested,
        tailwind(tailwindConfig),
        autoprefixer,
    ],
};
