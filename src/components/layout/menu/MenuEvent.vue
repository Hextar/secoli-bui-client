<template>
  <div
    class="menu-event flex justify-between py-4 px-8"
    :class="{
      'menu-event--scrolled': hasScrolledY(parsedScrollThreshold),
      'backdrop-blur': hasScrolledY(parsedScrollThreshold),
    }"
    v-bind="$attrs"
  >
    <div
      v-if="belowTablet"
      class="menu__logo animate__slide-from-above my-2 flex w-full flex-col items-center justify-center"
    >
      <Logo :size="belowTablet ? 'small' : 'medium'" homepage />
    </div>
    <div v-else class="animate_bg-fade flex h-full items-center justify-between gap-4">
      <router-link
        class="menu-event__back flex items-center justify-start text-white-100"
        :class="{
          'text-black-700': hasScrolledY(parsedScrollThreshold),
        }"
        to="/"
      >
        <IconArrow
          v-if="hasScrolledY(parsedScrollThreshold)"
          class="menu-event__back__arrow cursor-pointer fill-current"
        />
        <Logo v-else size="small" />
      </router-link>
      <h2
        v-if="hasScrolledY(parsedScrollThreshold)"
        class="font-display text-2xl text-white-100"
        :class="{
          'text-black-700': hasScrolledY(parsedScrollThreshold),
        }"
      >
        La Pesca dei Burattini
      </h2>
    </div>
    <div v-if="aboveTablet" class="menu-event__content justify-satrt items-center gap-8 md:flex">
      <div
        v-for="({ label, to, tooltip, disabled }, idx) in items"
        :key="`${label}-${idx}`"
        class="flex items-center justify-center"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu-event__content__item cursor-pointer items-center font-display text-lg font-bold text-white-100"
          :class="{
            'menu-event__content__item--active': isActive(to, true),
            'menu-event__content__item--scrolled': hasScrolledY(parsedScrollThreshold),
            'text-black-700': hasScrolledY(parsedScrollThreshold),
          }"
          :disabled="disabled"
          :to="to"
          exact
        >
          {{ label }}
        </router-link>
      </div>
      <Button class="w-[112px]" variant="filled" color="primary" size="small" :disabled="!!loading">
        <span class="font-display text-lg font-bold" @click.prevent="downloadAttachment">
          {{ loading ? 'Castando...' : 'Iscriviti' }}
        </span>
      </Button>
    </div>
  </div>
  <MenuMobile
    v-if="belowTablet"
    :items="items"
    :scrolled="hasScrolledY(parsedScrollThreshold)"
    match-hash
  />
</template>

<script setup lang="ts">
import { computed, ref, Ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useMenuItem, useScroll, useViewport } from '@/hooks'
import { saveAs } from 'file-saver'
import { MenuItemType, TooltipOptions } from '@/types'

import { IconArrow } from '@/assets/icons'
import { Button, Logo } from '@/components/common'
import { MenuMobile } from '@/components/layout'

// PROPS
const props = defineProps({
  scrollThreshold: { type: Number, default: 200 },
})

// VARIABLES
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events', hash: '#info' },
    tooltip: { content: 'Scrolla a: Informazioni', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Incipit',
    to: { path: '/events', hash: '#incipit' },
    tooltip: { content: 'Scrolla a: Incipit', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Fazioni',
    to: { path: '/events', hash: '#fazioni' },
    tooltip: { content: 'Scrolla a: Teaser fazioni', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Come funziona?',
    to: { path: '/events', hash: '#howItWorks' },
    tooltip: { content: 'Scrolla a: Come funziona?', placement: 'bottom' },
    homepage: true,
  },
]

// COMPUTED
const { aboveTablet, belowTablet } = useViewport()
const parsedScrollThreshold = computed(() => props.scrollThreshold - 54)

const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Torna alla tenda master',
    placement: 'top',
    theme: 'secoli-bui',
  })
)

// METHODS
const { hasScrolledY } = useScroll()
const { isActive } = useMenuItem()

const downloadAttachment = async (): Promise<void> => {
  loading.value = true
  axios
    .get('/files/iscrizione.pdf', { responseType: 'blob' })
    .then((response) => saveAs(response.data, 'secoli-bui-iscrizione.pdf'))
    .catch((err: unknown) => console.error(err))
    .finally(() => (loading.value = false))
}
</script>

<style lang="scss">
.menu-mobile {
  top: 24px !important;
  transition: top 0.255s ease-in-out;

  &--scrolled {
    top: 12px !important;
    left: 16px;
  }
}
</style>

<style lang="scss" scoped>
.menu-event {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: all 0.255s ease-in-out;

  &--scrolled {
    padding: 4px 32px;
  }

  &__back {
    &__arrow {
      height: 32px;
      height: 32px;
      margin: 12px 0;
      transform: rotate(90deg);
    }
  }

  &__content {
    @include menuItem;
  }
}
</style>
