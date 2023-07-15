import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = {
	external: [ 'react', 'styled-components' ],
	input: 'src/index.ts',
	output: [
		{
			dir: './dist',
			format: 'cjs',
			preserveModules: true,
			preserveModulesRoot: 'src'
		},
		{
			file: './dist/index.es.js',
			format: 'es'
		},
		{
			file: './dist/index.umd.js',
			format: 'umd',
			name: 'react-components-library-starter'
		}
	],
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' })
	]
};

export default config;