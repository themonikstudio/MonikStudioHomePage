import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacy: path.resolve(__dirname, 'privacy-policy/index.html'),
          privacyHtml: path.resolve(__dirname, 'privacy-policy.html'),
          terms: path.resolve(__dirname, 'terms-of-service/index.html'),
          termsHtml: path.resolve(__dirname, 'terms-of-service.html'),
          dataDeletion: path.resolve(__dirname, 'data-deletion/index.html'),
          dataDeletionHtml: path.resolve(__dirname, 'data-deletion.html'),
          support: path.resolve(__dirname, 'support/index.html'),
          supportHtml: path.resolve(__dirname, 'support.html'),
          storeCompliance: path.resolve(__dirname, 'store-compliance/index.html'),
          storeComplianceHtml: path.resolve(__dirname, 'store-compliance.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
