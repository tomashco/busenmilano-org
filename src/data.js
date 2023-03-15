import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Bu-Sen Milano',
      href: 'busenmilano',
    },
    {
      text: 'Judo Educazione',
      href: 'judo-educazione',
      links: [
        {
          text: 'Scritti del fondatore',
          href: 'scritti-fondatore',
        },
        {
          text: 'Tecnica',
          href: 'tecnica',
        },
        {
          text: 'Didattica',
          href: 'didattica',
        },
        {
          text: "Ricerche sull'educazione",
          href: 'ricerche-educazione',
        },
        {
          text: 'Storia e personaggi del judo',
          href: 'storia',
        },
      ],
    },
    {
      text: 'Video',
      href: 'video',
      links: [
        {
          text: 'Congressi',
          href: 'video-congressi',
        },
        {
          text: 'Judo',
          href: 'video-judo',
        },
      ],
    },
    {
      text: 'Judo Adattato',
      href: 'judo-adattato',
    },
    {
      text: 'Intorno al dojo',
      href: 'intorno-dojo',
      links: [
        {
          text: 'Go',
          href: 'go',
        },
        {
          text: 'Letture',
          href: 'letture',
        },
        {
          text: 'Tutorial',
          href: 'tutorial',
        },
      ],
    },
    {
      text: 'Appuntamenti',
      href: 'appuntamenti',
    },
    {
      text: 'Report',
      href: 'report',
    },
  ],
};

export const pageData = {
  busenMilano: {
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
  judoEducazione: {
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
};

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
