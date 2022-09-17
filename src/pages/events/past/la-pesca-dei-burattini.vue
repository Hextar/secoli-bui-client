<script setup lang="ts">
import axios from 'axios'
import pkg from 'file-saver'

import { ref, Ref } from 'vue'

import { useMeta, useViewport } from '~/composables'

import { IconClock, IconFacebook, IconMoney, IconPin } from '~/assets/icons'
import type { MenuItemType } from '~/types'

import {
  ICercatoriDelSentieroDoratoThumbnail,
  IPortatoriDellaFiammaBiancaThumbnail,
  LIneluttabileDomainThumbnail,
  LaLoghiaDelGufoThumbnail,
  LeCodeMozzateThumbnail,
  LeFauciGrondantiThumbnail,
  backgroundLazyLogoHd,
  backgroundLogoHd,
} from '~/assets/images'

// USE
const { isMobile } = useViewport()

useMeta({
  title: 'Prossimo evento - La pesca dei burattini',
  description: 'La pesca dei burattini - evento LARP, 18 Giugno nel Sulcis',
  keywords: ['sulcis', 'matzaccara', 'carloforte', 'sud sardegna'],
})

// VARIABLES
const scrollThreshold = ref(200)
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/past/la-pesca-dei-burattini', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/past/la-pesca-dei-burattini', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
  },
  {
    label: 'Fazioni',
    to: { path: '/events/past/la-pesca-dei-burattini', hash: '#fazioni' },
    tooltip: { content: 'Scrolla al paragrafo "Fazioni"', placement: 'bottom' },
  },
  {
    label: 'Come funziona?',
    to: { path: '/events/past/la-pesca-dei-burattini', hash: '#howItWorks' },
    tooltip: {
      content: 'Scrolla al paragrafo "Come funziona?"',
      placement: 'bottom',
    },
  },
]
const { saveAs } = pkg
const { t } = useI18n()

// COMPUTED
const imageWidth = computed((): number => {
  return isMobile.value ? 240 : 160
})

// METHODS
const getAssetPath = (value: string): string => {
  const assets = new Map<string, any>([
    [
      'i_portatori_della_fiamma_bianca.svg',
      IPortatoriDellaFiammaBiancaThumbnail,
    ],
    ['le_code_mozzate.svg', LeCodeMozzateThumbnail],
    ['l_ineluttabile_domani.svg', LIneluttabileDomainThumbnail],
    [
      'i_cercatori_del_sentiero_dorato.svg',
      ICercatoriDelSentieroDoratoThumbnail,
    ],
    ['le_fauci_grondanti.svg', LeFauciGrondantiThumbnail],
    ['la_loghia_del_gufo.svg', LaLoghiaDelGufoThumbnail],
  ])
  return assets.get(value)
}

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height + (86 / 2)
}

const downloadAttachment = async (): Promise<void> => {
  loading.value = true
  axios
    .get('/files/iscrizione.pdf', { responseType: 'blob' })
    .then(response => saveAs(response.data, 'secoli-bui-iscrizione.pdf'))
    .catch((err: unknown) => console.error(err))
    .finally(() => (loading.value = false))
}

const downloadImage = async (url: string): Promise<void> => {
  axios
    .get(`/images/events/la_pesca_dei_burattini/${url}`, { responseType: 'blob' })
    .then((response) => saveAs(response.data, url))
    .catch((err: unknown) => console.error(err))
}
</script>

<template>
  <section class="event-detail" itemscope itemtype="https://schema.org/Event">
    <Header ref="header" class="text-white-100" :image="backgroundLogoHd" :lazy-image="backgroundLazyLogoHd"
      height="400px" @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" back-title="La Pesca dei Burattini">
          <template #cta>
            <Tooltip placement="bottom">
              <template #trigger>
                <Button class="w-[112px]" variant="filled" color="primary" size="small" :disabled="!!loading"
                  @click.prevent.stop="downloadAttachment">
                  <span class="font-display text-lg font-bold">
                    {{ loading ? t('common.loading') : t('common.subscribe') }}
                  </span>
                </Button>
              </template>
              Scarica il documento di iscrizione
            </Tooltip>
          </template>
        </MenuDetail>
      </template>
      <template #content>
        <div id="info" class="anchor flex flex-col items-start justify-center pb-0 sm:pb-8 pt-16">
          <div class="mb-8 flex flex-col" itemprop="name">
            <EventTitle align="start" />
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <Info class="w-full sm:w-auto" label="Dove">
              <template #icon>
                <IconPin />
              </template>
              <br />
              <span class="pl-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                •
                <a class="text-action-500 hover:underline"
                  href="https://www.google.com/maps/place/39%C2%B007'32.1%22N+8%C2%B026'27.4%22E/@39.1256265,8.438438,2283m/data=!3m1!1e3!4m6!3m5!1s0!7e2!8m2!3d39.1255724!4d8.440949"
                  rel="noopener noreferrer" title="indicazioni matzaccara" alt="indicazioni matzaccara" target="_blank">
                  <span itemprop="name address">Sardegna, Matzaccara - Pineta di Punt’e Trettu</span>
                </a>
              </span>
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quando">
              <template #icon>
                <IconClock />
              </template>
              <br />
              <time class="pl-2" itemprop="startDate" datetime="2022-06-18T14:30:00Z"> • 18/06/2022 14:30 </time><br />
              <time class="pl-2" itemprop="endDate" datetime="2022-06-18T23:30:00Z"> • 18/06/2022 23:00 </time><br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quota" itemprop="offers" itemscope
              itemtype="https://schema.org/Offer">
              <template #icon>
                <IconMoney />
              </template>
              <br />
              <span class="pl-2">
                • <span itemprop="price" content="25.00">25</span><span itemprop="priceCurrency" content="EUR">€</span>
                STANDARD </span><br />
              <span class="pl-2">
                • <span itemprop="price" content="10.00">10</span><span itemprop="priceCurrency" content="EUR">€</span>
                PAGO COL
                SANGUE </span><br />
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Evento FB">
              <template #icon>
                <IconFacebook />
              </template>
              <br />
              <span class="pl-2">
                • Rimani aggiornato
                <a class="text-action-500 hover:underline" href="https://www.facebook.com/events/353854243429800/"
                  rel="noopener noreferrer" title="evento facebook la pesca dei burattini"
                  alt="evento facebook la pesca dei burattini" target="_blank">
                  iscrivendoti all’evento!
                </a>
              </span>
              <br />
            </Info>
          </div>
        </div>
      </template>
    </Header>
    <div class="bg-white-100 pb-16" itemprop="description">
      <Article>
        <Paragraph>
          <h2 id="incipit" class="anchor">📖 Incipit</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            <i>
              Le terre maledette a Sud-Est di Court Iver erano cadute in un
              lugubre silenzio dopo l'esplosione del portale. Con la sua
              chiusura, la guerra é terminata, ma sono iniziate le
              macchinazioni, quelle dei potenti, quelle che muovono le pedine a
              Braara.
              <br />
              Ora lo sguardo di molti di loro si é posato proprio in quelle
              terre, nel Ducato d'Aspic, attirate dalle voci e dai mormorii che
              raccontano del ritorno dell'unico erede legittimo a reclamare
              quella terra... O quello che ne rimane...
            </i>
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="fazioni" class="anchor">⚔️ Fazioni</h2>
        </Paragraph>
        <Paragraph class="mb-4" horizontal>
          <template #title>
            <h3 class="pb-4 text-center sm:text-left">
              I Portatori della Fiamma Bianca
            </h3>
          </template>
          <Tooltip classname="float-none sm:float-left mr-0 sm:mr-8">
            <template #trigger>
              <Image class="cursor-pointer" :src="getAssetPath('i_portatori_della_fiamma_bianca.svg')"
                :width="imageWidth" title="Portatori della Fiamma Bianca" alt="Portatori della Fiamma Bianca"
                @click.prevent.stop="downloadImage('i_portatori_della_fiamma_bianca.svg')" />
            </template>
            {{ t('common.download_image') }}
          </Tooltip>
          <p class="text-justify">
            Ci sono poche cose che muovono le genti come gli ideali o i sogni.
            Le stelle si muovono e gli dei sussurrano, per guidare i mortali
            verso il loro destino, eppure voi sapete che le storie sono fatte da
            chi impugna il suo fato con mani piene d'acciaio ed il proprio cuore
            sul bavero.
            <br />
            E che questo vi porti ad attraversare un mare di sale o a scalare il
            picco più gelido di Braara, non cambierà ciò che vi muove veramente.
            Le insidie del viaggio, l'ansia della scoperta, non possono
            fermarvi, o voi che avete acceso la Fiamma bianca nel cuore.
          </p>
        </Paragraph>
        <Paragraph reverse horizontal>
          <template #title>
            <h3 class="pb-4 text-center sm:text-right">Le Code Mozzate</h3>
          </template>
          <Tooltip classname="float-none sm:float-right ml-0 sm:ml-8">
            <template #trigger>
              <Image class="cursor-pointer" :src="getAssetPath('le_code_mozzate.svg')" :width="imageWidth"
                title="Le code mozzate" alt="Le code mozzate"
                @click.prevent.stop="downloadImage('le_code_mozzate.svg')" />
            </template>
            {{ t('common.download_image') }}
          </Tooltip>
          <p class="text-justify">
            In piedi carogne! Il sangue rimesta nelle vostre vene, e non c'è
            altra opzione se non strisciare avanti: vi è stato promesso molto
            più che la solita saccoccia sonante. Marciate affranti dalla
            disperazione, calpestando chiunque si ponga davanti a voi, con un
            ghigno truce sul volto ed i coltelli sporchi di sangue e fango.
            <br />
            Questa non è una bella vita, ma sarà molto peggiore per gli altri.
          </p>
        </Paragraph>
        <Paragraph horizontal>
          <template #title>
            <h3 class="pb-4 text-center sm:text-left">L'Ineluttabile Domani</h3>
          </template>
          <Tooltip classname="float-none sm:float-left mr-0 sm:mr-8">
            <template #trigger>
              <Image class="cursor-pointer" :src="getAssetPath('l_ineluttabile_domani.svg')" :width="imageWidth"
                title="L'ineluttabile domani" alt="L'ineluttabile domani"
                @click.prevent.stop="downloadImage('l_ineluttabile_domani.svg')" />
            </template>
            {{ t('common.download_image') }}
          </Tooltip>
          <p class="text-justify">
            Buio. Per voi è sempre stato buio. Difficile vedere qualcosa di
            diverso prima del cambiamento. Poi tutto ha iniziato ad avere più
            senso, quelle parole dette a caso, il sangue versato, le lacrime, i
            rimpianti. Tutto aveva finalmente un senso.
            <br />
            Non è stato per la Dama o per i grandi nobili, ma per ciò che vi ha
            realmente guidato in questo mondo, un cambiamento radicale, qualcosa
            che avrebbe reso per sempre sicura casa vostra.
            <br />
            Ormai non importa chi si metterà davanti alla vostra strada, perchè
            questa è casa vostra e solo voi potete decidere come e che cosa
            cambiare.
          </p>
        </Paragraph>
        <Paragraph reverse horizontal>
          <template #title>
            <h3 class="pb-8 text-center sm:text-right">
              I Cercatori del Sentiero Dorato
            </h3>
          </template>
          <Tooltip classname="float-none sm:float-right ml-0 sm:ml-8">
            <template #trigger>
              <Image class="cursor-pointer" :src="getAssetPath('i_cercatori_del_sentiero_dorato.svg')"
                :width="imageWidth" title="I cercatori del sentiero dorato" alt="I cercatori del sentiero dorato"
                @click.prevent.stop="downloadImage('i_cercatori_del_sentiero_dorato.svg')" />
            </template>
            {{ t('common.download_image') }}
          </Tooltip>
          <p class="text-justify">
            La strada è finita prima che voi siate riusciti a percorrerla.
            Quando l'avete intrapresa pensavate ad un miglioramento con cui
            molti non erano d'accordo. Un miglioramento che vi ha costretto a
            fare molti sacrifici, a celare chi siete veramente, a perdere molto
            per sperare un giorno di avere tanto.
            <br />
            Quel giorno non è mai arrivato, ma sono arrivate delle lezioni che
            vi hanno fatto capire che se si vuole qualcosa non bisogna
            aspettare: bisogna prenderselo con ogni mezzo necessario per
            ottenere finalmente il riconoscimento dovuto.
            <br />
            Iniziate a rivedere un sentiero lungo la via.
          </p>
        </Paragraph>
        <Paragraph horizontal>
          <template #title>
            <h3 class="pb-4 text-center sm:text-left">Le Fauci Grondanti</h3>
          </template>
          <Tooltip classname="float-none sm:float-left mr-0 sm:mr-8">
            <template #trigger>
              <Image class="cursor-pointer" :src="getAssetPath('le_fauci_grondanti.svg')" :width="imageWidth"
                title="Le fauci grondanti" alt="Le fauci grondanti"
                @click.prevent.stop="downloadImage('le_fauci_grondanti.svg')" />
            </template>
            {{ t('common.download_image') }}
          </Tooltip>
          <p class="text-justify">
            Può un amore votato all'eternità consumare?
            <br />
            Quel dolce, inconfondibile calore che scende giù dalle labbra, che
            ti riempie di energie, ti accelera il battito, ti trancia il fiato.
            E poi la mente è rischiarata, una chiarezza data dalla necessità di
            essere baciato. Come può esser altro che la cosa più bella del
            mondo?
            <br />
            Eppure, un dubbio spiacevole, freddo, animale, come un fiotto sgorga
            attorno ai denti, contorcendo il volto in una smorfia d'odio. E
            delle dolci labbra restano solo fauci grondanti di sangue.
          </p>
        </Paragraph>
        <Paragraph reverse horizontal>
          <template #title>
            <h3 class="pb-8 text-center sm:text-right">La Loghia del Gufo</h3>
          </template>
          <Tooltip classname="float-none sm:float-right ml-0 sm:ml-8">
            <template #trigger>
              <Image class="cursor-pointer" :src="getAssetPath('la_loghia_del_gufo.svg')" :width="imageWidth"
                title="La loghia del gufo" alt="La loghia del gufo"
                @click.prevent.stop="downloadImage('la_loghia_del_gufo.svg')" />
            </template>
            {{ t('common.download_image') }}
          </Tooltip>
          <p class="text-justify">
            Ricercatori, avventurieri, spie e guerrieri. Questa è la Loghia del
            Gufo, il "Verdetto". Avventurieri ammantati che si spingono laddove
            altri prima non hanno mai osato. Stringere i denti ed avere fede in
            quello che si fà non è un modo come un altro per campare alla
            giornata. La ricerca di antichi segreti, di verità, sono solo una
            parte del duro lavoro che la Loghia compie.
            <br />
            <i>
              "Stai in guardia dalla Loghia del Gufo, Che ti osserva con
              attenzione, notte e dì, tra granito e legno, dal suo ombroso
              nascondiglio, lei ti scruta, sempre attenta, lei ti spia dentro al
              giaciglio. Non parlar mai di lei, o verrà a ghermirti, con il suo
              artiglio".
            </i>
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <template #title>
            <h2 id="howItWorks" class="anchor">🧰 Come funziona?</h2>
          </template>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            In questo <i>live one-shot</i> troverete 6 fazioni che hanno degli
            interessi nelle terre maledette che andrete ad esplorare.
            <br />
            Al momento della compilazione del
            <strong class="cursor-pointer text-action-500 hover:underline" @click="downloadAttachment">
              modulo di iscrizione
            </strong>
            potete mettere in ordine di preferenza 5 di queste fazioni, e
            selezionarne 1 che non volete assolutamente giocare.
            <br />
            Al termine delle iscrizioni riceverete il file del gruppo che vi è
            stato assegnato e da quel momento potrete finalmente creare e
            mandarci la scheda del vostro personaggio.
          </p>
        </Paragraph>
        <Paragraph>
          <template #title>
            <h3 class="pb-2 text-center sm:text-left">Come si crea? Semplice!</h3>
          </template>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Basterà realizzare un documento con due righe di
            <i>background</i> - la sua storia - e una scheda vera e propria
            contenente tutte le sue statistiche, realizzata con le istruzioni
            che troverete nel file.
            <br />
            Lo staff fará avere anche delle schede personaggio pre-generate e
            pronte all'uso per chi non si vuole preoccupare troppo della
            costruzione del personaggio e vuole tuffarsi subito a giocare.
            <br />
            Il sistema é stato pensato come una via di mezzo tra la Campagna
            Secoli Bui ed i
            <i>Live One-shot</i> fatti in questi mesi, ecco perché Ibrido.
          </p>
        </Paragraph>
        <Paragraph>
          <template #title>
            <h3 class="pb-2 text-center sm:text-left">I rinforzi</h3>
          </template>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Hai avuto problemi e ti puoi iscrivere solo dopo la scadenza delle
            Iscrizioni?
            <br />
            Non preoccuparti!
            <strong>Sino a 2 settimane prima dell'evento sará possibile iscriversi
              come Rinforzi</strong>, senza alcuna maggiorazione nel biglietto; sará lo Staff ad
            assegnarti come Rinforzo, un eroe dalla scheda già pronta. Questo
            sistema é stato pensato per consentire anche a chi si é liberato
            "all'ultimo" di partecipare comunque!
          </p>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify" itemprop="organizer performer">
            Evento organizzato in collaborazione con la Mad² Factory
          </p>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
