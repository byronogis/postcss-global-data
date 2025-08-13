import { postcssTape } from '@csstools/postcss-tape';
import plugin from 'postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssCascadeLayers from '@csstools/postcss-cascade-layers';

postcssTape(plugin)({
	basic: {
		message: 'supports basic usage',
		plugins: [
			plugin({
				files: [
					'./test/fixtures/fixture.css',
				],
			}),
			postcssCustomMedia(),
		],
	},
	'basic:no-remove': {
		message: 'supports basic usage with no remove',
		plugins: [
			plugin({
				files: [
					{
						file: './test/fixtures/fixture.css',
						remove: false,
					},
				],
			}),
		],
	},
	'basic:position-prepend': {
		message: 'supports basic usage with position prepend',
		plugins: [
			plugin({
				files: [
					{
						file: './test/fixtures/fixture.css',
						remove: false,
						position: 'prepend',
					},
				],
			}),
		],
	},
	'open-props': {
		message: 'supports open-props usage',
		plugins: [
			plugin({
				files: [
					'node_modules:open-props/media.min.css',
					'node_modules://open-props/open-props.min.css',
				],
			}),
			postcssCustomProperties({ preserve: false }),
			postcssCustomMedia({ preserve: false }),
		],
	},
	'cascade-layers/chunk-a': {
		message: 'supports cascade-layer while chunking',
		plugins: [
			plugin({
				files: [
					{
						file: './test/fixtures/cascade-layers.css',
						remove: false,
						position: 'prepend',
					}
				],
			}),
			postcssCascadeLayers(),
		]
	}
});
