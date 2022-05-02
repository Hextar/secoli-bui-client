<template>
  <div class="article flex flex-col items-center justify-start bg-white-100 px-8" v-bind="$attrs">
    <div class="prose lg:prose-xl">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
