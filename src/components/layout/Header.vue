<template>
  <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div class="container">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="text-lg font-bold text-text-primary hover:text-primary transition-colors">
          Giacomo Leo
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            :class="[
              'nav-link',
              $route.path === link.path ? 'text-text-primary' : ''
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-border">
        <div class="flex flex-col gap-4">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="isMenuOpen = false"
            :class="[
              'nav-link py-2',
              $route.path === link.path ? 'text-text-primary' : ''
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]
</script>
