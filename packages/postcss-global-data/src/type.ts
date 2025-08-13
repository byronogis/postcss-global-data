export interface FileConfig {
	file: string;
	/**
	 * Whether to remove the inject CSS after processing.
	 * @default true to respect original plugin `@csstools/postcss-global-data` behavior
	 */
	remove?: boolean;
	/**
	 * Position to insert the CSS.
	 * @default 'append' to respect original plugin `@csstools/postcss-global-data` behavior
	 */
	position?: 'append' | 'prepend';
}
