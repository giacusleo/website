<template>
  <div class="min-h-screen font-sans bg-white dark:bg-gray-900 dark:text-white transition-colors">
    <header class="sticky top-0 z-10 border-b dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <nav class="flex justify-between items-center max-w-3xl mx-auto px-6 h-16">
        <router-link to="/" class="text-xl font-bold hover:text-primary transition-colors">
          Your Name
        </router-link>
        
        <div class="flex items-center gap-2">
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/talks">Talks</NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto px-6 py-12">
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="border-t dark:border-gray-800 mt-20">
      <div class="max-w-3xl mx-auto px-6 py-12 flex justify-between items-center">
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Your Name
        </div>
        <div class="flex gap-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="text-gray-500 hover:text-primary transition-colors"
            :title="social.name"
          >
            <div :class="social.icon" class="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavLink from './components/NavLink.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'i-carbon-logo-github'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'i-carbon-logo-twitter'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'i-carbon-logo-linkedin'
  }
]
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style> 