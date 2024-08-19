<script setup lang="ts">
import { PropType, Ref, ref } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';

import { IconChevron } from '~/assets/icons'
import { IconExternal } from '~/assets/icons'
import { useMenuItem } from '~/composables'
import type { MenuItemType } from '~/types'
import { ItemHoverState } from '~/components/menu';

// PROPS
const props = defineProps({
  item: { required: true, type: Object as PropType<MenuItemType> },
})

// USE
const { isActive } = useMenuItem()
const router = useRouter()

const { emit } = getCurrentInstance() as NonNullable<ReturnType<typeof getCurrentInstance>>

// VARIABLES
const open: Ref<ItemHoverState> = ref(ItemHoverState.NOT_HOVERED)
const closeTimeoutID: Ref<any | null> = ref(null)

// COMPUTED
const hasChildren = computed((): boolean => {
  return !!props.item.children &&
    !!(props.item.children || []).length
})

const showPopupMenu = computed((): boolean => {
  return open.value > ItemHoverState.NOT_HOVERED &&
    hasChildren.value
})

const hasNavigation = computed((): boolean => {
  return !!props.item.to
})

const hasActiveNavigation = computed((): boolean => {
  if (!props.item.to) { return false }
  return isActive(props.item.to)
})

const showLink = computed((): boolean => {
  return !hasChildren.value && hasNavigation.value && !!props.item.to
})

// METHODS
const onOpen = (item: boolean = false): void => {
  if (closeTimeoutID.value) { clearTimeout(closeTimeoutID.value) }
  emit('open')
  open.value = item
    ? ItemHoverState.HOVERED_ITEM
    : ItemHoverState.HOVERED_TRIGGER
}

const onClose = (item: boolean = false): void => {
  closeTimeoutID.value = setTimeout(() => {
    emit('close')
    open.value = ItemHoverState.NOT_HOVERED
  },)
}

const onNavigate = (to?: RouteLocationRaw, external = false): void => {
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
    :class="{ 'menu__content__item--active': hasActiveNavigation }" @mouseover="onOpen()" @mouseleave="onClose()">
    <a v-if="showLink && item.external && item.to?.path" class="flex gap-1 items-center cursor-alias"
      :class="{ 'menu__content__item__label': showLink }" :disabled="item.disabled" :aria-label="item.label"
      :href="item.to?.path" target="_blank">
      {{ item.label }}
      <IconExternal class="h-4 w-4" />
    </a>
    <router-link v-else-if="showLink && item.to" :class="{ 'menu__content__item__label': showLink }"
      :disabled="item.disabled" :aria-label="item.label" :to="item.to" exact>
      {{ item.label }}
    </router-link>
    <span v-else class="flex items-center">
      {{ item.label }}
      <IconChevron :class="{ 'rotate-180': showPopupMenu }" />
    </span>
  </div>
  <PopupMenu ref="popupMenu" v-if="showPopupMenu" class="popup-menu px-2" :class="{
    'popup-menu--open': showPopupMenu
  }" @click:outside="onClose" @mouseover="onOpen(true)" @mouseleave="onClose(true)">
    <ListElement v-for="(child, idx) in item.children"
      class="menu__content__itemflex items-center gap-1 w-full h-[fit-content] cursor-item"
      :key="`${child?.label}-${idx}`" :disabled="child.disabled" @click="onNavigate(child.to, child.external)">
      <span class="py-2 text-white-100 w-full"
        :class="{ 'menu__content__item__label': !child.disabled, 'menu__content__item__disabled': child.disabled, 'cursor-alias': child.external }">
        {{ child.label }}
        <IconExternal v-if="child.external" class="h-4 w-4" />
      </span>
    </ListElement>
  </PopupMenu>
</template>

<style lang="scss" scoped>
.menu__content {
  @include menuItem;

  &__item {
    &__disabled {
      opacity: 0.55;
    }
  }
}
</style>