/**
 * Rollup 설정 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:44:31
 */

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const config = [
	{
		external: [ /node_modules/, /style-inject/ ],
		input: './src/index.ts',
		output: [
			{
				dir: './dist',
				format: 'cjs',
				preserveModules: true,
				preserveModulesRoot: 'src'
			}
		],
		plugins: [
			nodeResolve({ extensions }),
			commonjs({ include: 'node_modules/**' }),
			peerDepsExternal(),
			babel({
				exclude: 'node_modules/**',
				extensions,
				include: [ 'src/**/*' ]
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				extract: false,
				inject(cssVariableName)
				{
					return `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`;
				},
				modules: true,
				sourceMap: false,
				use: [ 'sass' ]
			}),
			{
				generateBundle: (options, bundle) =>
				{
					Object.entries(bundle).forEach((entry) =>
					{
						if (entry[0].match(/.*(.scss).js$/))
						{
							// eslint-disable-next-line no-param-reassign
							// bundle[entry[0]].code = entry[1].code.replace('../../node_modules/', '');
						}

						else if (entry[0].match(/.js$/) && !entry[0].match(/index.js$/) && !entry[0].match(/.d.ts$/) && !entry[0].match(/^node_modules/))
						{
							// eslint-disable-next-line no-param-reassign
							// bundle[entry[0]].code = entry[1].code.replace('../../node_modules/', '');
						}
					});
				},
				name: 'Custom Rollup Plugin'
			}
		]
	}
];

export default config;