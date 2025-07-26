import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/reactcicd3/',  // 👈 this is the critical fix
  plugins: [react()],
});
