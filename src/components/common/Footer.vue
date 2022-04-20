<template>
  <div class="footer relative flex flex-col items-start justify-center">
    <div class="footer__main relative flex w-full items-center justify-center bg-black-700">
      <div class="container mb-8 flex w-full flex-wrap items-start justify-between py-8">
        <div class="flex w-1/5 flex-col gap-8">
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
          <span class="text-sm text-white-500">
            La Mad² Factory è un'associazione che si propone come trampolino di lancio per
            associazioni nascenti e/o progetti ed eventi che abbiano finalità ludiche come larp
            (giochi di ruolo dal vivo) ed attività affini.
          </span>
        </div>
        <div class="flex w-1/5 flex-col justify-center gap-8">
          <span class="text-center font-display text-sm text-white-500">EVENTI</span>
        </div>
        <div class="flex w-1/5 flex-col justify-center gap-8">
          <span class="text-center font-display text-sm text-white-500">AMBIENTAZIONE</span>
        </div>
        <div class="flex w-1/5 flex-col justify-center gap-8">
          <span class="text-center font-display text-sm text-white-500">GIOCA CON NOI</span>
        </div>
        <div class="flex w-1/5 flex-col justify-center gap-8">
          <span class="text-center font-display text-sm text-white-500">NEWSLETTER</span>
        </div>
      </div>
    </div>
    <div
      class="footer__bloody relative flex w-full items-center justify-center bg-primary-500 py-8"
    >
      <div class="container flex w-full items-start justify-between font-display">
        <span class="footer__bloody__copyright text-grey-700">
          ©2022 Mad Factory, All Rights Reserved
        </span>
        <router-link
          class="footer__bloody__privacy-policy font-display text-grey-700"
          to="/"
          title="politica sulla privacy"
          alt="politica sulla privacy"
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
  &__main {
  }

  &__bloody {
    $blood-h: 32px;
    margin-top: $blood-h;

    &:before {
      content: '';
      position: absolute;
      height: $blood-h !important;
      top: -#{$blood-h};
      left: 0;
      right: 0;
      background-image: url('/images/elf_juice.png');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
}
</style>
