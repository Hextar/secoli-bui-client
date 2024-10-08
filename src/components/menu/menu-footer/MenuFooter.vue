<script setup lang="ts">
import { MenuItems } from '~/pages/items'

import { IconExternal } from '~/assets/icons'

import { useMenuItem, useViewport } from '~/composables'

// USE
const { isMobile } = useViewport()
const { t } = useI18n()

// VARIABLES
const items = MenuItems.filter(({ homepage }) => !homepage)

// METHODS
const { isActive } = useMenuItem()
</script>

<template>
  <section class="menu-footer" v-bind="$attrs">
    <div class="menu-footer__content flex flex-wrap items-start justify-center gap-8 md:justify-end md:gap-16">
      <div v-for="item in items" :key="item.label"
        class="justify-start flex h-full w-full flex-col items-center md:w-32 md:items-start">
        <Tooltip :disabled="item.tooltip ? item.tooltip.disabled : undefined"
          :placement="item.tooltip ? item.tooltip.placement : undefined" light>
          <template #trigger>
            <a v-if="item.external && item.to?.path"
              class="flex gap-1 items-center cursor-alias text-lg text-center font-bold text-white-100" :disabled="item.disabled"
              :aria-label="item.label" :href="item.to?.path" target="_blank">
              {{ item.label }}
              <IconExternal class="h-4 w-4" />
            </a>
            <router-link v-else-if="item.to"
              class="menu-footer__content__title mb-4 cursor-pointer text-center font-display text-lg font-bold text-white-100"
              :class="{ 'menu-footer__content__title--active': isActive(item.to) }" :disabled="item.disabled"
              :aria-label="item.label" :to="item.to" exact>
              {{ item.label }}
            </router-link>
            <span v-else
              class="menu-footer__content__title mb-4 cursor-pointer text-center font-display text-lg font-bold text-white-100">
              {{ item.label }}
            </span>
          </template>
          {{ item.tooltip ? item.tooltip.content : '' }}
        </Tooltip>
        <div v-for="child in item.children" :key="child.label">
          <Tooltip :disabled="child.tooltip ? child.tooltip.disabled : undefined"
            :placement="child.tooltip ? child.tooltip.placement : undefined" light>
            <template #trigger>
              <a v-if="item.external && item.to?.path" class="flex gap-1 items-center cursor-alias"
                :disabled="item.disabled" :aria-label="item.label" :href="item.to?.path" target="_blank">
                {{ item.label }}
                <IconExternal class="h-4 w-4" />
              </a>
              <router-link v-else-if="child.to"
                class="menu-footer__content__item mb-2 cursor-pointer font-display text-sm text-white-100"
                :class="{ 'menu-footer__content__item--active': isActive(child.to) }" :disabled="child.disabled"
                :aria-label="child.label" :to="child.to" exact>
                {{ child.label }}
              </router-link>
              <span v-else class="menu-footer__content__item mb-2 cursor-pointer font-display text-sm text-white-100">
                {{ child.label }}
              </span>
            </template>
            {{ child.tooltip ? child.tooltip.content : '' }}
          </Tooltip>
        </div>
      </div>
      <div class="justiy-start flex h-full w-full flex-col items-center md:w-32 md:items-start">
        <span
          class="menu-footer__content__title-special mb-4 text-center font-display text-lg font-bold text-white-100 md:text-left"
          exact>
          Newsletter
        </span>
        <span class="mb-8 text-center font-body text-sm text-grey-500 md:text-left">
          Non perderti tutti gli aggiornamenti dei nostri eventi LARP
        </span>
        <Button variant="outline" tag="a" href="https://mailchi.mp/bd173f18b082/iscriviti"
          title="Iscriviti alla newsletter" alt="Iscriviti alla newsletter" rel="noopener noreferrer" target="_blank">
          {{ t('common.subscribe') }} {{ isMobile ? 'alla newsletter' : '' }}
        </Button>
      </div>
    </div>
  </section>
</template>

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
