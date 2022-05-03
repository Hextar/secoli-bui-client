<template>
  <DefaultLayout v-once>
    <Header
      class="text-white-100"
      :image="backgroundLogo"
      :lazy-image="backgroundLazyLogo"
      height="400px"
    >
      <template #menu>
        <MenuEvent :scroll-threshold="500" />
      </template>
      <template #content>
        <div
          id="info"
          class="anchor pb- flex flex-col items-start justify-center pt-16 pb-0 sm:pb-8"
        >
          <div class="mb-8 flex flex-col">
            <h1
              class="mb-4 text-center font-display text-6xl text-white-100 sm:text-left"
              to="/"
              exact
            >
              La
              <span v-if="showPeach" v-tooltip="tooltip" class="cursor-pointer">🍑</span>
              <span v-else class="cursor-pointer" @click="counter++">Pesca</span>
              dei Burattini
            </h1>
            <h2
              class="mb-4 text-center font-display text-2xl uppercase text-white-100 sm:text-left"
              to="/"
              exact
            >
              Di perdita e riscatto
            </h2>
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
                  title="indicazioni matzaccara"
                  alt="indicazioni matzaccara"
                  target="_blank"
                >
                  Sardegna, Matzaccara - Pineta di Punt’e Trettu
                </a>
              </span>
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quando">
              <template #icon>
                <IconClock />
              </template>
              <br />
              <span class="pl-2"> • 18/06/2022 15:00-23:00 </span><br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quota">
              <template #icon>
                <IconMoney />
              </template>
              <br />
              <span class="pl-2"> • 25€ STANDARD </span><br />
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
                  title="evento facebook la pesca dei burattini"
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
    <div class="bg-white-100 pb-16">
      <Article>
        <Paragraph>
          <h2 id="incipit" class="anchor">📖 Incipit</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            <i>
              Le terre maledette a Sud-Est di Court Iver erano cadute in un lugubre silenzio dopo
              l'esplosione del portale. Con la sua chiusura, la guerra é terminata, ma sono iniziate
              le macchinazioni, quelle dei potenti, quelle che muovono le pedine a Braara.
              <br />
              Ora lo sguardo di molti di loro si é posato proprio in quelle terre, nel Ducato
              d'Aspic, attirate dalle voci e dai mormorii che raccontano del ritorno dell'unico
              erede legittimo a reclamare quella terra... O quello che ne rimane...
            </i>
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="fazioni" class="anchor">⚔️ Fazioni</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <h3 class="pb-4 text-center sm:text-left">I Portatori della Fiamma Bianca</h3>
          <Image
            class="float-none mx-auto sm:float-left sm:mr-16"
            src="/images/events/la_pesca_dei_burattini/i_portatori_della_fiamma_bianca.svg?preset=thumbnail&srcset"
            :width="160"
            title="Portatori della Fiamma Bianca"
            alt="Portatori della Fiamma Bianca"
          />
          <p class="text-justify">
            Ci sono poche cose che muovono le genti come gli ideali o i sogni. Le stelle si muovono
            e gli dei sussurrano, per guidare i mortali verso il loro destino, eppure voi sapete che
            le storie sono fatte da chi impugna il suo fato con mani piene d'acciaio ed il proprio
            cuore sul bavero.
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
            src="/images/events/la_pesca_dei_burattini/le_code_mozzate.svg?preset=thumbnail&srcset"
            :width="160"
            title="Portatori della Fiamma Bianca"
            alt="Portatori della Fiamma Bianca"
          />
          <p class="text-justify">
            In piedi carogne! Il sangue rimesta nelle vostre vene, e non c'è altra opzione se non
            strisciare avanti: vi è stato promesso molto più che la solita saccoccia sonante.
            Marciate affranti dalla disperazione, calpestando chiunque si ponga davanti a voi, con
            un ghigno truce sul volto ed i coltelli sporchi di sangue e fango.
            <br />
            Questa non è una bella vita, ma sarà molto peggiore per gli altri.
          </p>
        </Paragraph>
        <Paragraph>
          <h3 class="pb-4 text-center sm:text-left">L'Ineluttabile Domani</h3>
          <Image
            class="float-none mx-auto sm:float-left sm:mr-16"
            src="/images/events/la_pesca_dei_burattini/l_ineluttabile_domani.svg?preset=thumbnail&srcset"
            :width="160"
            title="Portatori della Fiamma Bianca"
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
            Ormai non importa chi si metterà davanti alla vostra strada, perchè questa è casa vostra
            e solo voi potete decidere come e che cosa cambiare.
          </p>
        </Paragraph>
        <Paragraph>
          <h3 class="pb-8 text-center sm:text-right">I Cercatori del Sentiero Dorato</h3>
          <Image
            class="float-none mx-auto sm:float-right sm:ml-16"
            src="/images/events/la_pesca_dei_burattini/i_cercatori_del_sentiero_dorato.svg?preset=thumbnail&srcset"
            :width="160"
            title="Portatori della Fiamma Bianca"
            alt="Portatori della Fiamma Bianca"
          />
          <p class="text-justify">
            La strada è finita prima che voi siate riusciti a percorrerla. Quando l'avete intrapresa
            pensavate ad un miglioramento con cui molti non erano d'accordo. Un miglioramento che vi
            ha costretto a fare molti sacrifici, a celare chi siete veramente, a perdere molto per
            sperare un giorno di avere tanto.
            <br />
            Quel giorno non è mai arrivato, ma sono arrivate delle lezioni che vi hanno fatto capire
            che se si vuole qualcosa non bisogna aspettare: bisogna prenderselo con ogni mezzo
            necessario per ottenere finalmente il riconoscimento dovuto.
            <br />
            Iniziate a rivedere un sentiero lungo la via.
          </p>
        </Paragraph>
        <Paragraph>
          <h3 class="pb-4 text-center sm:text-left">Le Fauci Grondanti</h3>
          <Image
            class="float-none mx-auto sm:float-left sm:mr-16"
            src="/images/events/la_pesca_dei_burattini/le_fauci_grondanti.svg?preset=thumbnail&srcset"
            :width="160"
            title="Portatori della Fiamma Bianca"
            alt="Portatori della Fiamma Bianca"
          />
          <p class="text-justify">
            Può un amore votato all'eternità consumare?
            <br />
            Quel dolce, inconfondibile calore che scende giù dalle labbra, che ti riempie di
            energie, ti accelera il battito, ti trancia il fiato. E poi la mente è rischiarata, una
            chiarezza data dalla necessità di essere baciato. Come può esser altro che la cosa più
            bella del mondo?
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
            src="/images/events/la_pesca_dei_burattini/la_loghia_del_gufo.svg?preset=thumbnail&srcset"
            :width="160"
            title="Portatori della Fiamma Bianca"
            alt="Portatori della Fiamma Bianca"
          />
          <p class="text-justify">
            Ricercatori, avventurieri, spie e guerrieri. Questa è la Loghia del Gufo, il "Verdetto".
            Avventurieri ammantati che si spingono laddove altri prima non hanno mai osato.
            Stringere i denti ed avere fede in quello che si fà non è un modo come un altro per
            campare alla giornata. La ricerca di antichi segreti, di verità, sono solo una parte del
            duro lavoro che la Loghia compie.
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
      <Article>
        <Paragraph>
          <h2 id="howItWorks" class="anchor">🧰 Come funziona?</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            In questo <i>live one-shot</i> troverete 6 fazioni che hanno degli interessi nelle terre
            maledette che andrete ad esplorare.
            <br />
            Al momento della compilazione del
            <strong
              class="cursor-pointer text-action-500 hover:underline"
              @click="downloadAttachment"
            >
              modulo di iscrizione
            </strong>
            potete mettere in ordine di preferenza 5 di queste fazioni, e selezionarne 1 che non
            volete assolutamente giocare.
            <br />
            Al termine delle iscrizioni riceverete il file del gruppo che vi è stato assegnato e da
            quel momento potrete finalmente creare e mandarci la scheda del vostro personaggio.
          </p>
        </Paragraph>
        <Paragraph>
          <h3 class="pb-2 text-center sm:text-left">Come si crea? Semplice!</h3>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Basterà realizzare un documento con due righe di <i>background</i> - la sua storia - e
            una scheda vera e propria contenente tutte le sue statistiche, realizzata con le
            istruzioni che troverete nel file.
            <br />
            Lo staff fará avere anche delle schede personaggio pre-generate e pronte all'uso per chi
            non si vuole preoccupare troppo della costruzione del personaggio e vuole tuffarsi
            subito a giocare.
            <br />
            Il sistema é stato pensato come una via di mezzo tra la Campagna Secoli Bui ed i
            <i>Live One-shot</i> fatti in questi mesi, ecco perché Ibrido.
          </p>
        </Paragraph>
        <Paragraph>
          <h3 class="pb-2 text-center sm:text-left">I rinforzi</h3>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Hai avuto problemi e ti puoi iscrivere solo dopo la scadenza delle Iscrizioni?
            <br />
            Non preoccuparti!
            <strong
              >Sino a 2 settimane prima dell'evento sará possibile iscriversi come Rinforzi</strong
            >, senza alcuna maggiorazione nel biglietto; sará lo Staff ad assegnarti come Rinforzo,
            un eroe dalla scheda già pronta. Questo sistema é stato pensato per consentire anche a
            chi si é liberato "all'ultimo" di partecipare comunque!
          </p>
        </Paragraph>
      </Article>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { useMeta } from 'vue-meta'
import { TooltipOptions } from '@/types'

import { IconClock, IconFacebook, IconMoney, IconPin } from '@/assets/icons'
import { Article, Image, Info, Paragraph } from '@/components/common'
import { DefaultLayout, Header, MenuEvent } from '@/components/layout'

import backgroundLogo from '@images/background.jpg?preset=full'
import backgroundLazyLogo from '@images/background-lazy.jpg?preset=full'

// META
const title = 'Prossimo evento - La pesca dei burattini'
const description = 'La pesca dei burattini - evento LARP, 18 Giugno nel Sulcis'
const url = 'https://www.grvsecolibui.it'
const image = `${url}/images/social.jpg`
useMeta({
  title,
  description,
  htmlAttrs: { lang: 'it', amp: true },
  meta: [
    // OpenGraph data (Most widely used)
    { property: 'og:title', content: title },
    { property: 'og:site_name', content: title },
    // The list of types is available here: http://ogp.me/#types
    { property: 'og:type', content: 'website' },
    // Should the the same as your canonical link, see below.
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    // Often the same as your meta description, but not always.
    { property: 'og:description', content: description },

    // Twitter card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    // {name: 'twitter:creator', content: '@alligatorio'},
    { name: 'twitter:image:src', content: image },

    // Google / Schema.org markup:
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: image },
  ],
  link: [{ rel: 'canonical', href: url }],
})

// VARIABLES
let counter = ref(0)
let showNextEvent = ref(false)

// COMPUTED
const showPeach = computed((): boolean => counter.value >= 13)
const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Charme',
    placement: 'top',
    theme: 'secoli-bui',
  })
)

// METHODS
const downloadAttachment = async (): Promise<void> => {
  axios
    .get('/files/iscrizione.pdf', { responseType: 'blob' })
    .then((response) => saveAs(response.data, 'secoli-bui-iscrizione.pdf'))
    .catch((err: unknown) => console.error(err))
}
</script>
