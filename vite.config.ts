import { defineConfig } from 'vite'

const name = 'Module'
const fileName = 'index'

export default defineConfig({
  build: {
    target: 'es2017',
    sourcemap: true,
    minify: false,
    lib: {
      name,
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => `${fileName}.${format}.js`
    },
    rollupOptions: {
      output: { exports: 'named' }
    }
  }
})
