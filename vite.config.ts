import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			//module loader replaces @ with the absolute path of folder src
			'@': path.resolve(__dirname, './src'),
		},
	},
});
