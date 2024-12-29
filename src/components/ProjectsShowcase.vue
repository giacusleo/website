<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold">Featured Projects</h2>
      <NavLink to="/projects">View all</NavLink>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.name"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import NavLink from './NavLink.vue'

const featuredProjects = [
  {
    name: 'Project One',
    description: 'A revolutionary project that changes everything',
    link: 'https://github.com/yourusername/project-one',
    tech: ['Vue', 'TypeScript', 'UnoCSS'],
    stars: 100
  },
  {
    name: 'Project Two',
    description: 'Another amazing project that solves real problems',
    link: 'https://github.com/yourusername/project-two',
    tech: ['React', 'Node.js', 'MongoDB'],
    stars: 75
  }
]
</script> 