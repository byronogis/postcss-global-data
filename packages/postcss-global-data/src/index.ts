import type { ChildNode, Plugin, PluginCreator } from 'postcss';
import { parseImport } from './parse-import';
import type { FileConfig } from './type';

/** postcss-global-data plugin options */
export type pluginOptions = {
	/** List of files to be used as context */
	files?: Array<FileConfig['file'] | FileConfig>,
};

const creator: PluginCreator<pluginOptions> = (opts?: pluginOptions) => {
	const options = Object.assign(
		// Default options
		{
			files: [] as Array<Required<FileConfig>>,
		},
		// Provided options
		opts,
	);

	options.files = options.files.map((file) => {
		if (typeof file === 'string') {
			file = { file } as any;
		}

		return Object.assign(
			// Default file configuration
			{
				remove: true,
        position: file.remove ? 'append' : 'prepend',
			},
			// Provided file configuration
			file,
		);
	});

	return {
		postcssPlugin: 'postcss-global-data',
		prepare(): Plugin {
			let importedFiles = new Set<string>();
			let removableCSS = new Set<ChildNode>();

			return {
				postcssPlugin: 'postcss-global-data',
				Once(root, postcssHelpers): void {
					options.files.forEach((config) => {
						const { file, remove, position } = config;

						if (importedFiles.has(file)) {
							return;
						}

						const newCSS = parseImport(root, postcssHelpers, file, importedFiles);
						if (!newCSS) {
							return;
						}

						const nodes = Array.from(newCSS.nodes)

						if (position === 'prepend') {
							// Respect the order of raw file content
							nodes.reverse();
						}

						nodes.forEach((node) => {
							root[position](node);
							remove && removableCSS.add(node);
						})
					});
				},
				OnceExit(): void {
					removableCSS.forEach((node) => {
						node.remove();
					});
					removableCSS = new Set<ChildNode>();
					importedFiles = new Set<string>();
				},
			};
		},
	};
};

creator.postcss = true;

export default creator;
