<script setup lang="ts">
import { useMeta } from '~/composables'


import { economiaHd } from '~/assets/images'

// META
useMeta({
  title: 'Ambientazione - La pesca dei burattini',
  description: 'Ambientazione'
})

// VARIABLES
const scrollThreshold = ref(200)

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}
</script>

<template>
  <section class="world-system" itemscope itemtype="https://schema.org/Article">
    <Header ref="header" class="text-white-100" :image="economiaHd" height="420px"
      @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuEvent :scroll-threshold="scrollThreshold" />
      </template>
      <template #content>
        <div id="info" class="anchor h-full flex flex-col items-center justify-center">
          <div class="flex flex-col" itemprop="name">
            <h1 class="event-title font-display text-6xl text-white-100 text-center">Ambientazione</h1>
          </div>
        </div>
      </template>
    </Header>
    <div class="bg-white-100 pb-16" itemprop="description">
      <Article>
        <Paragraph>
          <h2 id="story" class="anchor">Storia antica di Braara</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Secoli e secoli fa, popoli di <strong>umani colonizzatori</strong> raggiunsero via mare le fertili coste del
            continente
            di Braara: tutto ciò di cui si ha memoria di questa impresa, è che l'enorme flotta venne schiantata dalla
            più grande tempesta mai vista.
          </p>
          <p class="text-justify">
            I <strong>Dorsten</strong>, signori e guide dei colonizzatori, cercarono di riprendere il mare ma la
            tempesta, sempre
            inspiegabilmente violenta, li respinse. Dalla madrepatria non giunsero più navi e questa fu
            l'occasione che spinse i sottoposti dei Dorsten a rivoltarsi contro i loro signori, generando un
            conflitto che presto si estese a tutta Braara e coinvolse anche i <strong>Valah</strong>, popolazione
            indigena già
            attaccata dal principio dai nuovi arrivati.
            Il conflitto durò per oltre un secolo, creando faide e rancori che persistono ancora oggi. Fu quando
            la guerra perse di significato, diventando un inutile spreco di vite e risorse, che finalmente si
            intavolarono le trattative di pace.
          </p>
          <p class="text-justify">
            I più importanti signori delle quattro fazioni che si erano venute a creare si riunirono in un luogo
            antico, sacro agli dèi, conosciuto come <strong>Vetta d'Avorio</strong>. Qui si stabilirono le condizioni
            della pace.
            Il giorno della stipula del <strong>Trattato d'Avorio</strong> fu così importante che venne scelto come un
            nuovo
            inizio e la conta degli anni fu azzerata. Ciò accadeva esattamente 320 anni fa e vide la nascita delle
            regioni, dei confini e di alcune delle leggi che ancora oggi sono in vigore.
            A garanzia del trattato fu costruita nel luogo della firma la cittadella di Rocca d'Avorio, custodita dai
            più alti sacerdoti delle chiese che si fecero garanti del trattato di fronte a tutti gli dèi.
          </p>
          <p class="text-justify">
            Questo evento segnò quindi la nascita di quattro fazioni: la nobile <strong>Louren</strong>, la ricca
            <strong>Velantes</strong>,
            l'industriosa <strong>Dorsten</strong> e la selvaggia <strong>Valah</strong>, tutte governate da un unico
            sovrano, eletto dai più
            importanti nobili delle fazioni riunite a Rocca d'Avorio.
            In questi tre secoli quasi venti sovrani si sono succeduti sul trono, sono state fondate grandi città,
            sono nate corporazioni e gilde che controllano l'economia, i mestieri e le arti arcane.
          </p>
          <p class="text-justify">
            Circa trent'anni fa il neonato culto di <strong>Asherat, l'Unico dio</strong>, scacciò da Rocca d'Avorio le
            più alte
            cariche dell'antica chiesa di Braara: il <strong>Tetrarchos</strong>, che venerava i 4 dèi.
            Nel corso del tempo la <strong>Chiesa dell'Unico</strong>, inizialmente tollerante verso tutte le
            divinità diverse da
            Asherat, si fece man mano più restìa ad accettare qualsiasi credo differente.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="incipit" class="anchor">La Guerra dei Caduti</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Le diatribe politiche e religiose sono state temporaneamente superate quando, pochi anni fa, è
            apparso un nuovo nemico che ha unito tutta Braara in un fronte comune. Si tratta dei demoniaci
            <strong>Terhaal</strong>, i Caduti nella lingua antica.
            Creature gigantesche, dotate di capacità magiche fuori dalle conoscenze delle genti di Braara invulnerabili
            alle normali armi magiche. Le abominevoli creature non sembravano nuove di questo
            mondo, hanno tramato per secoli per portare avanti un unico scopo: riconquistare Braara e
            asservirne le sue genti.
          </p>
          <p class="text-justify">
            Al contempo flotte di navi dalle vele rosse sono apparse al largo delle coste di Braara, passando la
            tempesta che da secoli circonda il Regno. A bordo un popolo di guerrieri che chiamano sé stessi
            <strong>Raiacer</strong> e che si è rivelato essere alleato dei Terhaal.
            Decine di Terhaal hanno varcato i portali magici creati dai cultisti raiacer, a loro mentalmente
            asserviti, e sono stati liberi di calcare il suolo di Braara con i loro zoccoli fiammeggianti. Accanto a
            Terhaal e raiacer si è schierata anche una frangia scissionista del <strong>Velo Oscuro</strong>, la gilda
            che a Braara
            riunisce maghe e sacerdoti dediti alla necromanzia.
          </p>
          <p class="text-justify">
            Per cinque anni la guerra ha imperversato nel continente.
          </p>
          <p class="text-justify">
            Dopo anni di sofferenze la speranza è giunta da nord. Oltre l'impenetrabile deserto di sale conosciuto come
            il <strong>Re Bianco</strong>, impavidi pionieri si sono spinti in terre sconosciute, scoprendo nuovi popoli
            e indagando
            sull'antica storia di Braara e sui tempi in cui i Terhaal furono banditi da questo piano di esistenza. Le
            scoperte, accompagnate da innumerevoli avversità, hanno condotto gli uomini e le donne di Braara a
            conoscenze pericolose e proibite. In un luogo perduto nel tempo, l'<strong>Oasi dei Padri e delle
              Madri</strong>, un antico
            patto con gli dei è stato ripristinato e gli esseri mortali sono stati finalmente in grado di soggiogare il
            potere della pericolosa <strong>ossidiana</strong>, il nero metallo divino unico in grado di ferire e
            distruggere un Terhaal.
          </p>
          <p class="text-justify">
            A partire dal baluardo rappresentato da Rocca d'Avorio, Braara ha lanciato il suo contrattacco.
            Potenti lame di ossidiana hanno ucciso i Terhaal a uno a uno e portato il regno a prevalere sull'odiato
            nemico. Ogni singolo <strong>portale</strong> in grado di evocare nel continente un Terhaal è stato
            sigillato e nonostante
            rade sacche nemiche di resistenza siano ancora presenti, Braara si appresta a rinascere a nuova vita.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 class="anchor">Braara oggi</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            La pace non è durata a lungo, anzi si potrebbe dire che la guerra non è mai veramente finita. Alla
            vigilia della riconquista, un nuovo pezzo è comparso nella scacchiera.
            Non si trattava di un pedone, bensì di una regina.
          </p>
          <p class="text-justify">
            Nota ai più come la /<strong>Dama Pallida</strong>, la leggendaria matriarca della gilda necromantica del
            Velo Oscuro, dopo la
            sua comparsa questa figura ha imposto un ultimatum al regno di Braara. Presentandosi come una sovrana
            progressista, libera dai vincoli di superstizione e dai dogmi religiosi che si espandono a macchia d'olio da
            Rocca d'Avorio, ha concesso un anno di tempo ai nobili del regno per capitolare e accettare la sua figura
            come unica sovrana di Braara, promettendo pace, uguaglianza e giustizia.
          </p>
          <p class="text-justify">
            La Dama Pallida può contare non solo su decine di migliaia di morti da rianimare, grazie ai corpi che
            giacciono nei campi di battaglia e nelle fosse comuni delle più grandi città, ma anche sul fatto che, grazie
            al suo immenso potere, è riuscita a plasmare la trama stessa della magia che permea Braara, <strong>rendendo
              ogni
              cura magica o divina completamente inefficace</strong>.
          </p>
          <p class="text-justify">
            L'apparizione della Dama Pallida ha spezzato in due il regno.
            A seguito dell'incoronazione di <strong>Lord Frederik Borell di Dorsten a nuovo sovrano</strong>, le regioni
            scontente del
            risultato si sono schierate a favore della potente creatura non-morta.
          </p>
          <p class="text-justify">
            Coloro che parteggiano per la Dama Pallida hanno formato uno schieramento che prende il nome di
            <strong>Fiamma Bianca</strong> e sostiene il <strong>Pentarchos</strong>, la chiesa che accoglie i cinque
            dèi di Braara – i quattro
            del Tetrarchos più Naergal, dio della non-morte e dell'inganno. Ne fanno parte Valah e Louren.
          </p>
          <p class="text-justify">
            Invece quelli che sono leali a Re Borell si sono uniti in un'alleanza che prende il nome di Sacro
            <strong>Baluardo</strong> e sostengono la <strong>Chiesa dell'Unico</strong> di Asherat. Si tratta di Rocca
            d'Avorio, Dorsten e
            Velantes.
          </p>
          <p class="text-justify">
            L'anno di pace sta per trascorrere e il termine indicato dalla Dama Pallida è sempre più incombente. L’aria
            è elettrica... qualcosa si sta già muovendo.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="regions" class="anchor">Geografia</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Dal punto di vista geografico il Regno di Braara è una <strong>penisola di vaste dimensioni</strong>,
            circondata per tre lati
            dal mare, chiusa a nord dalle due catene montuose dei Picchi, i luoghi più freddi di Valah e
            dell'intero continente. Oltre le montagne, più a nord ancora, si estende il <strong>Re Bianco</strong>, un
            immenso deserto di
            sale.
            Le coste di Braara sono ostili e pericolose e, a parte i principali attracchi, l'intero continente è
            circondato da scogliere a picco sul mare, alle quali è estremamente pericoloso avvicinarsi.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="regions" class="anchor">Regioni</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            La regione di appartenenza non è necessariamente quella di nascita. È la fazione a cui qualcuno –
            indipendentemente dalla sua razza - <strong>ha giurato fedeltà</strong>, di cui condivide gli ideali, per
            cui
            si batte e dentro la quale aspira a fare carriera. Le regioni (o fazioni) di Braara sono cinque.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h4 id="dorsten" class="anchor">Dorsten</h4>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            A Dorsten l'intero sistema si basa sullo <strong>schiavismo</strong> e sullo sfruttamento intensivo degli
            strati bassi della
            popolazione, tanto che ormai si rinuncia anche a chiedere da dove provenga così tanta "manodopera".
            L'asservimento della popolazione per debiti o per crimini è all'ordine del giorno, ma voci raccontano anche
            di bande di <strong>predoni</strong> che compiono continue scorribande a Valah, rapendo decine di persone
            per poi venderle
            nei mercati di schiavi a Dorsten.
            I poveri e gli schiavi lavorano a ritmi massacranti nelle miniere, nelle segherie e nelle enormi fucine
            delle città. Il resto della popolazione vive in maniera decisamente più agiata: si tratta di soldati e
            uomini d'arme, principalmente mercenari e guardie private dei nobili, che tengono a bada gli schiavi e
            custodiscono le città e le miniere.
          </p>
          <p class="text-justify">
            Quei pochi che fanno parte della <strong>nobiltà</strong> vera e propria si ritengono superiori a tutto e a
            tutti.
            I membri dell'attuale casta nobiliare di Dorsten sono infatti i discendenti delle casate più nobili dei
            popoli che colonizzarono Braara secoli orsono. Praticamente ogni nobile di Dorsten è un <strong>alchimista o
              un
              incantatore</strong> -sia per moda che per tradizione- che sperpera le sue ricchezze in ricerche al limite
            dell'umano. Questo ha generato leggende di atrocità ai danni dei loro stessi concittadini ma ha anche
            portato Dorsten a essere avanti di diverse generazioni dal punto di vista tecnologico.
          </p>
          <p class="text-justify">
            L'attuale Re di Braara – eletto al termine della Guerra dei Caduti - è il Lord Protettore della regione di
            Dorsten, Lord Frederik Borell.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h4 id="louren" class="anchor">Louren</h4>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            A Louren <strong>la nobiltà di nascita e l'onore cavalleresco</strong> sono i valori più importanti
            insegnati a ogni giovane
            rampollo. Gli strati più umili della popolazione provano un misto di rispetto e timore nei confronti degli
            stoici e severi signori di Louren. Il comportamento dei nobili in pubblico è sempre impeccabile, l'aspetto
            di facciata estremamente importante per mantenere il buon nome della propria famiglia.
          </p>
          <p class="text-justify">
            Ogni famiglia forma un'organizzazione che usa il proprio potere per arrivare a qualsiasi obiettivo, lecito e
            non, tanto che gli <strong>intrighi</strong>, le accuse e i tradimenti sono all'ordine del giorno a Louren.
            Dopo oltre 80 anni e 5 sovrani della famiglia Bryone, Louren ha dovuto lasciare il trono quando
            l'autoproclamato re Mikhail ha perso le elezioni contro Lord Borell di Dorsten.
            Louren è forse la regione che più ha sofferto dalla guerra. L'allora capitale del Regno, Court'Ivere, è
            stata rasa al suolo in pochi istanti quando una concentrazione immensa di potere magico ha aperto sulla
            collina un immenso portale che ha vomitato nel mondo centinaia di creature infernali. Ora il portale è stato
            chiuso e lì si trova un'immensa voragine.
          </p>
          <p class="text-justify">
            I loreniani possiedono una suddivisione sociale molto netta e in cui è difficile scalare i gradini. Non
            esiste una classe media, il grosso della popolazione è abbigliata in maniera umile, con tuniche, camicioni,
            farsetti di tessuti economici e poco eleganti.
            Diversa è la situazione all'interno delle numerose corti, dove si fonde uno stile lussuoso ad uno dettato
            dalla tradizione militare della regione. I <strong>guerrieri loreniani</strong>, sia che facciano parte
            dell'esercito
            regolare, delle truppe dei singoli nobili o che siano semplici guerrieri al soldo, prediligono armature
            pesanti in maglia o a piastre metalliche, accompagnate da ogni genere di arma o scudo. All'esterno delle
            città si trovano i membri dello strato più basso della popolazione, gli schiavi, dall'aspetto più povero in
            assoluto, benché comunque più in forze e in salute degli sfortunati schiavi di Dorsten.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h4 id="roccaDAvoio" class="anchor">Rocca d'Avorio</h4>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Rocca d'Avorio fu fondata sulle rovine di una città antica, appartenuta a popolazioni estinte che
            abitarono il mondo millenni fa. Il luogo è da sempre ritenuto sacro ed è permeato di magia. Rocca
            d'Avorio è una regione di piccolissime dimensioni, circondata da poche terre insufficienti al suo
            sostentamento e si concretizza in un'unica grande città stato.
          </p>
          <p class="text-justify">
            A Rocca d'Avorio si venera da oltre trent'anni <strong>Asherat</strong>, dio che rappresenta una religione
            pura,
            buona, fondata sull'amore e sul rispetto per il prossimo, un dio che abbraccia tutti gli dèi precedenti.
            Negli ultimi pochi anni l'alto clero di Asherat ha traviato gli insegnamenti della divinità e il culto
            si è autoproclamato unica chiesa di Braara, forzando la popolazione a convertirsi e imprigionando o
            uccidendo i fedeli del Pentarchos.
          </p>
          <p class="text-justify">
            Le strade di Rocca d'Avorio sono battute dalla milizia, alla ricerca del più piccolo indizio di alleanza con
            il nemico o di pratiche proibite. Negli animi degli avoriani, un tempo accoglienti e benevoli, si sta
            facendo strada <strong>un'intolleranza sempre più diffusa</strong>, a causa della quale si guardano
            con sospetto culture, religioni e razze diverse.
          </p>
          <p class="text-justify">
            Durante la Guerra dei Caduti l'unica regione a non cadere è stata Rocca d'Avorio. I sacerdoti di Asherat
            sono stati impegnati per anni, giorno e notte, a tenere attive e funzionanti delle potenti barriere magiche.
            Rocca d'Avorio ha così potuto accogliere i più alti dignitari di ogni regione e i più ricchi cittadini,
            diventando il vero centro del potere politico di tutto il regno.
            Per combattere i Terhaal è stato creato a Rocca d'Avorio un nuovo ordine: i <strong>Cavalieri del
              Crepuscolo</strong>,
            guerrieri sacri scelti e forgiati in un addestramento disumano, votati alla distruzione dei Caduti.
            <strong>L'ordine
              è stato poi assorbito nella Sacra Torre al termine della guerra</strong>.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h4 id="valah" class="anchor">Valah</h4>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Tra tutti gli abitanti di Braara, i Valah sono di certo la popolazione più antica. Vivono nel regno da
            prima dell'arrivo dei colonizzatori e furono da essi decimati e schiacciati al nord sulle montagne,
            dove tutt'ora risiedono.
            Il <strong>territorio montuoso di Valah</strong> è tra i più vasti ma è poco popolato per via del clima
            freddo e
            inospitale. Nonostante tutto, questo territorio dal clima estremo è molto ben conosciuto dalle sue
            genti e ha permesso ai Valah di controllare un'area inespugnabile.
            A causa del freddo e della scarsa tecnologia vestono principalmente con <strong>pellicce di animale</strong>
            e indossano
            prevalentemente armature di pelle e di cuoio, arricchite da parti animali come zanne, artigli, ossa e pelli.
            Le armi preferite dai guerrieri sono le asce, le mazze e gli archi.
          </p>
          <p class="text-justify">
            Sono un <strong>popolo tribale</strong>, estremamente legato alla cultura antica e alle tradizioni. Il
            valore principale è la
            libertà, seguito dalla forza e naturalmente <strong>i Valah non praticano la schiavitù</strong>.
            In ogni occasione si rifiutano di consegnare un ricercato che finirebbe dietro le sbarre, preferiscono dare
            rifugio a un fuggiasco delle altre fazioni a patto che rispetti per sempre le loro leggi. Valah diventa
            così, a tutti gli effetti, la terra delle seconde possibilità.
          </p>
          <p class="text-justify">
            Non vi sono distinzioni tra razze e sessi, le donne sono molto rispettate sia come guerriere sia in quanto
            creatrici di vita e con un ruolo importante in ogni aspetto dell'esistenza dei Valah. <strong>Orchi ed
              elfi</strong> vengono
            rispettati in quanto, insieme ai Valah, sono le creature che originariamente popolavano il regno di Braara.
            Il rapporto dei Valah con la natura è profondo: la rispettano e cercano di vivere in modo quanto più
            possibile armonioso con essa.
          </p>
          <p class="text-justify">
            Negli ultimi cinque anni oltre alla guerra contro i Terhaal, Valah ha dovuto fare i conti con un
            <strong>conflitto interno</strong> che ha lacerato i suoi clan dividendoli in due fazioni nemiche: i clan
            dell'Ovest si sono riuniti
            sotto il vessillo di Einar Grinbergen della tribù di Skan. Grinbergen, forte del suo esercito, si è
            autoproclamato Lord Protettore mettendo fine alla magocrazia di Valah.
          </p>
          <p class="text-justify">
            Le tribù dell'Est, guidate da Astrid Illmaustrung e fedeli al <strong>Concilio del Gelo</strong> - formato
            dai maghi del
            gelovivo – hanno opposto strenua resistenza riuscendo infine a prevalere e a ripristinare il governo
            tradizionale di Valah: la magocrazia. Solo la lungimiranza dei maghi del Concilio ha salvato la vita a Einar
            Grinbergen che, dopo aver giurato fedeltà, è stato nominato Guardiano dell'Ovest e inviato a presidiare i
            confini vicini a Dorsten.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h4 id="velantes" class="anchor">Velantes</h4>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Il <strong>centro del commercio</strong> nel regno di Braara è senza dubbio la fazione di Velantes. Egemone
            nel campo navale,
            possiede la flotta più numerosa e imponente ed è l'unica a poter interagire via mare con tutte le regioni. I
            velantiani sono orgogliosi di appartenere a un <strong>popolo marinaresco</strong>, anche quelli tra loro
            che non hanno mai
            visto una distesa d'acqua più grande della propria tinozza da bagno.
          </p>
          <p class="text-justify">
            Velantes è come un gigantesco porto. Nelle città si trovano <strong>popolazioni</strong> provenienti da
            tutto il regno, non
            si fatica a vedere anche altre razze, perfettamente integrate nella caotica regione del sud. Tutto è
            incentrato sullo scambio di beni: ogni cosa può essere venduta e acquistata a Velantes, basta volerlo
            abbastanza. I velantiani sono <strong>chiassosi, aperti e amichevoli</strong>, ma sanno essere riservati
            quando la situazione
            lo richiede.
          </p>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
