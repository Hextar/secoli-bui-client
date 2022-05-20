<template>
  <main
    class="default-layout h-100 flex flex-1 flex-col bg-black-700"
    v-bind="$attrs"
  >
    <router-view />
    <Footer />
  </main>
</template>