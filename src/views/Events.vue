<template>
  <DefaultLayout>
    <Header
      class="text-white-100"
      image="/images/background.jpg"
      lazy-image="/images/background-lazy.jpg"
      height="400px"
    >
      <template #menu>
        <MenuEvent :scroll-threshold="400" />
      </template>
      <template #content>
        <div
          id="info"
          class="anchor pb- flex flex-col items-start justify-center pt-16 pb-0 sm:pb-8"
        >
          <div class="mb-8 flex flex-col items-start justify-start">
            <h2 class="mb-4 font-display text-6xl text-white-100" to="/" exact>
              La
              <span v-if="showPeach" v-tooltip="tooltip" class="cursor-pointer">🍑</span>
              <span v-else class="cursor-pointer" @click="onClick">Pesca</span>
              dei Burattini
            </h2>
            <h3
              class="mb-4 text-center font-display text-2xl uppercase text-white-100"
              to="/"
              exact
            >
              Di perdita e riscatto
            </h3>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <Info class="w-full sm:w-auto" label="Dove">
              <template #icon>
                <IconPin />
              </template>
              <br />
              <span class="pl-2">
                •
                <a
                  class="text-action-500 hover:underline"
                  href="https://www.google.com/maps/place/39%C2%B007'32.1%22N+8%C2%B026'27.4%22E/@39.1256265,8.438438,2283m/data=!3m1!1e3!4m6!3m5!1s0!7e2!8m2!3d39.1255724!4d8.440949"
                  rel="nofollow"
                  alt="indicazioni matzaccara"
                  target="_blank"
                >
                  Matzaccara - Pineta di Punt’e Trettu
                </a>
              </span>
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quando">
              <template #icon>
                <IconClock />
              </template>
              <br />
              <span class="pl-2"> • 18/06/2020 15:00-23:00 </span><br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quota">
              <template #icon>
                <IconMoney />
              </template>
              <br />
              <span class="pl-2"> • 25€ STANDARD </span><br />
              <span class="pl-2"> • 5€ PAGO COL SANGUE </span><br />
            </Info>
            <Info class="w-full sm:w-auto" label="Evento FB">
              <template #icon>
                <IconFacebook />
              </template>
              <br />
              <span class="pl-2">
                • Rimani aggiornato
                <a
                  class="text-action-500 hover:underline"
                  href="https://www.facebook.com/events/353854243429800/"
                  rel="nofollow"
                  alt="evento facebook la pesca dei burattini"
                  target="_blank"
                >
                  iscrivendoti all’evento!
                </a>
              </span>
              <br />
            </Info>
          </div>
        </div>
      </template>
    </Header>
    <Article>
      <Paragraph>
        <h2 id="fazioni" class="anchor">Fazioni</h2>
      </Paragraph>
      <Paragraph class="mb-4">
        <h3 class="pb-4 text-center sm:text-left">I Portatori della Fiamma Bianca</h3>
        <Image
          class="float-none mx-auto sm:float-left sm:mr-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.svg"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Ci sono poche cose che muovono le genti come gli ideali o i sogni. Le stelle si muovono e
          gli dei sussurrano, per guidare i mortali verso il loro destino, eppure voi sapete che le
          storie sono fatte da chi impugna il suo fato con mani piene d'acciaio ed il proprio cuore
          sul bavero.
          <br />
          E che questo vi porti ad attraversare un mare di sale o a scalare il picco più gelido di
          Braara, non cambierà ciò che vi muove veramente. Le insidie del viaggio, l'ansia della
          scoperta, non possono fermarvi, o voi che avete acceso la Fiamma bianca nel cuore.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-right">Le Code Mozzate</h3>
        <Image
          class="float-none mx-auto sm:float-right sm:ml-16"
          src="/images/events/la_pesca_dei_burattini/le_code_mozzate.svg"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          In piedi carogne! Il sangue rimesta nelle vostre vene, e non c'è altra opzione se non
          strisciare avanti: vi è stato promesso molto più che la solita saccoccia sonante. Marciate
          affranti dalla disperazione, calpestando chiunque si ponga davanti a voi, con un ghigno
          truce sul volto ed i coltelli sporchi di sangue e fango.
          <br />
          Questa non è una bella vita, ma sarà molto peggiore per gli altri.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-left">L'Ineluttabile Domani</h3>
        <Image
          class="float-none mx-auto sm:float-left sm:mr-16"
          src="/images/events/la_pesca_dei_burattini/l_ineluttabile_domani.svg"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Buio. Per voi è sempre stato buio. Difficile vedere qualcosa di diverso prima del
          cambiamento. Poi tutto ha iniziato ad avere più senso, quelle parole dette a caso, il
          sangue versato, le lacrime, i rimpianti. Tutto aveva finalmente un senso.
          <br />
          Non è stato per la Dama o per i grandi nobili, ma per ciò che vi ha realmente guidato in
          questo mondo, un cambiamento radicale, qualcosa che avrebbe reso per sempre sicura casa
          vostra.
          <br />
          Ormai non importa chi si metterà davanti alla vostra stradam, perchè questa è casa vostra
          e solo voi potete decidere come e che cosa cambiarci. Solo voi e la forza che vi spinge al
          cambiamento.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-8 text-center sm:text-right">I Cercatori del Sentiero Dorato</h3>
        <Image
          class="float-none mx-auto sm:float-right sm:ml-16"
          src="/images/events/la_pesca_dei_burattini/i_cercatori_del_sentiero_dorato.svg"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          La strada è finita prima che voi siate riusciti a percorrerla. Quando l'avete intrapresa
          pensavate ad un miglioramento, un miglioramento con cui molti non erano d'accordo. Un
          miglioramento che vi ha costretto a fare molti sacrifici, a celare chi siete veramente, a
          perdere molto per sperare un giorno di avere tanto.
          <br />
          Quel giorno non è mai arrivato, ma sono arrivate le lezioni, lezioni che vi hanno fatto
          capire che se si vuole qualcosa non bisogna aspettare: bisogna prenderselo, con ogni mezzo
          necessario, per ottenere finalmente il riconoscimento dovuto.
          <br />
          Iniziate a rivedere un sentiero lungo la via.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-left">Le Fauci Grondanti</h3>
        <Image
          class="float-none mx-auto sm:float-left sm:mr-16"
          src="/images/events/la_pesca_dei_burattini/le_fauci_grondanti.svg"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Un amore votato per l'eternità può consumare? Quel dolce, inconfondibile calore che scende
          giù dalle labbra, che ti riempie di energie, ti accelera il battito, ti trancia il fiato.
          E poi la mente è rischiarata, una chiarezza data dalla necessità di essere baciato. Come
          può essere altro che la cosa più bella del mondo?
          <br />
          Eppure, un dubbio spiacevole, freddo, animale, come un fiotto sgorga attorno ai denti,
          contorcendo il volto in una smorfia d'odio. E delle dolci labbra restano solo fauci
          grondanti di sangue.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-8 text-center sm:text-right">La Loghia del Gufo</h3>
        <Image
          class="float-none mx-auto sm:float-right sm:ml-16"
          src="/images/events/la_pesca_dei_burattini/la_loghia_del_gufo.svg"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Ricercatori, avventurieri, spie e guerrieri. Questa è la Loghia del Gufo, il "Verdetto".
          Avventurieri ammantati che si spingono laddove altri prima non hanno mai osato. Stringere
          i denti: avere fede in quello che si fà non è un modo come un altro per campare alla
          giornata. La ricerca di antichi segreti, di verità, sono solo una parte del duro lavoro
          che la Loghia compie.
          <br />
          <i>
            "Stai in guardia dalla Loghia del Gufo, Che ti osserva con attenzione, notte e dì, tra
            granito e legno, dal suo ombroso nascondiglio, lei ti scruta, sempre attenta, lei ti
            spia dentro al giaciglio. Non parlar mai di lei, o verrà a ghermirti, con il suo
            artiglio".
          </i>
        </p>
      </Paragraph>
    </Article>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMeta } from 'vue-meta'
import { TooltipOptions } from '@/types'

import { IconClock, IconFacebook, IconMoney, IconPin } from '@/assets/icons'
import { Article, Image, Info, Paragraph } from '@/components/common'
import { DefaultLayout, Header, MenuEvent } from '@/components/layout'

// META
useMeta({
  title: 'Prossimo evento - La pesca dei burattini',
  htmlAttrs: { lang: 'it', amp: true },
})

// VARIABLES
let counter = ref(0)
let showNextEvent = ref(false)

// COMPUTED
const showPeach = computed((): boolean => counter.value > 33)
const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Charme',
    placement: 'top',
    theme: 'secoli-bui',
  })
)

// METHODS
const onClick = () => (counter.value += 1)
</script>
