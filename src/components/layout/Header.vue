<template>
  <div class="header">
    <div class="header__logo mb-8 flex flex-col items-center justify-center">
      <img src="/images/secoli_bui_logo_dark.png" width="420" />
    </div>
    <template
      class="header__content flex flex-wrap items-center justify-center gap-8"
    >
      <router-link
        class="header__content__item cursor-pointer font-display text-lg text-white-100"
        to="/"
        exact
      >
        Home
      </router-link>
      <router-link
        class="header__content__item cursor-pointer font-display text-lg text-white-100"
        to="/events"
        exact
      >
        Eventi
      </router-link>
      <router-link
        class="header__content__item cursor-pointer font-display text-lg text-white-100"
        to="/system"
        exact
      >
        Ambientazione
      </router-link>
      <router-link
        class="header__content__item cursor-pointer font-display text-lg text-white-100"
        to="/play-with-us"
        exact
      >
        Gioca con noi
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  &__content {
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
    }
  }
}
</style>
