<template>
  <button
    class="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    @click="toggleDark"
    title="Toggle dark mode"
  >
    <div class="i-carbon-moon dark:i-carbon-sun text-2xl" />
  </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script> 