import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@tailwindConfig';

const config = resolveConfig(tailwindConfig);
const { theme } = config;
export default theme;
