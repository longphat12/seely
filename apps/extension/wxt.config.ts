import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Seely SEO Audit',
    description: 'Quick SEO audit for any webpage. Analyze on-page, technical, content, and performance SEO factors.',
    version: '0.1.0',
    permissions: ['storage', 'activeTab'],
    host_permissions: ['<all_urls>'],
  },
});
