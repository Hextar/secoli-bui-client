<template>
  <DefaultLayout>
    <ImageWrapper
      height="100vh"
      image="/images/background.jpg"
      lazy-image="/images/background-lazy.jpg"
    >
      <Header class="pt-8">
        <template #menu>
          <Menu />
        </template>
        <template #content>
          <h1 class="mb-8 pt-32 font-display text-5xl text-white-100">
            Pagina non trovata: [No Effect]
          </h1>
          <Button class="px-4" size="medium" tag="router-link" to="/" alt="go to homepage">
            Torna alla tenda master
          </Button>
        </template>
      </Header>
    </ImageWrapper>
  </DefaultLayout>
</template>
