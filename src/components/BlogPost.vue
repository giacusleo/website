<template>
  <router-link
    :to="`/blog/${slug}`"
    class="block group"
  >
    <article class="space-y-2">
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <time>{{ date }}</time>
        <span>·</span>
        <span>{{ readingTime }}</span>
      </div>
      <h2 class="text-xl font-bold group-hover:text-blue-500 transition-colors">
        {{ title }}
      </h2>
      <p class="text-gray-600 dark:text-gray-300">
        {{ description }}
      </p>
    </article>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  description: String,
  readingTime: String,
  slug: String
})
</script> 