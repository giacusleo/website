<template>
  <Section class="pt-24">
    <div class="text-center mb-16">
      <h1 class="heading-1 mb-4">About Me</h1>
      <p class="body-large max-w-2xl mx-auto">
        Analytics Engineer specializing in building scalable data infrastructure 
        and transforming complex data into business insights.
      </p>
    </div>
  </Section>

  <!-- Professional Summary -->
  <Section>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="md:col-span-2 space-y-6">
        <h2 class="heading-2">Professional Summary</h2>
        <div class="space-y-4 body">
          <p>
            I'm an Analytics Engineer with extensive experience in designing and implementing 
            data solutions that drive business value. My expertise spans the entire data lifecycle 
            — from ingestion and transformation to visualization and analysis.
          </p>
          <p>
            I specialize in building robust data pipelines using modern tools like dbt, Airflow, 
            and cloud data warehouses. My approach combines technical excellence with a deep 
            understanding of business needs, ensuring that data solutions are not just technically 
            sound but also practical and impactful.
          </p>
          <p>
            Currently available for freelance projects and consulting opportunities, 
            I'm passionate about helping organizations unlock the full potential of their data assets.
          </p>
        </div>
        
        <div class="flex flex-wrap gap-4 pt-4">
          <Button variant="primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download CV
          </Button>
          <Button variant="secondary" @click="$router.push('/contact')">
            Get in Touch
          </Button>
        </div>
      </div>

      <div>
        <Card class="h-full">
          <h3 class="heading-3 mb-6">Quick Facts</h3>
          <div class="space-y-4">
            <div v-for="fact in quickFacts" :key="fact.label" class="flex justify-between items-center py-2 border-b border-border last:border-0">
              <span class="text-text-secondary">{{ fact.label }}</span>
              <span class="font-medium text-text-primary">{{ fact.value }}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </Section>

  <!-- Experience Timeline -->
  <Section class="bg-surface/50">
    <h2 class="heading-2 mb-12">Work Experience</h2>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
      
      <div class="space-y-12">
        <div 
          v-for="(job, index) in experiences" 
          :key="job.title"
          class="relative grid md:grid-cols-2 gap-8 items-start"
        >
          <!-- Timeline dot -->
          <div class="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2"></div>
          
          <!-- Content -->
          <div :class="['md:text-right', index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12']">
            <Card>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <h3 class="heading-3">{{ job.title }}</h3>
                <Badge v-if="job.current" variant="secondary">Current</Badge>
              </div>
              <p class="text-primary font-medium mb-1">{{ job.company }}</p>
              <p class="body-small mb-3">{{ job.period }} • {{ job.location }}</p>
              <p class="body mb-4">{{ job.description }}</p>
              <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                <Badge v-for="skill in job.skills" :key="skill" variant="primary">
                  {{ skill }}
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </Section>

  <!-- Skills Matrix -->
  <Section>
    <h2 class="heading-2 mb-12">Skills & Expertise</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="category in skillCategories" :key="category.name">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
            {{ category.icon }}
          </div>
          <h3 class="heading-3">{{ category.name }}</h3>
        </div>
        <div class="space-y-3">
          <div v-for="skill in category.skills" :key="skill.name">
            <div class="flex justify-between items-center mb-1">
              <span class="text-text-primary">{{ skill.name }}</span>
              <span class="text-sm text-text-muted">{{ skill.level }}</span>
            </div>
            <div class="h-2 bg-surface-elevated rounded-full overflow-hidden">
              <div 
                class="h-full bg-primary rounded-full transition-all duration-500"
                :style="{ width: skill.proficiency + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </Section>

  <!-- Education & Certifications -->
  <Section class="bg-surface/50">
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h2 class="heading-2 mb-6">Education</h2>
        <div class="space-y-4">
          <Card v-for="edu in education" :key="edu.degree">
            <h3 class="font-semibold text-text-primary mb-1">{{ edu.degree }}</h3>
            <p class="text-primary">{{ edu.school }}</p>
            <p class="body-small">{{ edu.period }}</p>
          </Card>
        </div>
      </div>

      <div>
        <h2 class="heading-2 mb-6">Certifications</h2>
        <div class="space-y-4">
          <Card v-for="cert in certifications" :key="cert.name">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-text-primary mb-1">{{ cert.name }}</h3>
                <p class="text-primary text-sm">{{ cert.issuer }}</p>
                <p class="body-small">{{ cert.date }}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </Section>

  <!-- CTA -->
  <Section>
    <Card class="text-center py-12">
      <h2 class="heading-2 mb-4">Interested in working together?</h2>
      <p class="body max-w-xl mx-auto mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <Button variant="primary" size="lg" @click="$router.push('/contact')">
        Let's Talk
      </Button>
    </Card>
  </Section>
</template>

<script setup>
import Section from '../components/ui/Section.vue'
import Button from '../components/ui/Button.vue'
import Card from '../components/ui/Card.vue'
import Badge from '../components/ui/Badge.vue'

const quickFacts = [
  { label: 'Experience', value: '5+ Years' },
  { label: 'Location', value: 'Remote / Europe' },
  { label: 'Availability', value: 'Open to Freelance' },
  { label: 'Languages', value: 'English, Italian' }
]

const experiences = [
  {
    title: 'Senior Analytics Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    location: 'Remote',
    current: true,
    description: 'Leading data infrastructure initiatives, implementing modern data stack with dbt, Airflow, and cloud warehouses. Building self-service analytics platforms and mentoring junior engineers.',
    skills: ['dbt', 'Airflow', 'BigQuery', 'Python']
  },
  {
    title: 'Data Engineer',
    company: 'Analytics Consulting Firm',
    period: '2020 - 2022',
    location: 'Remote',
    description: 'Designed and implemented ETL pipelines for multiple clients. Optimized data warehouse performance and built automated reporting solutions.',
    skills: ['SQL', 'Python', 'AWS', 'Looker']
  },
  {
    title: 'Business Intelligence Analyst',
    company: 'E-commerce Company',
    period: '2018 - 2020',
    location: 'On-site',
    description: 'Developed dashboards and reports to track KPIs. Conducted ad-hoc analysis to support business decisions and marketing campaigns.',
    skills: ['SQL', 'Tableau', 'Excel', 'Statistics']
  }
]

const skillCategories = [
  {
    name: 'Data Engineering',
    icon: '⚙️',
    skills: [
      { name: 'SQL', level: 'Expert', proficiency: 95 },
      { name: 'Python', level: 'Advanced', proficiency: 85 },
      { name: 'dbt', level: 'Expert', proficiency: 90 },
      { name: 'Airflow', level: 'Advanced', proficiency: 80 }
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: [
      { name: 'BigQuery', level: 'Expert', proficiency: 90 },
      { name: 'AWS', level: 'Advanced', proficiency: 75 },
      { name: 'Snowflake', level: 'Intermediate', proficiency: 70 },
      { name: 'Terraform', level: 'Intermediate', proficiency: 65 }
    ]
  },
  {
    name: 'Analytics & BI',
    icon: '📊',
    skills: [
      { name: 'Looker', level: 'Expert', proficiency: 85 },
      { name: 'Tableau', level: 'Advanced', proficiency: 80 },
      { name: 'Data Modeling', level: 'Expert', proficiency: 90 },
      { name: 'Statistics', level: 'Advanced', proficiency: 75 }
    ]
  }
]

const education = [
  {
    degree: 'Master\'s in Data Science',
    school: 'University Name',
    period: '2016 - 2018'
  },
  {
    degree: 'Bachelor\'s in Computer Science',
    school: 'University Name',
    period: '2012 - 2016'
  }
]

const certifications = [
  {
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google',
    date: '2023'
  },
  {
    name: 'dbt Analytics Engineering Certification',
    issuer: 'dbt Labs',
    date: '2022'
  },
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2021'
  }
]
</script>
