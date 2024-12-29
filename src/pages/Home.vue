<template>
  <div class="space-y-20">
    <HomeHero />
    
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">About</h2>
      <div class="prose dark:prose-invert max-w-none">
        <p>
          I'm a passionate developer focused on creating elegant solutions to complex problems. 
          With expertise in full-stack development, I love building performant and user-friendly applications.
        </p>
        <p>
          Currently working at <a href="#" class="text-primary">Company Name</a>, 
          where I help build the future of web development.
        </p>
      </div>
    </section>

    <ProjectsShowcase />
    
    <section id="contact" class="space-y-4">
      <h2 class="text-2xl font-bold">Get in Touch</h2>
      <p class="text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaborations or just a friendly hello
      </p>
      <div class="flex gap-4">
        <a 
          href="mailto:your.email@example.com"
          class="btn"
        >
          <div class="i-carbon-email mr-2" />
          Email me
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import HomeHero from '../components/HomeHero.vue'
import ProjectsShowcase from '../components/ProjectsShowcase.vue'
</script> 