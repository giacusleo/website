<template>
  <Section class="pt-24">
    <div class="text-center mb-16">
      <h1 class="heading-1 mb-4">Projects</h1>
      <p class="body-large max-w-2xl mx-auto">
        A collection of data engineering and analytics projects showcasing my expertise 
        in building scalable data solutions.
      </p>
    </div>
  </Section>

  <!-- Filter Tags -->
  <Section class="pb-8">
    <div class="flex flex-wrap justify-center gap-3">
      <button
        v-for="category in categories"
        :key="category"
        @click="activeCategory = category"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
          activeCategory === category
            ? 'bg-primary text-white'
            : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-border-hover'
        ]"
      >
        {{ category }}
      </button>
    </div>
  </Section>

  <!-- Projects Grid -->
  <Section>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="group flex flex-col h-full"
      >
        <!-- Project Image -->
        <div class="relative aspect-video mb-6 rounded-lg overflow-hidden bg-surface-elevated">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-6xl">{{ project.icon }}</div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 bg-primary text-white text-center py-2 rounded text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Live Demo
            </a>
            <a 
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 bg-surface-elevated text-text-primary text-center py-2 rounded text-sm font-medium hover:bg-surface border border-border transition-colors"
            >
              View Code
            </a>
          </div>
        </div>

        <!-- Project Content -->
        <div class="flex-1 flex flex-col">
          <div class="flex items-start justify-between mb-3">
            <h3 class="heading-3">{{ project.title }}</h3>
            <Badge variant="secondary">{{ project.category }}</Badge>
          </div>
          
          <p class="body mb-4 flex-1">{{ project.description }}</p>
          
          <!-- Impact Metrics -->
          <div v-if="project.impact" class="grid grid-cols-3 gap-4 mb-4 py-3 border-y border-border">
            <div v-for="metric in project.impact" :key="metric.label" class="text-center">
              <div class="text-lg font-bold text-primary">{{ metric.value }}</div>
              <div class="text-xs text-text-muted">{{ metric.label }}</div>
            </div>
          </div>
          
          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mt-auto">
            <Badge v-for="tech in project.technologies" :key="tech" variant="primary">
              {{ tech }}
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  </Section>

  <!-- Template Section -->
  <Section class="bg-surface/50">
    <Card class="border-2 border-dashed border-border p-12 text-center">
      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      </div>
      <h3 class="heading-3 mb-3">More Projects Coming Soon</h3>
      <p class="body max-w-lg mx-auto mb-6">
        I'm continuously working on new projects. Check back soon for updates, or 
        get in touch if you'd like to discuss a potential collaboration.
      </p>
      <Button variant="secondary" @click="$router.push('/contact')">
        Let's Work Together
      </Button>
    </Card>
  </Section>

  <!-- Project Template Guide -->
  <Section>
    <div class="max-w-3xl mx-auto">
      <h2 class="heading-2 mb-6">How to Add Your Projects</h2>
      <Card>
        <div class="space-y-4 body">
          <p>
            To add your own projects, edit the <code class="bg-surface-elevated px-2 py-1 rounded text-primary">projects</code> array 
            in <code class="bg-surface-elevated px-2 py-1 rounded text-primary">src/pages/Projects.vue</code>.
          </p>
          <p>Each project should include:</p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Title</strong> - Project name</li>
            <li><strong>Description</strong> - What the project does and your role</li>
            <li><strong>Category</strong> - Data Engineering, Analytics, Visualization, etc.</li>
            <li><strong>Technologies</strong> - Tools and technologies used</li>
            <li><strong>Impact metrics</strong> - Quantifiable results (optional)</li>
            <li><strong>Links</strong> - Demo and repository URLs (optional)</li>
          </ul>
          <div class="pt-4 border-t border-border">
            <p class="text-sm text-text-muted">
              Replace the emoji icons with actual project screenshots by updating the icon field to an image URL.
            </p>
          </div>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Section from '../components/ui/Section.vue'
import Card from '../components/ui/Card.vue'
import Badge from '../components/ui/Badge.vue'
import Button from '../components/ui/Button.vue'

const activeCategory = ref('All')

const categories = ['All', 'Data Engineering', 'Analytics', 'Visualization', 'ETL']

const projects = [
  {
    id: 1,
    title: 'Cloud Data Warehouse Migration',
    description: 'Led end-to-end migration from legacy on-premise data warehouse to Google BigQuery. Implemented dbt for data transformation and Airflow for orchestration.',
    category: 'Data Engineering',
    icon: '🏗️',
    technologies: ['BigQuery', 'dbt', 'Airflow', 'Python', 'SQL'],
    impact: [
      { label: 'Performance', value: '300%' },
      { label: 'Cost Savings', value: '40%' },
      { label: 'Data Volume', value: '10TB' }
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 2,
    title: 'Real-time Analytics Pipeline',
    description: 'Built a streaming data pipeline processing over 1 million events daily. Implemented Kafka for message queuing and Flink for stream processing.',
    category: 'Data Engineering',
    icon: '⚡',
    technologies: ['Kafka', 'Flink', 'Python', 'PostgreSQL', 'Docker'],
    impact: [
      { label: 'Events/Day', value: '1M+' },
      { label: 'Latency', value: '<1s' },
      { label: 'Uptime', value: '99.9%' }
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 3,
    title: 'Self-Service BI Platform',
    description: 'Created an automated reporting infrastructure using dbt and Looker. Enabled business teams to access real-time insights without engineering support.',
    category: 'Analytics',
    icon: '📊',
    technologies: ['dbt', 'Looker', 'BigQuery', 'SQL', 'Git'],
    impact: [
      { label: 'Reports', value: '50+' },
      { label: 'Users', value: '200+' },
      { label: 'Time Saved', value: '20h/w' }
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 4,
    title: 'Customer Segmentation Model',
    description: 'Developed a machine learning model to segment customers based on behavior and transaction history. Integrated with marketing automation tools.',
    category: 'Analytics',
    icon: '🎯',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'AWS SageMaker'],
    impact: [
      { label: 'Accuracy', value: '85%' },
      { label: 'Segments', value: '8' },
      { label: 'ROI', value: '150%' }
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 5,
    title: 'Data Quality Framework',
    description: 'Implemented comprehensive data quality monitoring using Great Expectations. Automated validation and alerting for critical data pipelines.',
    category: 'Data Engineering',
    icon: '✅',
    technologies: ['Great Expectations', 'Python', 'Airflow', 'Slack API'],
    impact: [
      { label: 'Tests', value: '500+' },
      { label: 'Issues Caught', value: '100+' },
      { label: 'Coverage', value: '95%' }
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 6,
    title: 'Executive Dashboard Suite',
    description: 'Designed and built a suite of executive dashboards providing real-time visibility into key business metrics across sales, marketing, and operations.',
    category: 'Visualization',
    icon: '📈',
    technologies: ['Looker', 'SQL', 'dbt', 'Figma'],
    impact: [
      { label: 'Dashboards', value: '12' },
      { label: 'KPIs', value: '100+' },
      { label: 'Refresh', value: 'Real-time' }
    ],
    demoUrl: null,
    repoUrl: null
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})
</script>
