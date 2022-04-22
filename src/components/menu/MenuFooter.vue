<template>
  <div class="menu-footer">
    <template
      class="menu-footer__content flex flex-wrap items-start justify-center gap-16 md:justify-end"
    >
      <div
        v-for="({ label, to, tooltip, disabled, children }, idx) in items"
        :key="`${label}-${idx}`"
        class="justiy-start flex h-full w-full flex-col items-center md:w-32 md:items-start"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu-footer__content__title mb-4 cursor-pointer text-center font-display text-lg font-bold text-white-100"
          :to="to"
          :disabled="disabled"
          exact
        >
          {{ label }}
        </router-link>
        <template
          v-for="(
            { label: childLabel, to: childTo, tooltip: childTooltip, disabled: childDisabled },
            childIdx
          ) in children"
          :key="`${childLabel}-${childIdx}`"
          v-tooltip="childTooltip"
        >
          <router-link
            class="menu-footer__content__item mb-2 cursor-pointer font-display text-sm text-white-100"
            :to="childTo"
            :disabled="childDisabled"
            exact
          >
            {{ childLabel }}
          </router-link>
        </template>
      </div>
      <div class="justiy-start flex h-full w-full flex-col items-center md:w-32 md:items-start">
        <span
          class="menu-footer__content__title mb-4 w-full cursor-pointer text-center font-display text-lg font-bold text-white-100 md:text-left"
          exact
        >
          Newsletter
        </span>
        <span class="mb-8 font-body text-sm text-grey-500">
          Non perderti tutti gli aggiornatmenti dei nostri eventi LARP
        </span>
        <Button
          tag="a"
          href="https://mailchi.mp/bd173f18b082/iscriviti"
          rel="nofollow"
          alt="Iscriviti alla newsletter"
          title="Iscriviti alla newsletter"
          target="_blank"
        >
          Iscriviti
        </Button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MenuItems } from '@/router/items'

const items = MenuItems.filter(({ label }) => label !== 'Home')

const getFraction = computed((): number => {
  return items.length + 1
})
</script>

<style lang="scss" scoped>
.menu-footer {
  &__logo {
    z-index: 2;
  }

  &__content {
    &__title,
    &__item {
      position: relative;
      z-index: 1;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px;
        width: 0px;
        background-color: theme('colors.white.100');
        transition: width 0.255s ease-in-out;
        z-index: 2;
      }

      &.router-link-exact-active:after,
      &:hover:after {
        width: 100%;
      }

      &[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
}
</style>
