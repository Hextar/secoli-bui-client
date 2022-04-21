<template>
  <div class="menu-footer">
    <template class="menu-footer__content flex flex-wrap items-start justify-end gap-32">
      <div
        v-for="({ label, to, tooltip, disabled, children }, idx) in items"
        :key="`${label}-${idx}`"
        class="justiy-start flex h-full flex-col items-start"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu-footer__content__title mb-4 cursor-pointer font-display text-lg font-bold text-white-100"
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
      <div class="justiy-start flex h-full flex-col items-start">
        <span
          class="menu-footer__content__title mb-4 cursor-pointer font-display text-lg font-bold text-white-100"
          :disabled="disabled"
          exact
        >
          Newsletter
        </span>
        <span class="mb-4 text-sm text-white-500">
          La Mad² Factory è un'associazione che si propone come trampolino di lancio per
          associazioni nascenti e/o progetti ed eventi che abbiano finalità ludiche come larp
          (giochi di ruolo dal vivo) ed attività affini.
        </span>
        <Button
          class="px-4"
          tag="a"
          href="https://www.facebook.com/"
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
import { MenuItems } from './items'

const items = MenuItems.filter(({ label }) => label !== 'Home')
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
