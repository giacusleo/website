<template>
  <Section class="pt-24 md:pt-32">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div class="space-y-8 animate-fade-in">
        <div class="space-y-4">
          <p class="text-primary font-medium text-lg">Analytics Engineer</p>
          <h1 class="heading-1">
            Transforming Data into
            <span class="text-gradient">Actionable Insights</span>
          </h1>
          <p class="body-large max-w-lg">
            I help businesses unlock the power of their data through scalable pipelines, 
            automated reporting, and data-driven decision making.
          </p>
        </div>

        <div class="flex flex-wrap gap-4">
          <Button variant="primary" @click="$router.push('/contact')">
            Get in Touch
          </Button>
          <Button variant="secondary" @click="$router.push('/about')">
            View CV
          </Button>
        </div>

        <div class="flex items-center gap-6 pt-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-text-primary transition-colors"
            :aria-label="social.name"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path v-if="social.icon === 'github'" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              <path v-else-if="social.icon === 'linkedin'" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              <path v-else-if="social.icon === 'email'" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="relative animate-fade-in stagger-2">
        <div class="aspect-square rounded-2xl bg-surface border border-border overflow-hidden">
          <!-- Placeholder for professional photo -->
          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-surface-elevated">
            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg class="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <p class="text-text-muted text-sm">Professional Photo</p>
            </div>
          </div>
        </div>
        <!-- Decorative element -->
        <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div class="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
      </div>
    </div>
  </Section>

  <!-- Skills Section -->
  <Section>
    <div class="text-center mb-12">
      <h2 class="heading-2 mb-4">Technologies & Skills</h2>
      <p class="body max-w-2xl mx-auto">
        Tools and technologies I use to build scalable data solutions
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card 
        v-for="(skill, index) in skills" 
        :key="skill.name"
        class="text-center py-8 animate-fade-in"
        :class="`stagger-${index + 1}`"
      >
        <div class="text-3xl mb-3">{{ skill.icon }}</div>
        <h3 class="font-semibold text-text-primary mb-1">{{ skill.name }}</h3>
        <p class="text-sm text-text-muted">{{ skill.category }}</p>
      </Card>
    </div>
  </Section>

  <!-- Featured Projects Preview -->
  <Section class="bg-surface/50">
    <div class="flex justify-between items-end mb-12">
      <div>
        <h2 class="heading-2 mb-4">Featured Projects</h2>
        <p class="body max-w-xl">
          A selection of data engineering and analytics projects I've worked on
        </p>
      </div>
      <Button variant="secondary" @click="$router.push('/projects')" class="hidden md:inline-flex">
        View All
      </Button>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <Card 
        v-for="(project, index) in featuredProjects" 
        :key="project.title"
        class="animate-fade-in"
        :class="`stagger-${index + 1}`"
      >
        <div class="flex flex-col h-full">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
              {{ project.icon }}
            </div>
            <h3 class="heading-3">{{ project.title }}</h3>
          </div>
          <p class="body-small mb-4 flex-1">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tag in project.tags" :key="tag" variant="primary">
              {{ tag }}
            </Badge>
          </div>
        </div>
      </Card>
    </div>

    <div class="mt-8 text-center md:hidden">
      <Button variant="secondary" @click="$router.push('/projects')">
        View All Projects
      </Button>
    </div>
  </Section>

  <!-- CTA Section -->
  <Section>
    <Card class="text-center py-16 relative overflow-hidden">
      <div class="relative z-10">
        <h2 class="heading-2 mb-4">Ready to work together?</h2>
        <p class="body max-w-xl mx-auto mb-8">
          I'm currently available for freelance projects and consulting. 
          Let's discuss how I can help with your data challenges.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button variant="primary" @click="$router.push('/contact')">
            Get in Touch
          </Button>
          <Button variant="secondary" @click="$router.push('/about')">
            View CV
          </Button>
        </div>
      </div>
      <!-- Background decoration -->
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
    </Card>
  </Section>
</template>

<script setup>
import Section from '../components/ui/Section.vue'
import Button from '../components/ui/Button.vue'
import Card from '../components/ui/Card.vue'
import Badge from '../components/ui/Badge.vue'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/giacusleo', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/giacomoleo/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:giacomo.leo@example.com', icon: 'email' }
]

const skills = [
  { name: 'SQL', category: 'Analytics', icon: '📊' },
  { name: 'Python', category: 'Engineering', icon: '🐍' },
  { name: 'dbt', category: 'Transformation', icon: '🔄' },
  { name: 'Airflow', category: 'Orchestration', icon: '🌪️' },
  { name: 'BigQuery', category: 'Warehouse', icon: '☁️' },
  { name: 'Looker', category: 'Visualization', icon: '📈' },
  { name: 'Git', category: 'Version Control', icon: '🌿' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' }
]

const featuredProjects = [
  {
    title: 'Data Warehouse Migration',
    description: 'Led migration from on-premise to cloud data warehouse, improving query performance by 300%.',
    tags: ['BigQuery', 'dbt', 'SQL'],
    icon: '🏗️'
  },
  {
    title: 'Real-time Analytics Pipeline',
    description: 'Built streaming data pipeline processing 1M+ events daily with sub-second latency.',
    tags: ['Kafka', 'Python', 'Airflow'],
    icon: '⚡'
  },
  {
    title: 'Self-Service BI Platform',
    description: 'Created automated reporting infrastructure enabling business teams to access insights instantly.',
    tags: ['Looker', 'dbt', 'SQL'],
    icon: '📊'
  }
]
</script>
