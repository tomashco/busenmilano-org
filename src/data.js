import { SITE } from '~/config.mjs';

export const headerData = {
  links: [
    {
      text: 'Bu-Sen Milano',
      href: SITE.basePathname + '/busen-milano',
    },
    {
      text: 'Judo Educazione',
      href: SITE.basePathname + '/judo-educazione',
      links: [
        {
          text: 'Scritti del fondatore',
          href: '/scritti-fondatore',
        },
        {
          text: 'Tecnica',
          href: '/tecnica',
        },
        {
          text: 'Didattica',
          href: '/didattica',
        },
        {
          text: "Ricerche sull'educazione",
          href: '/ricerche-educazione',
        },
        {
          text: 'Storia e personaggi del judo',
          href: '/storia',
        },
      ],
    },
    {
      text: 'Video',
      href: SITE.basePathname + '/video',
      links: [
        {
          text: 'Congressi',
          href: '/congressi',
        },
        {
          text: 'Judo',
          href: '/judo',
        },
      ],
    },
    {
      text: 'Judo Adattato',
      href: SITE.basePathname + '/judo-adattato',
    },
    {
      text: 'Intorno al dojo',
      href: SITE.basePathname + '/intorno-dojo',
      links: [
        {
          text: 'Go',
          href: '/go',
        },
        {
          text: 'Letture',
          href: '/letture',
        },
        {
          text: 'Tutorial',
          href: '/tutorial',
        },
      ],
    },
    {
      text: 'Appuntamenti',
      href: SITE.basePathname + '/appuntamenti',
    },
    {
      text: 'Report',
      href: SITE.basePathname + '/report',
    },
  ],
};

const busenMilano = [
  {
    slug: 'busen-milano',
    pageTitle: 'Bu-Sen Milano',
    pageImage: { src: import('~/assets/images/busen-milano.jpg'), alt: 'busen-milano' },
    pageDescription: `<p class="pb-6">La storia del Bu-sen di Milano è legata alla vita di Cesare Barioli, che iniziò a far judo quando in
  Italia non si conosceva ancora molto di questa disciplina. Era il 1966 quando quel vecchio teatro milanese
  di via Arese 7 fu trasformato in un dojo: tecnica, keiko, randori, gare, passione e sudore fanno il nome
  del Bu-sen di Milano. Una scuola che ha visto campioni, riconosciuti a livello internazionale e che ha
  creato maestri, tuttora attivi nel mondo del judo, contemporaneamente si forma un ambiente culturale in
  grado di favorire lo sviluppo, in Italia, di altre attività legate alla cultura orientale e non solo. Nel
  1986 Cesare Barioli si reca in Giappone e al suo ritorno, porta con sé gli scritti originali del
  fondatore: il prof. Kano Jigoro. Si occupa personalmente della traduzione e pubblica “Judo Kyohon –
  Fondamenti del judo”. La prima edizione: “Quaderni del Bu-sen N°3” esce come supplemento al N° 31 della
  rivista “Kyu shin do”. L’attività promossa dal Bu-sen è un susseguirsi di Stage, di Corsi di Formazione
  per insegnanti, pubblicazioni, traduzioni, ricerche ed anche lo sviluppo del judo adattato. Nel 2000 la
  sede storica viene messa in vendita. L’Associazione prosegue l’attività, prima presso la palestra di una
  scuola a Quarto Oggiaro, poi si trasferisce a Cinisello Balsamo dov’è tuttora attiva. A breve sarà pronta
  la nuova sede, torneremo a Milano, e avrà le caratteristiche predisposte da Cesare Barioli. Chiediamo
  scusa per questa pallida presentazione, ma abbiamo scelto di non raccontare ed offrire, invece, al lettore
  la possibilità di ricostruire un po’ di “storia” attraverso i testi, articoli, foto e racconti che potrà
  leggere, di volta in volta, su queste pagine. Per info e chiarimenti scrivere a: <a class="hover:text-[#cf2e2e] text-blue-700 underline" href="mailto:infobusenmilano@gmail.com">infobusenmilano@gmail.com</p>`,
    articles: [
      {
        title: 'La necessità di una filosofia',
        href: SITE.basePathname + '/pdf/La-necessita-di-una-filosofia.pdf',
        image: { src: import('~/assets/images/thumbnails/necessita-filosofia.jpg'), alt: 'necessita filosofia' },
      },
      {
        title: 'Zenite, zen notiziario',
        href: SITE.basePathname + '/pdf/Caro-Faustoper-sito.pdf',
        image: { src: import('~/assets/images/thumbnails/zenite.jpg'), alt: 'zenite' },
      },
      {
        title: 'Marcello presenta Cesare Barioli',
        href: SITE.basePathname + '/pdf/CB-presentato-da-M.-Bernardi.pdf',
        image: { src: import('~/assets/images/thumbnails/bernardi.jpg'), alt: 'bernardi' },
      },
      {
        title: '“Il judo educativo”, conferenza all’università dell’Aquila, 23/11/1999',
        href: SITE.basePathname + '/pdf/conferenza-universita-dellAquila.pdf',
        image: { src: import('~/assets/images/thumbnails/judo-educativo.jpg'), alt: 'judo educativo' },
      },
      {
        title: 'Al nostro Maestro di judo e di vita',
        href: SITE.basePathname + '/pdf/Maestro-di-judo.pdf',
        image: { src: import('~/assets/images/thumbnails/maestro-judo.jpg'), alt: 'maestro judo' },
      },
    ],
  },
];

const judoEducazione = [
  {
    slug: 'judo-educazione',
    pageTitle: 'Judo Educazione',
    pageImage: { src: import('~/assets/images/judo-educazione.jpg'), alt: 'judo-educazione' },
    pageDescription: `<p class="pb-6">La parola “judo”, che traduciamo Via dell’adattabilità esprime una disciplina formativa a beneficio dei giovani, formulata dal signor Jigoro Kano (1860-1938) tra il 1882, data di nascita dell’istituto Kodokan: Luogo per la ricerca della Via, e il 1922 (quando dichiarato completo nei suoi fini e nei suoi mezzi il judo venne presentato all’imperatore)
    Basterebbero queste poche righe per introdurre il judo del fondatore, ma dobbiamo aggiungere:
        che il signor Kano non si raffigura come maestro imbattibile di un’arte marziale, ma come un judoka che ha realizzato la sua personalità da giovane per metterla al servizio del Paese e per offrire il suo prodotto culturale al mondo intero;
        che l’applicazione di un paradigma educativo alla formazione dei giovani, affidato alla scuola (in Giappone) è fallita per l’ingerenza dei militari, che hanno usato la scuola, l’educazione e lo sport a scopi sciovinisti e per esaltare la guerra;
        che questa situazione ha cancellato in maniera dirompente la proposta educativa del judo, favorendone la trasformazione in sport mondiale;
        che il ju-sport differisce dal judo in ogni aspetto della pratica: l’allenamento, l’esercizio libero, quello di Forma, i rapporti fra praticanti e verso gli altri.
    Buona lettura!`,
    links: [
      {
        title: 'Scritti del fondatore',
        href: '/scritti-fondatore',
      },
      {
        title: 'Tecnica',
        href: '/tecnica',
      },
      {
        title: 'Didattica',
        href: '/didattica',
      },
      {
        title: "Ricerche sull'educazione",
        href: '/ricerche-educazione',
      },
      {
        title: 'Storia e personaggi del judo',
        href: '/storia-personaggi',
      },
    ],
  },
  {
    slug: 'judo-educazione/scritti-fondatore',
    pageTitle: 'Scritti del fondatore',
    pageImage: { src: import('~/assets/images/scritti-fondatore.jpg'), alt: 'scritti del fondatore' },
    articles: [
      {
        title: 'Il contributo del judo all’Educazione di Kano Jigoro (translation with original speech)',
        href: SITE.basePathname + '/pdf/conferenza-di-los-angeles.pdf',
        image: { src: import('~/assets/images/thumbnails/kanolosangeles-150x150.jpg'), alt: 'contributo educazione' },
      },
      {
        title: 'Cos’è il Kodokan judo, di Kano Jigoro',
        href: SITE.basePathname + '/pdf/Cose-il-kodokan-judo.pdf',
        image: {
          src: import('~/assets/images/thumbnails/vecchio_kodokan-150x150.jpg'),
          alt: 'vecchio_kodokan-150x150',
        },
      },
      {
        title: 'Sull’insegnamento del Bojutsu, di Kano Jigoro',
        href: SITE.basePathname + '/pdf/bojutsu.pdf',
        image: { src: import('~/assets/images/thumbnails/bojutsu-146x150.gif'), alt: 'bojutsu-146x150' },
      },
    ],
  },
  {
    slug: 'judo-educazione/tecnica',
    pageTitle: 'Tecnica',
    pageImage: { src: import('~/assets/images/tecnica.jpg'), alt: 'tecnica' },
    articles: [
      {
        title: 'Le kei del metodo Oda',
        href: SITE.basePathname + '/pdf/Le-Kei-del-metodo-Oda.pdf',
        image: { src: import('~/assets/images/thumbnails/keioda-150x150.png'), alt: 'kei metodo oda' },
      },
      {
        title: 'Go, chowa e yawara',
        href: SITE.basePathname + '/pdf/gochowa-e-yawara.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Jigoro_Kano_and_Kyuzo_Mifune-150x150.jpg'),
          alt: 'kano jigoro e kyuzo mifune',
        },
      },
      {
        title: 'Libretto del Sig. Koizumi',
        href: SITE.basePathname + '/pdf/libretto-koizumi.pdf',
        image: {
          src: import('~/assets/images/thumbnails/koizumi-150x150.png'),
          alt: 'koizumi',
        },
      },
    ],
  },
  {
    slug: 'judo-educazione/didattica',
    pageTitle: 'Didattica',
    pageImage: { src: import('~/assets/images/didattica.jpg'), alt: 'didattica' },
    articles: [
      {
        title: 'Brevi riflessioni sul drop out',
        href: SITE.basePathname + '/pdf/Brevi-riflessioni-sul-drop-out.pdf',
        image: { src: import('~/assets/images/thumbnails/dropout-150x150.jpg'), alt: 'dropout' },
      },
      {
        title: 'Il corso Elementare, il Corso-base e lo Sviluppo dello Speciale',
        href: SITE.basePathname + '/pdf/corso-elementare.pdf',
        image: {
          src: import('~/assets/images/thumbnails/corsoelementare-150x150.png'),
          alt: 'corso elementare',
        },
      },
      {
        title: 'Randori secondo Kano Jigoro',
        href: SITE.basePathname + '/pdf/randori-secondo-kano.pdf',
        image: {
          src: import('~/assets/images/thumbnails/randori-150x150.png'),
          alt: 'randori',
        },
      },
    ],
  },
  {
    slug: 'judo-educazione/ricerche-educazione',
    pageTitle: "Ricerche sull'Educazione",
    pageImage: { src: import('~/assets/images/ricerche-educazione.jpg'), alt: 'ricerche educazione' },
    articles: [
      {
        title: 'Una ricerca sulle amazzoni',
        href: SITE.basePathname + '/pdf/una-ricerca-sulle-amazzoni1.pdf',
        image: { src: import('~/assets/images/thumbnails/Amazons-150x150.jpg'), alt: 'Amazons' },
      },
      {
        title: 'Il funzionamento morale: pensiero e cognizione',
        href: SITE.basePathname + '/pdf/il-funzionamento-morale-pensiero-e-cognizione.pdf',
        image: {
          src: import('~/assets/images/thumbnails/child-development-150x150.jpg'),
          alt: 'child-development',
        },
      },
      {
        title: 'Potenzialità e capacità della razza umana',
        href: SITE.basePathname + '/pdf/potenzialita-e-capacita-della-razza-umana.pdf',
        image: {
          src: import('~/assets/images/thumbnails/iris-150x150.jpg'),
          alt: 'iris',
        },
      },
      {
        title: 'Erich Neumann: storia delle origini della coscienza',
        href: SITE.basePathname + '/pdf/neuman.pdf',
        image: {
          src: import('~/assets/images/thumbnails/neumann-150x150.jpg'),
          alt: 'neumann',
        },
      },
    ],
  },
  {
    slug: 'judo-educazione/storia',
    pageTitle: 'Storia e personaggi del judo',
    pageImage: { src: import('~/assets/images/storiaepersonaggi.jpg'), alt: 'Storia e personaggi' },
    articles: [
      {
        title: 'Documenti sul Sig. Abbe',
        href: SITE.basePathname + '/pdf/kenshiro-abbe1.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Kenshiro-Abbe-Cesare-Barioli-150x150.jpg'),
          alt: 'abbe barioli',
        },
      },
      {
        title: '4 magnifici signori del judo',
        href: SITE.basePathname + '/pdf/i-4-magnifici.pdf',
        image: {
          src: import('~/assets/images/thumbnails/4magnifici-150x150.png'),
          alt: '4 magnifici',
        },
      },
      {
        title: ' Moshe Feldenkrais',
        href: SITE.basePathname + '/pdf/feldenkrais.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Moshe_talk-150x150.jpg'),
          alt: 'moshe feldenkrais',
        },
      },
      {
        title: 'Ushijima Tatsukuma',
        href: SITE.basePathname + '/pdf/Ushijima.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Tatsukuma_Ushijima-150x150.jpg'),
          alt: 'ushijima',
        },
      },
    ],
  },
];

const video = [
  {
    slug: 'video',
    pageTitle: 'Video',
    pageImage: { src: import('~/assets/images/video.jpg'), alt: 'video' },
    links: [
      {
        title: 'Congressi',
        href: '/congressi',
      },
      {
        title: 'Judo',
        href: '/judo',
      },
    ],
  },
  {
    slug: 'video/congressi',
    pageTitle: 'Congressi',
    articles: [
      {
        title: 'Congresso 2012 “Judo, una Prospettiva sull’Educazione”',
        href: SITE.basePathname + '/video/congressi/congresso-2012/',
        image: {
          src: import('~/assets/images/thumbnails/unaprospettivasulleducazione-150x150.png'),
          alt: 'congresso 2012',
        },
      },
      {
        title: 'Congresso 2011 “Un paradigma per l’educazione, il contributo del judo”',
        href: SITE.basePathname + '/video/congressi/congresso-2011/',
        image: {
          src: import('~/assets/images/thumbnails/congresso2011-150x150.png'),
          alt: 'congresso 2011',
        },
      },
      {
        title: 'Congresso 2011 “judo adattato e integrazione”',
        href: SITE.basePathname + '/video/congressi/congresso-2011-adattato/',
        image: {
          src: import('~/assets/images/thumbnails/concetta-150x150.png'),
          alt: 'congresso 2011 adattato',
        },
      },
      {
        title: 'Congresso 2010 “Educazione e Sport, il caso del judo”',
        href: SITE.basePathname + '/video/congressi/congresso-2010/',
        image: {
          src: import('~/assets/images/thumbnails/congresso2010-150x150.png'),
          alt: 'congresso 2010',
        },
      },
      {
        title: 'Congressi 2006-2007 “il judo e i suoi kata”',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/',
        image: {
          src: import('~/assets/images/thumbnails/cesare2007-150x150.png'),
          alt: 'congressi 2006 2007',
        },
      },
    ],
  },
  {
    slug: 'video/congressi/congresso-2012',
    pageTitle: 'Congresso 2012 “Judo, una Prospettiva sull’Educazione”',
    pageDescription:
      '<p>Congresso Internazionale Vercelli 19, 20, 21 Ottobre 2012</p></br><iframe width="560" height="315" src="https://www.youtube.com/embed/aqs9bC4DAlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    slug: 'video/congressi/congresso-2011',
    pageTitle: 'Congresso 2011 “Un paradigma per l’educazione, il contributo del judo”',
    pageDescription:
      '<p>L’<a href="http://www.sport-educazione.it/">A.I.S.E.</a> ritiene che l’Educazione si trovi oggi nel periodo pre-paradigmatico, caratterizzato dall’esistenza di molte scuole e dall’assenza di un sistema di principi condivisi (vedi: Thomas Kuhn, <em>La Struttura delle Rivoluzioni Scientifiche,</em> 1985).</p><p><span id="more-67"></span></p><p>L’argomento permette di analizzare il pensiero di Jigoro Kano che proponeva il judo come pratica educativa: <em>“L’Occidente ci ha dato tutto e questo un giorno potrebbe esserci rinfacciato. Cosa può dare il Giappone alla civiltà planetaria? l’idea di Educazione”.</em></p><p>Il Congresso vuole discutere questo argomento e proporre l’istituzione di una laurea-breve in judo-educazione, per offrire un’alternativa alla concezione sportiva.</p><p><a href="http://www.youtube.com/watch?feature=player_embedded&amp;v=yFny8Xj-F9o">link to the english video</a></p><p><iframe src="http://www.youtube.com/embed/faAyAskpu-0?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Congresso 2011 “judo adattato e integrazione”',
    slug: 'video/congressi/congresso-2011-adattato',
    pageDescription:
      '<p>“A vent’anni dal primo congresso organizzato a Varallo Pombia, l’Aise tira le somme di quanto abbiamo fatto.</p><p><span id="more-62"></span></p><p>Poco. Ma sopratutto abbiamo incontrato difficoltà a rapportarci con l’estero (le nazioni europee), dove è proseguito il programma campionistico di modello Paralimpico.<br>Dobbiamo decidere quanto ci impegnamo.<br>Il primo week-end di questo progetto congressuale, sponsorizzato dal Ministero del Sociale, ha visto la partecipazione di un centinaio di disabili, che hanno gareggiato con gli ‘abili’, e si sono esibiti in lezione. Ora contiamo di avere altrettanto successo con gli operatori del settore, con medici, psicologi e autorità.<br>Ci permettiamo di invitare tutti a dare una mano, se non altro a decidere se il judo-adattato serve all’integrazione, o meno”</p><p>Twenty years after the first congress held in Varallo Pombia, AISE sums up what it did.<br>Not too much. But above all we have faced difficulties in relations with other countries (European nations), where the champion-program based on the Paralympics Model is pursued.<br>We have to decide how much we want to commit.<br>The first weekend of this conference’s project, sponsored by the Ministry of Social Welfare, was attended by hundreds of special needs people, who competed with “able” people; they also performed in teaching lessons. Now we expect to have a similar success with specialists of this field, with doctors, psychologists and authorities.<br>We would like to invite everyone to help out, even only to decide whether adapted judo is helpful for the integration or not.</p><p><iframe src="http://player.vimeo.com/video/63047764" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="500" height="375" frameborder="0"></iframe> </p><p><a href="http://vimeo.com/63047764">Judo adattato</a> from <a href="http://vimeo.com/user10846993">Bu-sen Milano</a> on <a href="http://vimeo.com">Vimeo</a>.</p>',
  },
  {
    pageTitle: 'Congresso 2010 “Educazione e Sport, il caso del judo”',
    slug: 'video/congressi/congresso-2010',
    pageDescription:
      '<p>L’A.I.S.E. (Ass. It. Sport-Educazione) e l’Università del Piemonte Orientale hanno organizzato in Ottobre 2010 a Vercelli il Congresso “Educazione e Sport, il caso del judo” per celebrare il 150° anniversario della nascita del Fondatore del judo</p><p><span id="more-58"></span></p><p>Erano presenti 180 judoisti di tre continenti, giunti da Giappone, U.S.A., Spagna, Francia, Belgio, Germania. In particolare c’era Ayumi Tanimoto, vincitrice dell’oro ad Atene e a Beijing, che ha fatto lezione di randori.<br>La signora Tanimoto, che ha iniziato il judo in una scuola tradizionale, ha spiegato il punto di vista di molte Associazioni nipponiche: che se si manda il ragazzo in gara per vincere a tutti i costi questo ragazzo ha perso per sempre i benefici del judo. In gara si va, dopo aver imparato la tecnica, a cercare la bellezza del gesto che si riflette nell’ippon ‘magistrale’. In Giappone l’uomo della strada è ancora interessato alla medaglia, ma nell’ambiente del judo si mira a una qualifica più nobile, quella di disciplina educativa.</p><p>Questo avvenimento ci ha permesso di stringere rapporti con professori stranieri e con l’Università di Tsukuba e quindi di proporre tre giorni di discussione e di amicizia sul judo-educazione nella festività di Pasqua, a Villa Salta di Predappio Alta.</p><p>Il testo da cui partiamo a discutere con insegnanti e giornalisti stranieri la questione del judo-educazione, proposto dal sottoscritto, è scaricabile <a href="http://www.busenmilano.org/wp-content/uploads/2012/11/Il-judo-non-è-sport-Capitolo-Primo.pdf">qui</a>, cliccando col tasto destro del mouse e selezionando “salva link con nome”</p><p><iframe src="http://www.youtube.com/embed/H-e_QF3vn9w?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Congressi 2006-2007 “il judo e i suoi kata”',
    slug: 'video/congressi/congresso-2006-2007',
    articles: [
      {
        title: 'Kyto-ryu',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/kyto-ryu',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/vismara-150x150.png'),
          alt: 'kito ryu',
        },
      },
      {
        title: 'Analogie tra Nage e Itsutsu-no-kata',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/nage-itsutsu',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/tesini2-150x150.png'),
          alt: 'nage itsutsu',
        },
      },
      {
        title: 'Muyoshi nel Koshiki-no-kata',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/muyoshi-koshiki',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/lisi-150x150.png'),
          alt: 'muyoshi koshiki',
        },
      },
      {
        title: 'Attraverso il tempo e i continenti i kata…',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/continenti-kata',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/gaio-150x150.png'),
          alt: 'continenti kata',
        },
      },
      {
        title: 'Shu-ha-ri',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/shu-ha-ri',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/bandini-150x150.png'),
          alt: 'shi ha ri',
        },
      },
      {
        title: 'Studio su Ju-no-kata',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/studio-ju-no-kata',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/cesare2007-150x150.png'),
          alt: 'ju no kata',
        },
      },
      {
        title: 'Una proposta da Kime e Nage-no-kata',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/kime-nage',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/maiaso2007-150x150.png'),
          alt: 'kime nage',
        },
      },
      {
        title: 'Itsutsu-no-kata e lo stile di espressione',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/itsutsu-no-kata',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/francescaAntonino-150x150.png'),
          alt: 'itsutsu no kata',
        },
      },
      {
        title: 'Ju-no-kata e corso di randori del sig. Kano',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/randori-ju-no-kata',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/tesini-150x150.png'),
          alt: 'ju no kata',
        },
      },
      {
        title: 'L’utilizzo del Kime-no-kata per la decisione',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/decisione-kime-no-kata',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/maiaso-150x150.png'),
          alt: 'decisione kime no kata',
        },
      },
      {
        title: 'Studio su Nage-no-kata',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/studio-ju-no-kata',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/BarioliNage-150x150.png'),
          alt: 'studio ju no kata',
        },
      },
      {
        title: 'Il Sei-ryoku del maestro Nagaoka',
        href: SITE.basePathname + '/video/congressi/congresso-2006-2007/studio-sei-ryoku',
        image: {
          src: import('~/assets/images/thumbnails/congressiKata/pelligra1-150x150.png'),
          alt: 'studio sei ryoku',
        },
      },
    ],
  },
  {
    pageTitle: 'Kyto-ryu',
    slug: 'video/congressi/congresso-2006-2007/kyto-ryu',
    pageDescription:
      '<div class="entry-content"><p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Alfredo Vismara<span id="more-55"></span></p><p><iframe src="http://www.youtube.com/embed/cC-sKnr8iZU?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/_lpNYgQ6QDo?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/UNhSb828vio?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/41g8RX07Xo0?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/5XWNFI6UqaA?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Analogie tra Nage e Itsutsu-no-kata',
    slug: 'video/congressi/congresso-2006-2007/nage-itsutsu',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Pino Tesini<span id="more-51"></span></p><p><iframe src="http://www.youtube.com/embed/xiTKshmJx4g?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/XIRCX2En5Bg?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/p6dvo16e3kM?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/PftlCZAVKWc?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0">',
  },
  {
    pageTitle: 'Muyoshi nel Koshiki-no-kata',
    slug: 'video/congressi/congresso-2006-2007/muyoshi-koshiki',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Alessio Lisi<span id="more-48"></span></p><p><iframe src="http://www.youtube.com/embed/e0CcIEO8PPs?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/SBggmAAXnkM?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/XZ8IAkRhLlM?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/ivYc9jlY7F8?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0">',
  },
  {
    pageTitle: 'Attraverso il tempo e i continenti i kata…',
    slug: 'video/congressi/congresso-2006-2007/continenti-kata',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Ivana Gaio<span id="more-45"></span></p><p><iframe src="http://www.youtube.com/embed/pgCQP-kNg-w?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/i3DgJO9zZvI?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/qhgLhNFRkMw?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0">',
  },
  {
    pageTitle: 'Shu-ha-ri',
    slug: 'video/congressi/congresso-2006-2007/shu-ha-ri',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Stefania Bandini<span id="more-42"></span></p><p><iframe src="http://www.youtube.com/embed/5fk0vGfqSaw?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/IOjbX5nP4AI?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/cuhBiBN_lno?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/KcBMERVocg0?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/urxfG4ezXl4?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/DLRnbEmN6ss?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0">',
  },
  {
    pageTitle: 'Studio su Ju-no-kata',
    slug: 'video/congressi/congresso-2006-2007/studio-ju-no-kata',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Cesare Barioli<span id="more-39"></span></p><p><iframe src="http://www.youtube.com/embed/xEO3HNQcTT4?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/Ats5VTNE0Ac?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/bBDkGXhwUOk?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/hdmRjX3D-Qc?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/pM9iieLgIIg?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Una proposta da Kime e Nage-no-kata',
    slug: 'video/congressi/congresso-2006-2007/kime-nage',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2007</p><p>Intervento di Stefano Maiaso<span id="more-36"></span></p><p><iframe src="http://www.youtube.com/embed/CQwaIyCt9xI?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/dAMs1jMWnDE?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/rjvkoqqTsbI?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Itsutsu-no-kata e lo stile di espressione',
    slug: 'video/congressi/congresso-2006-2007/itsutsu-no-kata',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2006</p><p>Intervento di Francesca Antonino<span id="more-33"></span></p><p><iframe src="http://www.youtube.com/embed/OCJxUr2Adu4?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/K6zVu_FbERo?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/TGWG94D3Qt8?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Ju-no-kata e corso di randori del sig. Kano',
    slug: 'video/congressi/congresso-2006-2007/randori-ju-no-kata',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2006</p><p>Intervento di Pino Tesini<span id="more-30"></span></p><p><iframe src="http://www.youtube.com/embed/K0xY8pAKmYc?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/GmnyrmeJw-I?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/y9L2enwUWvQ?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/ustmlHU7u2Q?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/Agwhw-z2BKw?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'L’utilizzo del Kime-no-kata per la decisione',
    slug: 'video/congressi/congresso-2006-2007/decisione-kime-no-kata',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2006</p><p>Intervento di Stefano Maiaso<span id="more-27"></span></p><p><iframe src="http://www.youtube.com/embed/x9bhJx-fkgM?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/68Thjl4xqnk?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/rGO35zz9tzg?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/Gq-boNnPIcg?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/4qFAd2P912U?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Studio su Nage-no-kata',
    slug: 'video/congressi/congresso-2006-2007/studio-ju-no-kata',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2006</p><p>Intervento di Cesare Barioli<span id="more-24"></span></p><p><iframe src="http://www.youtube.com/embed/3_nYZGSFIXc?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/8xSYmuWJMpI?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/N5dg2WwL8Rw?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/3ty-7Hlx1-I?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/BkTP4pTCsUc?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'Il Sei-ryoku del maestro Nagaoka',
    slug: 'video/congressi/congresso-2006-2007/studio-sei-ryoku',
    pageDescription:
      '<p>Congresso “Il judo e i suoi kata”, Solferino 2006</p><p>Intervento di Maurizio Pelligra<span id="more-20"></span></p><p><iframe src="http://www.youtube.com/embed/ZucxA6RAd_c?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/y5Hxb6XxIcs?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/Jv8UE6htzZM?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
  },
  {
    slug: 'video/judo',
    pageTitle: 'Judo',
    articles: [
      {
        title: 'Shin Jin Ichinyo',
        href: SITE.basePathname + '/video/judo/shin-jin-ichinyo',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/shinjinichinyo-150x150.png'),
          alt: 'shin-jin-ichinyo',
        },
      },
      {
        title: 'Metodo di Allenamento, di Abbe kenshiro',
        href: SITE.basePathname + '/video/judo/metodo-abbe',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/abbe_allenamento.mov.ff_thumb0-150x150.jpg'),
          alt: 'abbe kenshiro',
        },
      },
      {
        title: 'La tecnica di Tokio Hirano',
        href: SITE.basePathname + '/video/judo/tokyo-hirano',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/tokyo_hirano-150x150.jpg'),
          alt: 'tokyo hirano',
        },
      },
      {
        title: 'Uso del Kime-no-kata, di Stefano Maiaso',
        href: SITE.basePathname + '/video/judo/uso-kime',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/tsukkake-idori-150x150.jpg'),
          alt: 'tokyo hirano',
        },
      },
      {
        title: 'Koshiki no kata - world championship training',
        href: SITE.basePathname + '/video/judo/koshiki-championship',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/koshiki-worldchampionshiptrainer-150x150.png'),
          alt: 'koshiki championship',
        },
      },
      {
        title: 'Nage-no-kata e Koshiki-no-kata di Yamashita Yoshiaki con la biografia e un enigma',
        href: SITE.basePathname + '/video/judo/nage-koshiki',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/YoshiakiYamashita-150x150.jpg'),
          alt: 'nage koshiki',
        },
      },
      {
        title: 'Nage-no-kata e biografia di Nagaoka Hidekatsu',
        href: SITE.basePathname + '/video/judo/nage-nagaoka',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/nagaoka-nagenokata-150x150.png'),
          alt: 'nage nagaoka',
        },
      },
      {
        title: 'Ju-no-kata di Kano Jigoro, foto',
        href: SITE.basePathname + '/video/judo/junokata-kano',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/kano-junokata-150x150.png'),
          alt: 'junokata kano',
        },
      },
      {
        title: 'Ju-no-kata di Isogai Hajime',
        href: SITE.basePathname + '/video/judo/junokata-isogai',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/ju-no-kata-150x150.png'),
          alt: 'junokata isogai',
        },
      },
      {
        title: 'Randori davanti all’imperatore – 1922Ju-no-kata di Isogai Hajime',
        href: SITE.basePathname + '/video/judo/randori-imperatore',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/Randori_1922-150x150.jpg'),
          alt: 'randori imperatore',
        },
      },
      {
        title: 'La tecnica di Kyuzo Mifune genio del judo',
        href: SITE.basePathname + '/video/judo/tecnica-mifune',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/mifune-150x150.png'),
          alt: 'tecnica mifune',
        },
      },
      {
        title: 'Kime-shiki di Nagaoka Hidekazu (1876-1952) e Samura Kaichiro (1880-1964)',
        href: SITE.basePathname + '/video/judo/kime-nagaoka-samura',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/kime_shiki-150x150.jpg'),
          alt: 'kime nagaoka samura',
        },
      },
      {
        title: 'Lezione di roppo-no-kuzushi di Kano Jigoro',
        href: SITE.basePathname + '/video/judo/roppo-no-kuzushi',
        image: {
          src: import('~/assets/images/thumbnails/videoJudo/kano_ukigoshi-150x150.jpg'),
          alt: 'roppo no kuzushi',
        },
      },
    ],
  },
  {
    pageTitle: 'Shin Jin Ichinyo',
    slug: 'video/judo/shin-jin-ichinyo',
  },
  {
    pageTitle: 'Metodo di Allenamento, di Abbe kenshiro',
    slug: 'video/judo/metodo-abbe',
  },
  {
    pageTitle: 'La tecnica di Tokio Hirano',
    slug: 'video/judo/tokyo-hirano',
  },
  {
    pageTitle: 'Uso del Kime-no-kata, di Stefano Maiaso',
    slug: 'video/judo/uso-kime',
  },
  {
    pageTitle: 'Koshiki no kata - world championship training',
    slug: 'video/judo/koshiki-championship',
  },
  {
    pageTitle: 'Nage-no-kata e Koshiki-no-kata di Yamashita Yoshiaki con la biografia e un enigma',
    slug: 'video/judo/nage-koshiki',
  },
  {
    pageTitle: 'Nage-no-kata e biografia di Nagaoka Hidekatsu',
    slug: 'video/judo/nage-nagaoka',
  },
  {
    pageTitle: 'Ju-no-kata di Kano Jigoro, foto',
    slug: 'video/judo/junokata-kano',
  },
  {
    pageTitle: 'Ju-no-kata di Isogai Hajime',
    slug: 'video/judo/junokata-isogai',
  },
  {
    pageTitle: 'Randori davanti all’imperatore – 1922Ju-no-kata di Isogai Hajime',
    slug: 'video/judo/randori-imperatore',
  },
  {
    pageTitle: 'La tecnica di Kyuzo Mifune genio del judo',
    slug: 'video/judo/tecnica-mifune',
  },
  {
    pageTitle: 'Kime-shiki di Nagaoka Hidekazu (1876-1952) e Samura Kaichiro (1880-1964)',
    slug: 'video/judo/kime-nagaoka-samura',
  },
  {
    pageTitle: 'Lezione di roppo-no-kuzushi di Kano Jigoro',
    slug: 'video/judo/roppo-no-kuzushi',
  },
];

export const pageData = [...busenMilano, ...judoEducazione, ...video];
