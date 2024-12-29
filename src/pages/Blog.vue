<template>
  <div class="space-y-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    
    <div class="space-y-6">
      <BlogPost
        v-for="post in posts"
        :key="post.title"
        v-bind="post"
      />
    </div>
  </div>
</template>

<script setup>
import BlogPost from '../components/BlogPost.vue'

const posts = [
  {
    title: 'My Journey in Tech',
    date: '2024-03-20',
    description: 'Sharing my experiences and learnings in the tech industry',
    readingTime: '5 min read',
    slug: 'my-journey-in-tech'
  },
  // Add more blog posts here
]
</script> 