/**
 * Rollup 설정 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:44:31
 */

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const extensions = [ 'js', 'jsx', 'ts', 'tsx' ];

const config = [
	{
		external: [ 'react', 'classnames', 'tslib' ],
		input: './src/index.ts',
		output: [
			{
				dir: './dist',
				format: 'es',
				preserveModules: true,
				preserveModulesRoot: 'src'
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve({ extensions }),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				extract: false,
				modules: true,
				sourceMap: false,
				use: [ 'sass' ]
			}),
			{
				generateBundle: (options, bundle) =>
				{
					Object.entries(bundle).forEach((entry) =>
					{
						if (!entry[0].match(/.*(.scss.js)$/))
						{
							return;
						}

						// eslint-disable-next-line no-param-reassign
						bundle[entry[0]].code = entry[1].code.replace('../../node_modules/style-inject/dist/style-inject.es.js', 'style-inject');
					});
				},
				name: 'Custom Rollup Plugin'
			}
		]
	}
];

export default config;