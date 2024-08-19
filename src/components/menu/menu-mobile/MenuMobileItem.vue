<script setup lang="ts">
import { PropType, ref } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';

import { IconChevron, IconTent, IconExternal } from '~/assets/icons'
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
const open = ref(false)

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
  if (external) {
    window.open(`${to?.path}`, '_blank')
    return
  }
  router.push(to)
}
</script>
  
<template>
  <div class="menu__content__item relative cursor-pointer font-display text-lg font-bold text-white-100 grayscale"
    :class="{ 'menu__content__item--active': hasActiveNavigation }">
    <a v-if="showLink && item.external && item.to?.path" class="flex gap-1 items-center cursor-alias"
      :class="{ 'menu__content__item__label': showLink }" :disabled="item.disabled" :aria-label="item.label"
      :href="item.to?.path" target="_blank">
      {{ item.label }}
      <IconExternal class="h-4 w-4" />
    </a>
    <span v-else-if="showLink && item.to" class="w-full flex items-center text-center" :class="{ 'pr-4': item.homepage }">
      <IconTent v-if="item.homepage" />
      <router-link class="tet-center" :class="{ 'menu__content__item__label': showLink }" :disabled="item.disabled"
        :aria-label="item.label" :to="item.to" exact>
        {{ item.label }}
      </router-link>
    </span>
    <ExpansionPanel v-else v-model:value="open" :class="{ 'pa-4 border-t border-b': open }">
      <template #trigger>
        <span class="w-full flex justify-center items-center text-center pl-2" :class="{ 'line-through mb-4': open }">
          {{ item.label }}
          <IconChevron :class="{ 'rotate-180': open }" />
        </span>
      </template>
      <template #content>
        <span class="w-full flex flex-col justify-center items-center text-center">
          <ListElement v-for="(child, idx) in item.children"
            class="popup-menu__content__item pa-2 w-full flex justify-center h-[fit-content] cursor-item"
            :key="`${child?.label}-${idx}`" :disabled="child.disabled" @click="onNavigate(child.to)">
            <span class=" text-white-100 w-full text-center"
              :class="{ 'menu__content__item__label': !child.disabled, 'menu__content__item__disabled': child.disabled }">
              {{ child.label }}
              <IconExternal v-if="child.external" class="h-4 w-4" />
            </span>
          </ListElement>
        </span>
      </template>
    </ExpansionPanel>
  </div>
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