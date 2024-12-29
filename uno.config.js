import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  theme: {
    colors: {
      primary: '#3498db'
    }
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity'
  }
}) 