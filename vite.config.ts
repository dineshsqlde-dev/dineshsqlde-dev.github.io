import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// User site (USERNAME.github.io) is served from the root, so base is '/'.
// For a project site (USERNAME.github.io/repo) change this to '/repo/'.
export default defineConfig({ base: '/', plugins: [react()] })
