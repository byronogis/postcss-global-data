export interface FileConfig {
	file: string;
	/**
	 * Whether to remove the inject CSS after processing.
	 * @default true
	 */
	remove?: boolean;
	/**
	 * Position to insert the CSS.
	 * @default 'prepend' when 'remove' is false, 'append' otherwise
	 */
	position?: 'append' | 'prepend';
}
