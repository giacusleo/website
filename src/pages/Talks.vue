<template>
  <div class="space-y-8">
    <h1 class="text-4xl font-bold mb-8">Talks</h1>
    
    <div class="space-y-8">
      <div v-for="talk in talks" :key="talk.title" class="space-y-4">
        <h2 class="text-2xl font-bold">{{ talk.title }}</h2>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <time>{{ talk.date }}</time>
          <span>{{ talk.event }}</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300">{{ talk.description }}</p>
        <div class="flex gap-4">
          <a
            v-if="talk.slides"
            :href="talk.slides"
            target="_blank"
            class="text-blue-500 hover:underline"
          >
            Slides →
          </a>
          <a
            v-if="talk.video"
            :href="talk.video"
            target="_blank"
            class="text-blue-500 hover:underline"
          >
            Video →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const talks = [
  {
    title: 'Building Modern Web Applications',
    date: '2024-02-15',
    event: 'VueConf 2024',
    description: 'A talk about modern web development practices and tools',
    slides: 'https://slides.com/yourusername/modern-web',
    video: 'https://youtube.com/watch?v=example'
  },
  // Add more talks here
]
</script> 