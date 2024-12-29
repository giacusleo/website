import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  theme: {
    colors: {
      primary: '#3498db'
    }
  },
  shortcuts: {
    'prose': 'text-gray-700 dark:text-gray-200',
    'prose-invert': 'text-gray-200 dark:text-gray-700'
  }
}) 