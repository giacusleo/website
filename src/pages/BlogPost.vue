<template>
  <Section class="pt-24">
    <div class="max-w-3xl mx-auto">
      <!-- Back Button -->
      <button 
        @click="$router.push('/blog')"
        class="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to Blog
      </button>

      <!-- Post Header -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-4">
          <Badge variant="primary">{{ post.category }}</Badge>
          <span class="text-text-muted">{{ post.date }}</span>
          <span class="text-text-muted">•</span>
          <span class="text-text-muted">{{ post.readTime }}</span>
        </div>
        <h1 class="heading-1 mb-6">{{ post.title }}</h1>
        <p class="body-large text-text-secondary">{{ post.excerpt }}</p>
      </div>

      <!-- Post Content -->
      <article class="prose prose-invert max-w-none">
        <div class="space-y-6 body">
          <p>
            This is a sample blog post template. When you're ready to write your own blog posts, 
            you can replace this content with your actual writing. Each blog post can cover topics 
            like data engineering best practices, analytics tutorials, or insights from your 
            professional experience.
          </p>

          <h3 class="heading-3 text-text-primary mt-8">Why Write About Data Engineering?</h3>
          <p>
            Sharing your knowledge through blog posts serves multiple purposes. It helps establish 
            you as a thought leader in the analytics engineering space, demonstrates your expertise 
            to potential clients, and contributes to the broader data community.
          </p>

          <p>
            Topics you might consider writing about:
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Technical tutorials on specific tools (dbt, Airflow, BigQuery)</li>
            <li>Case studies from projects you've worked on</li>
            <li>Best practices for data modeling and pipeline design</li>
            <li>Industry trends and emerging technologies</li>
            <li>Lessons learned from challenges you've overcome</li>
          </ul>

          <h3 class="heading-3 text-text-primary mt-8">Getting Started</h3>
          <p>
            To add real blog posts, you have a few options:
          </p>
          <ol class="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Simple approach:</strong> Update the content in this component directly</li>
            <li><strong>Markdown files:</strong> Create .md files in src/content/blog/ and load them dynamically</li>
            <li><strong>CMS integration:</strong> Connect to a headless CMS like Contentful or Sanity</li>
          </ol>

          <div class="bg-surface-elevated border border-border rounded-lg p-6 mt-8">
            <h4 class="font-semibold text-text-primary mb-2">💡 Pro Tip</h4>
            <p class="text-sm text-text-secondary mb-0">
              Start with just 2-3 blog posts that showcase your expertise. Quality is better than 
              quantity, and you can always add more content over time.
            </p>
          </div>
        </div>
      </article>

      <!-- Post Footer -->
      <div class="mt-16 pt-8 border-t border-border">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <span class="text-text-muted">Share:</span>
            <div class="flex gap-3">
              <a 
                href="#" 
                class="text-text-muted hover:text-primary transition-colors"
                aria-label="Share on Twitter"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                class="text-text-muted hover:text-primary transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <Button variant="secondary" @click="$router.push('/contact')">
            Discuss This Post
          </Button>
        </div>
      </div>

      <!-- Related Posts -->
      <div class="mt-16">
        <h3 class="heading-3 mb-6">Related Articles</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <Card 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost.slug"
            class="cursor-pointer"
            @click="$router.push(`/blog/${relatedPost.slug}`)"
          >
            <Badge variant="primary" class="mb-3">{{ relatedPost.category }}</Badge>
            <h4 class="font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
              {{ relatedPost.title }}
            </h4>
            <p class="text-sm text-text-muted">{{ relatedPost.date }}</p>
          </Card>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Section from '../components/ui/Section.vue'
import Card from '../components/ui/Card.vue'
import Badge from '../components/ui/Badge.vue'
import Button from '../components/ui/Button.vue'

const route = useRoute()
const slug = route.params.slug

// In a real implementation, you'd fetch the post data based on the slug
const post = {
  slug: slug,
  title: 'Building Scalable Data Pipelines with dbt and Airflow',
  excerpt: 'Learn how to design and implement robust data pipelines that can handle millions of records while maintaining data quality and reliability.',
  category: 'Data Engineering',
  date: 'Jan 15, 2024',
  readTime: '8 min read'
}

const relatedPosts = [
  {
    slug: 'data-warehouse-best-practices',
    title: 'Data Warehouse Best Practices for Analytics Engineers',
    category: 'Analytics',
    date: 'Dec 20, 2023'
  },
  {
    slug: 'modern-data-stack',
    title: 'The Modern Data Stack: Tools and Architecture',
    category: 'Architecture',
    date: 'Nov 8, 2023'
  }
]
</script>
