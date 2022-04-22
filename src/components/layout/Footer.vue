<template>
  <div class="footer flex flex-col items-start justify-center">
    <div class="footer__main relative flex w-full items-center justify-center bg-black-700">
      <div class="container mb-4 flex w-full flex-wrap items-start justify-between p-8">
        <div class="mb-16 flex w-full flex-col items-center gap-8 md:mb-0 md:w-1/5 md:items-start">
          <a
            href="https://www.facebook.com/mad2factory/"
            rel="nofollow"
            title="mad_2_factory"
            alt="mad_2_factory"
          >
            <img
              class="footer__main__logo"
              width="160"
              src="/images/logo_mad_light.png"
              alt="Mad2Factory logo"
            />
          </a>
          <span class="text-center font-body text-sm text-white-500 md:text-left">
            La Mad² Factory è un'associazione che si propone come trampolino di lancio per
            associazioni nascenti e/o progetti ed eventi che abbiano finalità ludiche come larp
            (giochi di ruolo dal vivo) ed attività affini.
          </span>
        </div>
        <div class="flex w-full flex-col justify-center gap-8 md:w-4/5">
          <MenuFooter />
        </div>
      </div>
    </div>
    <div class="footer__bloody relative flex w-full items-center justify-center bg-primary-500 p-8">
      <div class="container flex w-full flex-wrap items-start justify-between font-display">
        <span
          class="footer__bloody__copyright mb-8 w-full text-center text-grey-700 md:mb-0 md:w-1/2 md:text-left"
        >
          ©2022 Mad Factory, All Rights Reserved
        </span>
        <router-link
          class="footer__bloody__privacy-policy w-full text-center font-display text-grey-700 md:w-1/2 md:text-right"
          to="/"
          title="politica sulla privacy"
          alt="politica sulla privacy"
          disabled
        >
          Politica sulla privacy
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  z-index: 0;

  &__bloody {
    $blood-h: 48px;
    margin-top: $blood-h;

    &:before {
      content: '';
      position: absolute;
      height: $blood-h !important;
      top: -#{$blood-h};
      left: 0;
      right: 0;
      background-image: url('@/assets/images/elf_juice.svg');
      background-size: contain;
      background-position: center bottom;
      background-repeat: no-repeat;
      z-index: 2;
    }
  }
}
</style>
