<template>
  <Section class="pt-24">
    <div class="text-center mb-16">
      <h1 class="heading-1 mb-4">Blog</h1>
      <p class="body-large max-w-2xl mx-auto">
        Thoughts on data engineering, analytics, and building scalable data solutions.
      </p>
    </div>
  </Section>

  <Section>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        v-for="post in posts" 
        :key="post.slug"
        class="group flex flex-col h-full cursor-pointer"
        @click="$router.push(`/blog/${post.slug}`)"
      >
        <!-- Post Image -->
        <div class="relative aspect-video mb-6 rounded-lg overflow-hidden bg-surface-elevated">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-4xl">{{ post.icon }}</div>
          </div>
          <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Post Content -->
        <div class="flex-1 flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <Badge variant="primary">{{ post.category }}</Badge>
            <span class="text-sm text-text-muted">{{ post.readTime }}</span>
          </div>
          
          <h3 class="heading-3 mb-3 group-hover:text-primary transition-colors">
            {{ post.title }}
          </h3>
          
          <p class="body mb-4 flex-1">{{ post.excerpt }}</p>
          
          <div class="flex items-center justify-between pt-4 border-t border-border">
            <span class="text-sm text-text-muted">{{ post.date }}</span>
            <span class="text-primary text-sm font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </Card>
    </div>
  </Section>

  <!-- Template Guide -->
  <Section class="bg-surface/50">
    <div class="max-w-3xl mx-auto">
      <Card class="border-2 border-dashed border-border p-8 text-center">
        <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
          </svg>
        </div>
        <h3 class="heading-3 mb-3">Start Writing</h3>
        <p class="body mb-6">
          Add your blog posts by creating markdown files in <code class="bg-surface-elevated px-2 py-1 rounded text-primary">src/content/blog/</code> 
          and updating the posts array in this component.
        </p>
        <Button variant="secondary">
          View Sample Post
        </Button>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import Section from '../components/ui/Section.vue'
import Card from '../components/ui/Card.vue'
import Badge from '../components/ui/Badge.vue'
import Button from '../components/ui/Button.vue'

const posts = [
  {
    slug: 'building-scalable-data-pipelines',
    title: 'Building Scalable Data Pipelines with dbt and Airflow',
    excerpt: 'Learn how to design and implement robust data pipelines that can handle millions of records while maintaining data quality and reliability.',
    category: 'Data Engineering',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    icon: '🔄'
  },
  {
    slug: 'data-warehouse-best-practices',
    title: 'Data Warehouse Best Practices for Analytics Engineers',
    excerpt: 'A comprehensive guide to designing efficient data models, optimizing query performance, and maintaining data quality in your warehouse.',
    category: 'Analytics',
    date: 'Dec 20, 2023',
    readTime: '12 min read',
    icon: '📊'
  },
  {
    slug: 'modern-data-stack',
    title: 'The Modern Data Stack: Tools and Architecture',
    excerpt: 'Exploring the components of a modern data stack and how they work together to enable self-service analytics and data-driven decision making.',
    category: 'Architecture',
    date: 'Nov 8, 2023',
    readTime: '10 min read',
    icon: '🏗️'
  }
]
</script>
