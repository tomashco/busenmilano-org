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
    ],
  },
  {
    slug: 'video/congressi/congresso-2012',
    pageTitle: 'Congresso 2012',
    pageDescription:
      '<p>Congresso Internazionale Vercelli 19, 20, 21 Ottobre 2012</p></br><iframe width="560" height="315" src="https://www.youtube.com/embed/aqs9bC4DAlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    slug: 'video/judo',
    pageTitle: 'Judo',
    articles: [
      // {
      //   title: '',
      //   href: '/pdf/',
      //   image: { src: import('~/assets/images/thumbnails/'), alt: '' },
      // },
    ],
  },
];

export const pageData = [...busenMilano, ...judoEducazione, ...video];
