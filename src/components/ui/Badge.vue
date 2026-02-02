<template>
  <span
    :class="[
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      variant === 'primary' ? 'bg-primary/10 text-primary border border-primary/20' :
      variant === 'secondary' ? 'bg-secondary/10 text-secondary border border-secondary/20' :
      'bg-surface-elevated text-text-secondary border border-border',
      $attrs.class
    ]"
  >
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary'].includes(value)
  }
})
</script>
