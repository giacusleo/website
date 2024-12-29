<template>
  <router-link
    :to="to"
    class="px-4 py-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
    :class="{ 'text-primary': isActive }"
  >
    <slot />
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script> 