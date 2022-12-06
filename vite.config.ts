import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
