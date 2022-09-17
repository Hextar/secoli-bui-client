<script setup lang="ts">
import { PropType, Ref, ref } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';

import { IconChevron, IconTent } from '~/assets/icons'
import { useMenuItem } from '~/composables'
import type { MenuItemType } from '~/types'

// PROPS
const props = defineProps({
  item: { required: true, type: Object as PropType<MenuItemType> }
})

// USE
const { isActive } = useMenuItem()
const router = useRouter()

// VARIABLES
const open: Ref<Boolean> = ref(false)

// COMPUTED
const hasChildren = computed((): boolean => {
  return !!props.item.children &&
    !!(props.item.children || []).length
})

const hasNavigation = computed((): boolean => {
  return !!props.item.to
})

const hasActiveNavigation = computed((): boolean => {
  if (!props.item.to) { return false }
  return isActive(props.item.to, !!props.item.to.hash)
})

const showLink = computed((): boolean => {
  return !hasChildren.value && hasNavigation.value && !!props.item.to
})

// METHODS
const onNavigate = (to?: RouteLocationRaw): void => {
  if (!to) { return }
  router.push(to)
}
</script>
  
<template>
  <ExpansionPanel :open.sync="open">
    <template #trigger>
      <div class="menu__content__item relative cursor-pointer font-display text-lg font-bold text-white-100 grayscale"
        :class="{ 'menu__content__item--active': hasActiveNavigation }">
        <span v-if="showLink && item.to" class="w-full flex items-center text-center"
          :class="{ 'pr-4': item.homepage }">
          <IconTent v-if="item.homepage" />
          <router-link class="tet-center" :class="{ 'menu__content__item__label': showLink }" :disabled="item.disabled"
            :aria-label="item.label" :to="item.to" exact>
            {{ item.label }}
          </router-link>
        </span>
        <span v-else class="w-full flex items-center text-center pl-2">
          {{ item.label }}
          <IconChevron :class=" { 'rotate-180' : open }" />
        </span>
      </div>
    </template>
    <template #content>
      <ListElement v-for="(child, idx) in item.children"
        class="popup-menu__content__item px-2 w-full h-[fit-content] cursor-item" :key="`${child?.label}-${idx}`"
        :disabled="child.disabled" @click="onNavigate(child.to)">
        <span class="py-2 text-white-100 w-full text-center"
          :class="{ 'menu__content__item__label': !child.disabled, 'menu__content__item__disabled': child.disabled }">
          {{ child.label }}
        </span>
      </ListElement>
    </template>
  </ExpansionPanel>
</template>
  
<style lang="scss" scoped>
.menu__ content {
  @include menuItem;

  &__item {
    &__disabled {
      opacity: 0.55;
    }
  }
}
</style>