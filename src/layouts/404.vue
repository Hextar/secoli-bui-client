<template>
  <div
    class="default-layout h-100 flex flex-1 flex-col bg-black-700"
    v-bind="$attrs"
  >
    <RouterView />
    <Footer />
  </div>
</template>