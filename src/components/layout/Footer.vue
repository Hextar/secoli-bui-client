<script setup lang="ts">
import { madLogo } from '~/assets/images'

const { t } = useI18n()
</script>

<template>
  <div class="footer flex flex-col items-center justify-center bg-black-700" v-bind="$attrs">
    <div class="footer__main relative flex items-center justify-center px-8 pb-8">
      <div class="container mb-4 flex flex-wrap items-start justify-between py-8">
        <div class="mb-16 flex flex-col items-center gap-8 md:mb-0 md:w-1/5 md:items-start">
          <a href="https://www.facebook.com/mad2factory/" rel="noopener noreferrer" title="mad_2_factory"
            alt="mad_2_factory" target="_blank">
            <Image class="footer__main__logo" :width="160" :src="madLogo" title="Mad2Factory logo"
              alt="Mad2Factory logo" />
          </a>
          <span class="text-center font-body text-sm text-white-500 md:text-left">
            {{ t('footer.desc') }}
          </span>
        </div>
        <div class="flex flex-col justify-center gap-8 md:w-4/5">
          <MenuFooter />
        </div>
      </div>
    </div>
    <div class="footer__bloody relative flex w-full items-center justify-center bg-primary-500 p-8">
      <div class="container flex flex-wrap w-full items-start justify-between font-display">
        <span class="footer__bloody__copyright mb-8 w-full text-center text-grey-700 md:mb-0 md:w-1/2 md:text-left">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
        </span>
        <router-link
          class="footer__bloody__privacy-policy w-full text-center font-display text-grey-700 md:w-1/2 md:text-right"
          to="/" aria-label="politica sulla privacy" disabled>
          {{ t('footer.privacy') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 0;

  &__main--muddy,
  &__bloody {
    $blood-h: 48px;
    padding-top: $blood-h;

    &:before {
      content: '';
      position: absolute;
      height: $blood-h !important;
      top: calc(-#{$blood-h} + 1px);
      left: 0;
      right: 0;
      background-image: url('~/assets/images/elf_juice.svg');
      background-size: contain;
      background-position: center bottom;
      background-repeat: no-repeat;
      z-index: 2;
    }
  }

  &__main--muddy {
    padding-top: 0;

    &:before {
      background-image: url('~/assets/images/orc_juice.svg');
    }
  }
}
</style>
