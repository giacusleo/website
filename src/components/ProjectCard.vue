<template>
  <a
    :href="link"
    target="_blank"
    class="block p-4 border rounded-lg hover:shadow-lg transition-shadow dark:border-gray-700"
  >
    <h3 class="text-xl font-bold mb-2">{{ name }}</h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        <span v-for="item in tech" :key="item" class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
          {{ item }}
        </span>
      </div>
      <div class="flex items-center gap-1 text-sm text-gray-500">
        <span>⭐</span>
        <span>{{ stars }}</span>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  link: String,
  tech: Array,
  stars: Number
})
</script> 