import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ASSET_URL = 'https://thefantasyfootballforecast.com' || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${ASSET_URL}/`,
})

