<template>
  <DefaultLayout>
    <Header
      class="text-white-100"
      image="/images/background.jpg"
      lazy-image="/images/background-lazy.jpg"
      height="400px"
    >
      w-full
      <template #menu>
        <MenuEvent :scroll-threshold="400" />
      </template>
      <template #content>
        <div id="info" class="anchor flex flex-col items-start justify-center py-16">
          <div class="flex flex-col items-start justify-start">
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
        </div>
      </template>
    </Header>
    <Article>
      <Paragraph>
        <h2 id="fazioni" class="anchor">Fazioni</h2>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-left">I Portatori della Fiamma Bianca</h3>
        <Image
          class="float-none mx-auto sm:float-left sm:mr-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.png"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Ci sono poche cose che muovono le genti come gli ideali, o i sogni. Le stelle si muovono,
          e gli dei sussurrano, per guidare i mortali verso il loro destino, eppure voi sapete che
          le storie sono fatte di chi impugna il suo fato con mani piene d'acciaio ed il proprio
          cuore sul bavero; e che questo vi porti ad attraversare un mare di sale o a scalare il
          picco più gelido di Braara, non cambierà ciò che vi muove veramente: le insidie del
          viaggio, l'ansia della scoperta, non possono fermarvi, o voi che avete acceso la Fiamma
          bianca nel cuore.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-right">Code Mozzate</h3>
        <Image
          class="float-none mx-auto sm:float-right sm:ml-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.png"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          In piedi, carogne. Il sangue rimesta nelle vostre vene, e non c'è altra opzione se non
          strisciare avanti: vi è stato promesso molto più che la solita saccoccia sonante.
          Marciate, affranti dalla disperazione, calpestando chiunque si ponga davanti a voi, con un
          ghigno truce sul volto, ed i coltelli sporchi di sangue e fango. Questa non è una bella
          vita, ma sarà molto peggiore per gli altri.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-left">L'Ineluttabile Domani</h3>
        <Image
          class="float-none mx-auto sm:float-left sm:mr-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.png"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Buio. Per voi è sempre stato buio. Difficile vedere qualcosa di diverso prima del
          cambiamento. Poi, tutto ha iniziato ad avere più senso, quelle parole dette a caso, il
          sangue versato, le lacrime, i rimpianti. Tutto aveva finalmente un senso. E non è stato
          per la Dama, o per i grandi nobili, ma è stato solo per ciò che vi ha realmente guidato in
          questo mondo, un cambiamento radicale: qualcosa che avrebbe reso per sempre sicura casa
          vostra. Ed allora non importa chi si metterà davanti alla vostra strada. Questa è casa
          vostra e solo voi potete decidere come e che cosa cambiarci. Solo voi e la forza che vi
          spinge al cambiamento.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-8 text-center sm:text-right">I Cercatori del Sentiero Dorato</h3>
        <Image
          class="float-none mx-auto sm:float-right sm:ml-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.png"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          La strada è finita prima che voi siate riusciti a percorrerla. Quando voi l'avete
          incominciata, pensavate ad un miglioramento, un miglioramento con cui molti non erano
          d'accordo. Un miglioramento che vi ha costretto a fare molti sacrifici, a celare chi siete
          veramente, a perdere molto per sperare un giorno di avere tanto. Quel giorno non è mai
          arrivato. Ma sono arrivate le lezioni, lezioni che vi hanno fatto capire, comprendere, che
          se si vuole qualcosa, non bisogna aspettare: bisogna prenderselo, con ogni mezzo
          necessario. Per ottenere finalmente, il riconoscimento dovuto. Iniziate a rivedere un
          sentiero lungo la via.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-4 text-center sm:text-left">Le Fauci Grondanti</h3>
        <Image
          class="float-none mx-auto sm:float-left sm:mr-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.png"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Un amore votato per l'eternità, può consumare? Quel dolce, inconfondibile calore che
          scende giù, dalle labbra, che ti riempie di energie, ti accelera il battito, ti trancia il
          fiato. E poi, la mente è rischiarata, una chiarezza data dalla necessità di essere
          baciato. Come può essere altro che la cosa più bella del mondo? Eppure, un dubbio,
          spiacevole, freddo, animale, come un fiotto sgorga attorno ai denti, contorcendo il volto
          in una smorfia d'odio. E delle dolci labbra, restano solo fauci grondanti di sangue.
        </p>
      </Paragraph>
      <Paragraph>
        <h3 class="pb-8 text-center sm:text-right">La Loghia del Gufo</h3>
        <Image
          class="float-none mx-auto sm:float-right sm:ml-16"
          src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.png"
          :width="160"
          alt="Portatori della Fiamma Bianca"
        />
        <p class="text-justify">
          Ricercatori, avventurieri, spie, e guerrieri. Questa è la Loghia del Gufo, il "Verdetto".
          Avventurieri ammantati, che si spingono là, dove altri prima non hanno mai osato. Stringe
          i denti: avere fede in quello che si fà, non è un modo come un altro per campare alla
          giornata. La ricerca di antichi segreti, di verità, sono solo una parte del duro lavoro
          che la Loghia compie. "Stai in guardia dalla Loghia del Gufo, Che ti osserva con
          attenzione. Notte e dì, tra granito e legno, dal suo ombroso nascondiglio, lei ti scruta,
          sempre attenta, lei ti spia dentro al giaciglio. Non parlar mai di lei, o verrà a
          ghermirti, con il suo artiglio".
        </p>
      </Paragraph>
    </Article>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { TooltipOptions } from '@/types'

import { Article, Image, Paragraph } from '@/components/common'
import { DefaultLayout, Header, MenuEvent } from '@/components/layout'

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
