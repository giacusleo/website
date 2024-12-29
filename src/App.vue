<template>
  <div class="min-h-screen font-sans">
    <header class="p-6">
      <nav class="flex justify-between items-center max-w-3xl mx-auto">
        <router-link to="/" class="text-xl font-bold">Giacomo Leo</router-link>
        <div class="flex gap-4">
          <router-link to="/projects">Projects</router-link>
          <router-link to="/blog">Blog</router-link>
        </div>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto p-6">
      <router-view />
    </main>
  </div>
</template> 