import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Bu-Sen Milano',
      href: '/busen-milano',
    },
    {
      text: 'Judo Educazione',
      href: '/judo-educazione',
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
      href: '/video',
      links: [
        {
          text: 'Congressi',
          href: '/video-congressi',
        },
        {
          text: 'Judo',
          href: '/video-judo',
        },
      ],
    },
    {
      text: 'Judo Adattato',
      href: '/judo-adattato',
    },
    {
      text: 'Intorno al dojo',
      href: '/intorno-dojo',
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
      href: '/appuntamenti',
    },
    {
      text: 'Report',
      href: '/report',
    },
  ],
};

export const pageData = [
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
        href: '/pdf/La-necessita-di-una-filosofia.pdf',
        image: { src: import('~/assets/images/thumbnails/necessita-filosofia.jpg'), alt: 'necessita filosofia' },
      },
      {
        title: 'Zenite, zen notiziario',
        href: '/pdf/Caro-Faustoper-sito.pdf',
        image: { src: import('~/assets/images/thumbnails/zenite.jpg'), alt: 'zenite' },
      },
      {
        title: 'Marcello presenta Cesare Barioli',
        href: '/pdf/CB-presentato-da-M.-Bernardi.pdf',
        image: { src: import('~/assets/images/thumbnails/bernardi.jpg'), alt: 'bernardi' },
      },
      {
        title: '“Il judo educativo”, conferenza all’università dell’Aquila, 23/11/1999',
        href: '/pdf/conferenza-universita-dellAquila.pdf',
        image: { src: import('~/assets/images/thumbnails/judo-educativo.jpg'), alt: 'judo educativo' },
      },
      {
        title: 'Al nostro Maestro di judo e di vita',
        href: '/pdf/Maestro-di-judo.pdf',
        image: { src: import('~/assets/images/thumbnails/maestro-judo.jpg'), alt: 'maestro judo' },
      },
    ],
  },
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
        href: '/pdf/conferenza-di-los-angeles.pdf',
        image: { src: import('~/assets/images/thumbnails/kanolosangeles-150x150.jpg'), alt: 'contributo educazione' },
      },
      {
        title: 'Cos’è il Kodokan judo, di Kano Jigoro',
        href: '/pdf/Cose-il-kodokan-judo.pdf',
        image: {
          src: import('~/assets/images/thumbnails/vecchio_kodokan-150x150.jpg'),
          alt: 'vecchio_kodokan-150x150',
        },
      },
      {
        title: 'Sull’insegnamento del Bojutsu, di Kano Jigoro',
        href: '/pdf/bojutsu.pdf',
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
        href: '/pdf/Le-Kei-del-metodo-Oda.pdf',
        image: { src: import('~/assets/images/thumbnails/keioda-150x150.png'), alt: 'kei metodo oda' },
      },
      {
        title: 'Go, chowa e yawara',
        href: '/pdf/gochowa-e-yawara.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Jigoro_Kano_and_Kyuzo_Mifune-150x150.jpg'),
          alt: 'kano jigoro e kyuzo mifune',
        },
      },
      {
        title: 'Libretto del Sig. Koizumi',
        href: '/pdf/libretto-koizumi.pdf',
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
        href: '/pdf/Brevi-riflessioni-sul-drop-out.pdf',
        image: { src: import('~/assets/images/thumbnails/dropout-150x150.jpg'), alt: 'dropout' },
      },
      {
        title: 'Il corso Elementare, il Corso-base e lo Sviluppo dello Speciale',
        href: '/pdf/corso-elementare.pdf',
        image: {
          src: import('~/assets/images/thumbnails/corsoelementare-150x150.png'),
          alt: 'corso elementare',
        },
      },
      {
        title: 'Randori secondo Kano Jigoro',
        href: '/pdf/randori-secondo-kano.pdf',
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
        href: '/pdf/una-ricerca-sulle-amazzoni1.pdf',
        image: { src: import('~/assets/images/thumbnails/Amazons-150x150.jpg'), alt: 'Amazons' },
      },
      {
        title: 'Il funzionamento morale: pensiero e cognizione',
        href: '/pdf/il-funzionamento-morale-pensiero-e-cognizione.pdf',
        image: {
          src: import('~/assets/images/thumbnails/child-development-150x150.jpg'),
          alt: 'child-development',
        },
      },
      {
        title: 'Potenzialità e capacità della razza umana',
        href: '/pdf/potenzialita-e-capacita-della-razza-umana.pdf',
        image: {
          src: import('~/assets/images/thumbnails/iris-150x150.jpg'),
          alt: 'iris',
        },
      },
      {
        title: 'Erich Neumann: storia delle origini della coscienza',
        href: '/pdf/neuman.pdf',
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
        href: '/pdf/kenshiro-abbe1.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Kenshiro-Abbe-Cesare-Barioli-150x150.jpg'),
          alt: 'abbe barioli',
        },
      },
      {
        title: '4 magnifici signori del judo',
        href: '/pdf/i-4-magnifici.pdf',
        image: {
          src: import('~/assets/images/thumbnails/4magnifici-150x150.png'),
          alt: '4 magnifici',
        },
      },
      {
        title: ' Moshe Feldenkrais',
        href: '/pdf/feldenkrais.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Moshe_talk-150x150.jpg'),
          alt: 'moshe feldenkrais',
        },
      },
      {
        title: 'Ushijima Tatsukuma',
        href: '/pdf/Ushijima.pdf',
        image: {
          src: import('~/assets/images/thumbnails/Tatsukuma_Ushijima-150x150.jpg'),
          alt: 'ushijima',
        },
      },
    ],
  },
  // {
  //   slug: '',
  //   pageTitle: '',
  //   pageImage: { src: import('~/assets/images/'), alt: '' },
  //   articles: [
  //     {
  //       title: '',
  //       href: '/pdf/',
  //       image: { src: import('~/assets/images/thumbnails/'), alt: '' },
  //     },
  //     {
  //       title: '',
  //       href: '/pdf/',
  //       image: {
  //         src: import('~/assets/images/thumbnails/'),
  //         alt: '',
  //       },
  //     },
  //     {
  //       title: '',
  //       href: '/pdf/',
  //       image: {
  //         src: import('~/assets/images/thumbnails/'),
  //         alt: '',
  //       },
  //     },
  //   ],
  // },
];

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
