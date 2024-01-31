import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ASSET_URL = 'https://ejgaug.github.io/FantasyFootballForecast' || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${ASSET_URL}/`,
})
