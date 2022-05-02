<template>
  <div class="menu-footer" v-bind="$attrs">
    <template
      class="menu-footer__content flex flex-wrap items-start justify-center gap-8 md:justify-end md:gap-16"
    >
      <div
        v-for="({ label, to, tooltip, disabled, children }, idx) in items"
        :key="`${label}-${idx}`"
        class="justiy-start flex h-full w-full flex-col items-center md:w-32 md:items-start"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu-footer__content__title mb-4 cursor-pointer text-center font-display text-lg font-bold text-white-100"
          :class="{ 'menu-footer__content__title--active': isActive(to) }"
          :disabled="disabled"
          :to="to"
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
            :class="{ 'menu-footer__content__item--active': isActive(childTo) }"
            :disabled="childDisabled"
            :to="childTo"
            exact
          >
            {{ childLabel }}
          </router-link>
        </template>
      </div>
      <div class="justiy-start flex h-full w-full flex-col items-center md:w-32 md:items-start">
        <span
          class="menu-footer__content__title-special mb-4 text-center font-display text-lg font-bold text-white-100 md:text-left"
          exact
        >
          Newsletter
        </span>
        <span class="mb-8 text-center font-body text-sm text-grey-500 md:text-left">
          Non perderti tutti gli aggiornamenti dei nostri eventi LARP
        </span>
        <Button
          tag="a"
          href="https://mailchi.mp/bd173f18b082/iscriviti"
          title="Iscriviti alla newsletter"
          alt="Iscriviti alla newsletter"
          rel="nofollow"
          target="_blank"
        >
          Iscriviti
        </Button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { MenuItems } from '@/router/items'
import { useMenuItem } from '@/hooks'

import { Button } from '@/components/common'

// VARIABLES
const items = MenuItems.filter(({ homepage }) => !homepage)

// METHODS
const { isActive } = useMenuItem()
</script>

<style lang="scss" scoped>
.menu-footer {
  &__logo {
    z-index: 2;
  }

  &__content {
    @include menuItem;
  }
}
</style>
