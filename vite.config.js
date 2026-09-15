import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      // Static images/PDFs in /public don't need hot reload. Not watching them
      // stops Windows "EBUSY" crashes while a file is still being copied in.
      ignored: ['**/public/**/*.{png,jpg,jpeg,webp,gif,pdf}'],
    },
    // When the Node.js/Express API is added (e.g. in /server), uncomment this
    // proxy so the frontend can call `/api/...` without CORS configuration.
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //   },
    // },
  },
});
