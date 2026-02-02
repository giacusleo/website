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
      background: '#0a0a0a',
      surface: '#141414',
      'surface-elevated': '#1a1a1a',
      primary: '#3b82f6',
      'primary-hover': '#2563eb',
      secondary: '#10b981',
      'text-primary': '#ffffff',
      'text-secondary': '#9ca3af',
      'text-muted': '#6b7280',
      border: '#27272a',
      'border-hover': '#3f3f46'
    }
  },
  shortcuts: {
    'container': 'max-w-4xl mx-auto px-6',
    'section': 'py-16 md:py-24',
    'heading-1': 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary',
    'heading-2': 'text-2xl md:text-3xl font-bold tracking-tight text-text-primary',
    'heading-3': 'text-xl md:text-2xl font-semibold text-text-primary',
    'body-large': 'text-lg md:text-xl text-text-secondary leading-relaxed',
    'body': 'text-base text-text-secondary leading-relaxed',
    'body-small': 'text-sm text-text-muted',
    'card': 'bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-colors duration-300',
    'btn-primary': 'bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2',
    'btn-secondary': 'bg-transparent border border-border hover:border-primary text-text-primary hover:text-primary font-medium px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2',
    'link': 'text-primary hover:text-primary-hover transition-colors duration-200',
    'nav-link': 'text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium'
  }
}) 