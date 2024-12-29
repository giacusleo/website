<template>
  <div class="min-h-screen font-sans prose dark:prose-invert max-w-none">
    <header class="p-6">
      <nav class="flex justify-between items-center max-w-3xl mx-auto">
        <router-link to="/" class="text-xl font-bold no-underline">
          Giacomo Leo @ giacusleo.me
        </router-link>
        <div class="flex gap-4">
          <router-link to="/blog" class="no-underline">Blog</router-link>
          <router-link to="/projects" class="no-underline">Projects</router-link>
          <router-link to="/talks" class="no-underline">Talks</router-link>
          <router-link to="/sponsors" class="no-underline">Sponsors</router-link>
        </div>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto px-6 py-12">
      <router-view />
    </main>
  </div>
</template> 