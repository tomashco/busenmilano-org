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

const judoAdattato = [
  {
    slug: 'judo-adattato',
    pageTitle: 'Judo Adattato',
    pageImage: { src: import('~/assets/images/judo-adattato.jpg'), alt: 'judo adattato' },
    articles: [
      {
        title: 'Teoria e terapia',
        href: SITE.basePathname + '/pdf/teoria-e-terapia.pdf',
        image: { src: import('~/assets/images/thumbnails/autismo-150x150.jpg'), alt: 'autismo' },
      },
      {
        title: 'L’esperienza di un gruppo',
        href: SITE.basePathname + '/pdf/Lesperienza-di-un-gruppo.pdf',
        image: { src: import('~/assets/images/thumbnails/storiadiungruppo-300x300.jpg'), alt: 'storia gruppo' },
      },
      {
        title: 'Profumo di judo, M° Claude Combe',
        href: SITE.basePathname + '/pdf/profumo-di-judo.pdf',
        image: { src: import('~/assets/images/thumbnails/claudeCombe-150x150.png'), alt: 'Claude Combe' },
      },
    ],
  },
];

const report = [
  {
    slug: 'report',
    pageTitle: 'Report',
    pageImage: { src: import('~/assets/images/foto-report.jpg'), alt: 'report' },
    articles: [
      {
        title: 'Keiko e Randori - 3 marzo 2013, Monza',
        href: SITE.basePathname + '/pdf/Monza.pdf',
        image: {
          src: import('~/assets/images/thumbnails/549975_10200823509577055_1341486624_n-150x150.jpg'),
          alt: 'keiko e randori',
        },
      },
      {
        title: 'Keiko e Randori - 17 febbraio 2013, Usmate Velate',
        href: SITE.basePathname + '/pdf/usmate-17-febbraio-2013.pdf',
        image: {
          src: import('~/assets/images/thumbnails/602106_10200715753403218_1080633024_n-e1364392535786-300x300.jpg'),
          alt: 'keiko e randori',
        },
      },
    ],
  },
];

const intornoAlDojo = [
  {
    slug: 'intorno-dojo',
    pageTitle: 'Intorno al dojo',
    pageImage: { src: import('~/assets/images/intorno-al-dojo.jpg'), alt: 'intorno al dojo' },
    links: [
      {
        title: 'Go',
        href: '/go',
      },
      {
        title: 'Letture',
        href: '/letture',
      },
      {
        title: 'Tutorials',
        href: '/tutorial',
      },
    ],
  },
  {
    slug: 'intorno-dojo/go',
    pageTitle: 'Go',
    articles: [
      {
        title: 'Yasuda Sensei, 8° dan e professore di go',
        href: SITE.basePathname + '/pdf/yasuda-go.pdf',
        image: {
          src: import('~/assets/images/thumbnails/yasudayasutoshi.gif'),
          alt: 'congresso 2012',
        },
      },
      {
        title: 'Una sera a cena con Saijo Sensei',
        href: SITE.basePathname + '/pdf/Saijo-sensei-go.pdf',
        image: {
          src: import('~/assets/images/thumbnails/saijomasataka.jpg'),
          alt: 'congresso 2011',
        },
      },
    ],
  },
  {
    slug: 'intorno-dojo/letture',
    pageTitle: 'Letture',
    articles: [
      {
        title: 'Storia di un sogno a Bizan',
        href: SITE.basePathname + '/pdf/Storia-di-un-sogno-a-Bizan.pdf',
        image: {
          src: import('~/assets/images/thumbnails/storiadiunsogno-150x150.png'),
          alt: 'Storia di un sogno',
        },
      },
      {
        title: 'La montagna gialla',
        href: SITE.basePathname + '/pdf/La-Montagna-Gialla.pdf',
        image: {
          src: import('~/assets/images/thumbnails/lamontagnagialla-150x150.png'),
          alt: 'la montagna gialla',
        },
      },
    ],
  },
  {
    slug: 'intorno-dojo/tutorial',
    pageTitle: 'Tutorials',
    articles: [
      {
        title: 'Come costruire una Tsuba per Boken',
        href: SITE.basePathname + '/pdf/Come-costruire-una-Tsuba-per-Boken.pdf',
        image: {
          src: import('~/assets/images/thumbnails/tsubabokken-150x150.png'),
          alt: 'Tsuba bokken',
        },
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
      '<p>L’A.I.S.E. (Ass. It. Sport-Educazione) e l’Università del Piemonte Orientale hanno organizzato in Ottobre 2010 a Vercelli il Congresso “Educazione e Sport, il caso del judo” per celebrare il 150° anniversario della nascita del Fondatore del judo</p><p><span id="more-58"></span></p><p>Erano presenti 180 judoisti di tre continenti, giunti da Giappone, U.S.A., Spagna, Francia, Belgio, Germania. In particolare c’era Ayumi Tanimoto, vincitrice dell’oro ad Atene e a Beijing, che ha fatto lezione di randori.<br>La signora Tanimoto, che ha iniziato il judo in una scuola tradizionale, ha spiegato il punto di vista di molte Associazioni nipponiche: che se si manda il ragazzo in gara per vincere a tutti i costi questo ragazzo ha perso per sempre i benefici del judo. In gara si va, dopo aver imparato la tecnica, a cercare la bellezza del gesto che si riflette nell’ippon ‘magistrale’. In Giappone l’uomo della strada è ancora interessato alla medaglia, ma nell’ambiente del judo si mira a una qualifica più nobile, quella di disciplina educativa.</p><p>Questo avvenimento ci ha permesso di stringere rapporti con professori stranieri e con l’Università di Tsukuba e quindi di proporre tre giorni di discussione e di amicizia sul judo-educazione nella festività di Pasqua, a Villa Salta di Predappio Alta.</p><p><p><iframe src="http://www.youtube.com/embed/H-e_QF3vn9w?feature=oembed" allowfullscreen="" width="768" height="576" frameborder="0"></iframe></p>',
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
    pageDescription:
      '<p>Corpo e Mente sono una cosa sola.</p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="Shin Jin Ichinyo" /><meta itemprop="description" content="Shin Jin Ichinyo" /><meta itemprop="uploadDate" content="2023-03-19T20:33:18.000Z" /><meta itemprop="thumbnailUrl" content="https://s2.dmcdn.net/v/UmdlK1a5tcdQYJE0y/x180" /><meta itemprop="duration" content="P1002S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/k1MlYZuLbKZKCOyVlli" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/k1MlYZuLbKZKCOyVlli?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div>',
  },
  {
    pageTitle: 'Metodo di Allenamento, di Abbe kenshiro',
    slug: 'video/judo/metodo-abbe',
    pageDescription:
      '<p align="right"><span style="font-family: Arial,Helvetica,sans-serif; font-size: medium;"><strong>Metodo di judo di Abbe Kenshiro sensei, il mio Maestro</strong></span></p><p align="right"><span style="font-family: Arial,Helvetica,sans-serif; font-size: small;"><strong>Cesare Barioli</strong></span></p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="Abbe allenamento" /><meta itemprop="description" content="Abbe allenamento" /><meta itemprop="uploadDate" content="2023-03-20T07:46:14.000Z" /><meta itemprop="thumbnailUrl" content="https://s2.dmcdn.net/v/UmhjE1a60z6ssMHx-/x180" /><meta itemprop="duration" content="P910S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8j9cni" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8j9cni?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div>',
  },
  {
    pageTitle: 'La tecnica di Tokio Hirano',
    slug: 'video/judo/tokyo-hirano',
    pageDescription:
      '<div align="justify"><p>Il signor Hirano è nato nell’Agosto 1922 ad Awaji, in provincia di Kobe. Raccontano che abbia cominciato il judo a 12 anni. Divenne allievo di Fukushima-sensei a Kyoto. E quest’ultimo l’indirizzò all’università Takushoku a Tokyo, dove studiò con Ushijima-sensei. Considerando questi particolari possiamo dire che ha avuto una formazione <em>‘butokukai’. </em><br>Giunse in Europa nel ’52, forse a Colonia. Stabilitosi ad Anversa, viaggiò in Francia, Germania, Belgio, Svizzera, Austria, Italia… insegnando judo in corsi e stages, come quello di questo film, che è stato girato al castello di Well. Tornò in Giappone nel ’66 riguadagnando l’università Takushoku, dove insegnava judo, facendo periodiche traferte in Europa. Voleva aprire un dojo in Francia, ma non ha portato a termine il progetto. E’ morto nel 1993.</p><p align="right"><em>(C.B.) </em></p><div align="justify"><p><a href="http://www.busenmilano.org/wp-content/uploads/2012/12/fra-small.gif"><img decoding="async" class="alignleft size-full wp-image-296" title="fra-small" src="http://www.busenmilano.org/wp-content/uploads/2012/12/fra-small.gif" alt="" width="18" height="12"></a>Monsieur Hirano est né en aout 1922 à Awaji (province de Kobe). certain disent qu’il a débuté je judo vers 12 ans.&nbsp; Il a ensuite été élève de Fukushima sensei à Kioto. Ce dernier l’a orienté vers l’université Takushoku à Tokio ou il a été&nbsp; élève de Ushijima sensei. selon le regard sur son enseignement on peu dire qu’il a eu une formation Butokukai.</p><p>Il arrive en Europe en 1952 à Cologne selon certains renseignements.&nbsp; Il s’installera par la suite à Anvers et il&nbsp;parcourra&nbsp;la France, l’Allemagne, la Belgique, la Suisse, l’Autriche, l’Italie, etc… ou il donna des cours et des démonstrations (exemple du film au&nbsp;Château&nbsp;de Well). il repart au Japon en 1966. il réintègre l’université&nbsp;Takushoku, ou il enseigne le judo il fera&nbsp;régulièrement&nbsp;des visites en Europe, ou il donnera des cours. il avait eu projet de Dojo en France qu’il n’a pas pu amener à termes car il est décédé en 1993.</p><p align="right"><em>(Serge Angeles)</em></p></div><p>“Ero un ragazzo, quando mi pervenne il ritaglio di un giornale tedesco che parlava di un campione di judo contro 20. Ma passarono sei mesi e il giornale d’oltr’Alpe pubblicava la notizia di un giapponese contro cento…</p><p>Seppi dopo che non aveva trovato 100 avversari, ma solo (credo) 73. Questo era il judo meraviglioso che ci affascinava. Il volto fanciullesco e stupito di Tokio Hirano fa parte dell’immaginario che inseguivamo… (C. Barioli)”.</p><p style="text-align: center;"><iframe loading="lazy" src="http://www.youtube.com/embed/5xgQDNOqghM?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: center;" align="center">Omaggio a Opa Schutte, <em>“nonno”</em> Schutte allo stage d’estate di Tokio Hirano</p><p align="center">L’uomo alto con i capelli bianchi è ‘nonno Schutte’, uno dei padri del judo tradizionale europeo (con Leggett e Jasarin)”</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/S6Kd570Gfzc?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p align="center">Riscaldamento secondo Tokio Hirano</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/sSvn09h2sA0?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><h2 align="center">“Rompere il tempo e lo spazio” la tecnica di Tokio Hirano</h2><p align="center">Te-waza</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/XgeXaWap2ag?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p align="center">Koshi-waza</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/_baE802C8io?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p align="center">Ashi-Waza</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/_Pe4BxQO6SY?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p align="center">Sutemi, makikomi e hikkomi-waza</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/4ARDNmW0r_8?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><h2 align="center"><span style="font-size: large;">Kata di Tokio Hirano</span></h2><p align="center">Randori-no-kata</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/_nH1kKAwWt0?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><h2 align="center"><span style="font-size: large;">Nuovi kata:</span></h2><p align="center">Nanatsu-no-kata – Hirano-no-kata</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/Zsn7OePls3g?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p align="center">Difesa personale e conclusione</p><p align="center"><iframe loading="lazy" src="http://www.youtube.com/embed/0e827j8OIAU?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p></div>',
  },
  {
    pageTitle: 'Uso del Kime-no-kata, di Stefano Maiaso',
    slug: 'video/judo/uso-kime',
    // href: ,
    // href: SITE.basePathname + '/pdf/Lallenamento-al-combattimento-reale-english.pdf',
    pageDescription: `<p><a href=${
      SITE.basePathname + '/pdf/Lallenamento-al-combattimento-reale.pdf'
    }>L’allenamento al combattimento reale</a></p><p><a href="http://www.busenmilano.org/wp-content/uploads/2012/11/gbr-small.gif"><img decoding="async" class="alignleft size-full wp-image-265" title="gbr-small" src="http://www.busenmilano.org/wp-content/uploads/2012/11/gbr-small.gif" alt="" width="19" height="12"></a><a href=${
      SITE.basePathname + '/pdf/Lallenamento-al-combattimento-reale-english.pdf'
    }>Training for the real fight</a></p>`,
  },
  {
    pageTitle: 'Koshiki no kata - world championship training',
    slug: 'video/judo/koshiki-championship',
    pageDescription:
      '<p><iframe src="http://www.youtube.com/embed/xrjd_BjAtaA?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p>',
  },
  {
    // TODO: sistemare link da qui!
    pageTitle: 'Nage-no-kata e Koshiki-no-kata di Yamashita Yoshiaki con la biografia e un enigma',
    slug: 'video/judo/nage-koshiki',
    pageDescription: `<p>koshiki no kata:</p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="koshiki-no-kata_yamashita.mov.ff" /><meta itemprop="description" content="koshiki-no-kata_yamashita.mov.ff" /><meta itemprop="uploadDate" content="2023-03-20T08:03:56.000Z" /><meta itemprop="thumbnailUrl" content="https://s1.dmcdn.net/v/Umhx01a61DjDqOjg6/x180" /><meta itemprop="duration" content="P160S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8j9dc0" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8j9dc0?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div><p>nage no kata:</p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="nage-no-kata_yamashita.mov.ff" /><meta itemprop="description" content="nage-no-kata_yamashita.mov.ff" /><meta itemprop="uploadDate" content="2023-03-20T08:02:51.000Z" /><meta itemprop="thumbnailUrl" content="https://s2.dmcdn.net/v/Umhw_1a61DeOq5whP/x180" /><meta itemprop="duration" content="P167S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8j9dbz" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8j9dbz?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div><p align="justify">Nell’esecuzione del Koshiki-no-kata appare abbastanza chiaro che <em>tori</em> è il sig. Yamashita Yoshiaki mentre <em>uke</em> dovrebbe essere il sig. Nagaoka Hidekazu.</p><p align="justify">Mentre per il Nage-no-kata <em>tori</em> dovrebbe essere sempre il sig. Yamashita Yoshiaki mentre crediamo di riconoscere il sig. Isogai Hajime come <em>uke</em> ma non ne siamo certi.</p><p align="justify">A seguito trovate un fotogramma con gli esecutori dei kata sopra citati e del Ju-no-kata che potete trovare <a href="http://www.busenmilano.org/?p=257" target="_blank">qui</a>.</p><p style="text-align: center;" align="justify"><img decoding="async" class="size-full wp-image-276 aligncenter" title="kata_antichi" src=${
      SITE.basePathname + '/images/kata_antichi.jpg'
    } alt="" width="360" height="272"></p><p align="center">Da sinistra: Yamashita, Nagaoka, un non ben identificato judoista e quello che crediamo essere il sig. Isogai Hajime.</p><p style="text-align: left;" align="center"><a href=${
      SITE.basePathname + '/pdf/yamashita-photogallery.pdf'
    }>Biografia e foto americane</a></p><p style="text-align: left;" align="center"><img decoding="async" loading="lazy" class="alignleft size-full wp-image-265" title="gbr-small" src=${
      SITE.basePathname + '/images/gbr-small.gif'
    } alt="" width="19" height="12"><a href=${
      SITE.basePathname + '/pdf/muph006.pdf'
    }>Biography and american photos</a></p><p style="text-align: left;" align="center"><a href=${
      SITE.basePathname + '/pdf/yamashita_enigma.pdf'
    }>Un enigma sul signor Yamashita</a></p>`,
  },
  {
    pageTitle: 'Nage-no-kata e biografia di Nagaoka Hidekatsu',
    slug: 'video/judo/nage-nagaoka',
    pageDescription: `<p><iframe src="http://www.youtube.com/embed/JoGbGsneYZk?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p>
    <p><a href=${SITE.basePathname + '/pdf/Nagaoka-biografia.pdf'}>Biografia di Nagaoka Hidekatsu</a></p>
    <p><img decoding="async" loading="lazy" class="alignleft size-full wp-image-265" title="gbr-small" src=${
      SITE.basePathname + '/images/gbr-small.gif'
    } alt="" width="19" height="12"><a href=${
      SITE.basePathname + '/pdf/Nagaoka-biografia-inglese.pdf'
    }>biography of Nagaoka Hidekatsu</a></p>`,
  },
  {
    pageTitle: 'Ju-no-kata di Kano Jigoro, foto',
    slug: 'video/judo/junokata-kano',
    pageDescription: `<p>In questa sezione troverete due montaggi fotografici del sig. Kano che esegue Ju-no-kata, il primo in sequenza rapida ed il secondo a velocità rallentata.</p>
    <p><img decoding="async" loading="lazy" class="alignleft size-full wp-image-265" title="gbr-small" src=${
      SITE.basePathname + '/images/gbr-small.gif'
    } alt="" width="19" height="12"></a>In this section you will find two edited version of Mr Kano performing Ju-no-kata. The first is in rapid sequence; the second is in slow motion.</p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="ju no kata kano normal" /><meta itemprop="description" content="ju no kata kano normal" /><meta itemprop="uploadDate" content="2023-03-20T22:24:13.000Z" /><meta itemprop="thumbnailUrl" content="https://s1.dmcdn.net/v/UmvB11a6DqgxPfqnO/x180" /><meta itemprop="duration" content="P103S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8jaj7l" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8jaj7l?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="ju no kata kano slow" /><meta itemprop="description" content="ju no kata kano slow" /><meta itemprop="uploadDate" content="2023-03-20T22:25:15.000Z" /><meta itemprop="thumbnailUrl" content="https://s1.dmcdn.net/v/UmvB01a6DrBef3Y8F/x180" /><meta itemprop="duration" content="P667S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8jaj7k" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8jaj7k?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div>`,
  },
  {
    pageTitle: 'Ju-no-kata di Isogai Hajime',
    slug: 'video/judo/junokata-isogai',
    pageDescription: `<p align="justify">Di seguito invece un filmato che riprende un esecuzione del Ju-no-kata prima del 1940.</p><p style="text-align: left;" align="center">Tori dovrebbe essere il sig. Isogai Hajime, ma siamo alla ricerca di maggiori dettagli, se qualcuno avesse informazioni sugli esecutori o sul luogo della registrazione può aiutarci nella ricerca.</p><p style="text-align: left;" align="center"><span style="font-size: medium;"><strong>Probabile ju-no-kata di Isogai Hajime </strong></span></p><p><iframe src="http://www.youtube.com/embed/N7Le9LeVsEY?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: left;" align="center">Di seguito un’immagine degli esecutori del filmato (il primo ed il secondo da destra). Probabilmente il tori del filmato precedente è il primo a destra nell’immagine ed assomiglia molto ad Isogai Hajime.</p><p style="text-align: left;" align="center"><img decoding="async" loading="lazy" class="size-full wp-image-258 alignnone" title="junokata-esecutori" src=${
      SITE.basePathname + '/images/junokata-esecutori.jpg'
    } alt="" width="360" height="272"></p><p style="text-align: left;" align="center">Isogai Hajime</p><p style="text-align: left;" align="center"><img decoding="async" loading="lazy" class="alignleft size-full wp-image-259" title="isogai_hajime" src=${
      SITE.basePathname + '/images/isogai_hajime.jpg'
    } alt="" width="150" height="150"></p>`,
  },
  {
    pageTitle: 'Randori davanti all’imperatore – 1922Ju-no-kata di Isogai Hajime',
    slug: 'video/judo/randori-imperatore',
    pageDescription:
      '<p align="justify">Di seguito possiamo osservare i singoli randori; di alcuni esecutori riusciamo a risalire all’identità attraverso l’analisi tecnica (il kata-guruma di Mifune Kyuzo è inconfondibile).</p><p align="justify">Altri sono sicuramente nomi famosi del primo judo ma purtroppo li abbiamo visti in foto quando oramai erano gia avanti con l’età; qui invece sono giovani ed è più difficile identificarli.</p><p style="text-align: left;" align="center"><strong>Primo randori: due studenti “mudansha” </strong></p><p><iframe src="http://www.youtube.com/embed/75wf3L7DRMg?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: left;" align="center"><strong>Secondo randori: 2° dan contro 3° dan </strong></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/qasGAXl60Wg?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: left;" align="center"><strong>Terzo randori: 3° dan contro 3° dan</strong></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/54Nubmy4WsI?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: left;" align="center"><strong>Quarto randori: 5° dan (Mifune Kyuzo) contro 3° dan</strong></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/t_2EVfT03kA?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: left;" align="center"><strong>Quinto randori: 6°dan contro 3° dan</strong></p><p><iframe loading="lazy" src="http://www.youtube.com/embed/-H7r2-z3rVM?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p><p style="text-align: left;" align="center">Inoltre includiamo questo breve filmato di una sessione di randori probabilmente ripresa nello stesso luogo dove il sig. Kano ha fatto lezione di Roppo-no-kuzushi</p><p><iframe loading="lazy" src="http://www.youtube.com/embed/fvh3LtnrybU?feature=player_embedded" width="640" height="360" frameborder="0"></iframe></p>',
  },
  {
    pageTitle: 'La tecnica di Kyuzo Mifune genio del judo',
    slug: 'video/judo/tecnica-mifune',
    pageDescription:
      '<p align="justify"><span style="font-family: Arial,Helvetica,sans-serif;">Il signor Mifune Kyuzo è stato un judoista grandissimo, molto reputato per il nage-waza, famoso per o-guruma e kuki-nage (‘proiezione aerea’, simile a sumi-otoshi). Nel filmato ‘Randori davanti all’Imperatore’ (1922) si riconosce il suo kata-guruma. Non era amante dei kata e del ne-waza, ma è molto interessante la sua tecnica di difesa personale.&nbsp; </span></p><p><iframe width="560" height="315" src="https://www.youtube.com/embed/b6H4PXgx3zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>',
  },
  {
    pageTitle: 'Kime-shiki di Nagaoka Hidekazu (1876-1952) e Samura Kaichiro (1880-1964)',
    slug: 'video/judo/kime-nagaoka-samura',
    pageDescription:
      '<h3>Sei ryoku-zen’yo kokumintaiku no kata</h3><p>I Maestri praticano vestiti e in una stanza, a significare che l’allenamento del Sei-ryoku-zen’yo-kokumin-taiku-no-kata può essere fatto dovunque, senza la necessità di <em>gi</em> e tatami.</p><p>El Kime-shiki de Nagaoka Hidekazu (1876 – 1952) y Samura Kaichiro (1880 – 1964).</p><p>Los Maestros practican vestidos y en una habitación, el que significa que el entrenamiento del Sei-ryoku-zen’yo-kokumin-taiku-no-kata puede ser realizado por todas partes, sin necesitar de gi y de tatami.</p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="kime shiki by Nagaoka Hidezaku" /><meta itemprop="description" content="kime shiki by Nagaoka Hidezaku" /><meta itemprop="uploadDate" content="2023-03-20T22:46:52.000Z" /><meta itemprop="thumbnailUrl" content="https://s1.dmcdn.net/v/UmvNm1a6E9St9ccbd/x180" /><meta itemprop="duration" content="P33S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8jaju8" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8jaju8?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div>',
  },
  {
    pageTitle: 'Lezione di roppo-no-kuzushi di Kano Jigoro',
    slug: 'video/judo/roppo-no-kuzushi',
    pageDescription: `<p align="justify">Le immagini della lezione del signor Kano vengono comprese quando si conosce il racconto della strategia roppo-no-kuzushi.</p><p><a href=${
      SITE.basePathname + '/pdf/jigoro-kano-Roppo-no-kuzushi.pdf'
    }>jigoro kano-Roppo no kuzushi</a></p><p><a href=${
      SITE.basePathname + '/pdf/jigoro-kano-Roppo-no-kuzushi-english.pdf'
    }>jigoro kano-Roppo no kuzushi, english version</a></p><p><a href=${
      SITE.basePathname + '/pdf/jigoro-kano-Roppo-no-kuzushi-spanish-version.pdf'
    }>jigoro kano-Roppo no kuzushi, spanish version</a></p>
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="name" content="Roppo no Kuzushi by Jigoro Kano" /><meta itemprop="description" content="Roppo no Kuzushi by Jigoro Kano" /><meta itemprop="uploadDate" content="2023-03-20T22:54:26.000Z" /><meta itemprop="thumbnailUrl" content="https://s1.dmcdn.net/v/UmvPm1a6EGdkwZYOl/x180" /><meta itemprop="duration" content="P106S" /><meta itemprop="embedUrl" content="https://www.dailymotion.com/embed/video/x8jajxs" /><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8jajxs?autoplay=1" width="100%" height="100%"   allow="autoplay" allowfullscreen></iframe></div>`,
  },
];

export const pageData = [...busenMilano, ...judoEducazione, ...video, ...judoAdattato, ...intornoAlDojo, ...report];
