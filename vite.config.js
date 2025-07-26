import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/reactcicd3/',  // 👈 this is very important
  plugins: [react()],
});
