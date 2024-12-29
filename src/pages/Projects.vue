<template>
  <div class="space-y-8">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    name: 'Project One',
    description: 'A brief description of your amazing project',
    link: 'https://github.com/yourusername/project-one',
    tech: ['Vue', 'TypeScript', 'UnoCSS'],
    stars: 100
  },
  // Add more projects here
]
</script> 