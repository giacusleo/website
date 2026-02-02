<template>
  <section :class="['section', className]">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
