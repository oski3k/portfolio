export type Language =
  | "pl"
  | "en"
  | "de"
  | "fr"
  | "es"
  | "it"
  | "pt"
  | "ru"
  | "zh"
  | "ja"
  | "ar"
  | "hi"
  | "nl";

export interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title1: string;
    title2: string;
    iAm: string;
    role1: string;
    role2: string;
    role3: string;
    description: string;
    viewWork: string;
  };
  about: {
    title: string;
    titleAccent: string;
    paragraph1: string;
    paragraph2: string;
    skills: {
      frontend: {
        title: string;
        desc: string;
      };
      mobile: {
        title: string;
        desc: string;
      };
      languages: {
        title: string;
        desc: string;
      };
      tools: {
        title: string;
        desc: string;
      };
    };
  };
  projects: {
    title: string;
    titleAccent: string;
    subtitle: string;
    filterAll: string;
    filterWebsites: string;
    filterApps: string;
    categoryApp: string;
    categoryWebsite: string;
    motivio: {
      description: string;
    };
    code: string;
    liveDemo: string;
  };
  contact: {
    contactBadge: string;
    title1: string;
    title2: string;
    subtitle: string;
    emailCopied: string;
    readyToPaste: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    close: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendButton: string;
      sending: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    nav: {
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
    },
    hero: {
      greeting: "WITAJ ŚWIECIE, JESTEM OSKAR",
      title1: "Tworzę",
      title2: "Cyfrowe Doświadczenia",
      iAm: "Jestem",
      role1: "Web Developerem.",
      role2: "Android Developerem.",
      role3: "Full Stack Coderem.",
      description:
        "Specjalizuję się w tworzeniu nowoczesnych stron internetowych i natywnych aplikacji na Androida. Łączę elastyczność Reacta z wydajnością Kotlina, aby dostarczać produkty, które świetnie wyglądają i działają płynnie.",
      viewWork: "Zobacz Moje Prace",
    },
    about: {
      title: "O",
      titleAccent: "Mnie",
      paragraph1:
        "Jestem ambitnym studentem IT, przekształcającym pasję w profesjonalny kod. Od ponad roku skupiam się na budowaniu skalowalnych aplikacji webowych i mobilnych, które rozwiązują rzeczywiste problemy.",
      paragraph2:
        'Łączę edukację techniczną z praktycznym, projektowym podejściem. Kieruję się zasadami "czystego kodu" i chęcią szybkiego opanowywania nowych technologii. Moim celem jest łączenie logiki funkcjonalnej z płynnym doświadczeniem użytkownika.',
      skills: {
        frontend: {
          title: "Ekosystem Frontend",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Aplikacje Mobilne",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Główne Języki",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Narzędzia Dev",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Wybrane",
      titleAccent: "Projekty",
      subtitle:
        "Kolekcja moich najlepszych prac na platformach webowych i mobilnych.",
      filterAll: "Wszystkie Prace",
      filterWebsites: "Strony",
      filterApps: "Aplikacje",
      categoryApp: "Aplikacja",
      categoryWebsite: "Strona",
      motivio: {
        description:
          "Aplikacja do dbania o zdrowie psychiczne i produktywność. Oferuje tracker nastroju, dziennik, ćwiczenia oddechowe oraz codzienne cytaty, które inspirują do działania.",
      },
      code: "Kod",
      liveDemo: "Zobacz",
    },
    contact: {
      contactBadge: "Skontaktuj się ze mną",
      title1: "Zbudujmy Coś",
      title2: "Niezwykłego",
      subtitle:
        "Obecnie szukam nowych możliwości. Niezależnie od tego, czy masz pytanie, czy po prostu chcesz się przywitać, moja skrzynka jest zawsze otwarta.",
      emailCopied: "Email Skopiowany!",
      readyToPaste: "Gotowy do wklejenia",
      copyright: "Wszelkie prawa zastrzeżone.",
      privacyPolicy: "Polityka Prywatności",
      termsOfService: "Warunki Usługi",
      successTitle: "Wiadomość Wysłana!",
      successMessage:
        "Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.",
      errorTitle: "Błąd Wysyłania",
      errorMessage: "Coś poszło nie tak. Spróbuj ponownie później.",
      close: "Zamknij",
      form: {
        nameLabel: "Imię",
        namePlaceholder: "Jan Kowalski",
        emailLabel: "Email",
        emailPlaceholder: "jan@example.com",
        subjectLabel: "Temat",
        subjectPlaceholder: "Zapytanie ofertowe / Współpraca",
        messageLabel: "Treść wiadomości",
        messagePlaceholder: "Cześć! Chciałbym/chciałabym omówić...",
        sendButton: "Wyślij wiadomość",
        sending: "Wysyłanie...",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "HELLO WORLD, I'M OSKAR",
      title1: "Building",
      title2: "Digital Experiences",
      iAm: "I am",
      role1: "a Web Developer.",
      role2: "an Android Developer.",
      role3: "a Full Stack Coder.",
      description:
        "I specialize in creating modern websites and native Android applications. I combine the flexibility of React with the performance of Kotlin to deliver products that look great and run smoothly.",
      viewWork: "View My Work",
    },
    about: {
      title: "About",
      titleAccent: "Me",
      paragraph1:
        "I am an ambitious IT student transforming passion into professional code. For the past year, I have focused on building scalable Web and Mobile applications that solve real-world problems.",
      paragraph2:
        "I combine technical education with a practical, project-based approach. I am driven by 'clean code' principles and the desire to master new technologies quickly. My goal is to bridge the gap between functional logic and smooth user experience.",
      skills: {
        frontend: {
          title: "Frontend Ecosystem",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Mobile Apps",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Core Languages",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Dev Tools",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Featured",
      titleAccent: "Projects",
      subtitle: "A collection of my best work across web and mobile platforms.",
      filterAll: "All Work",
      filterWebsites: "Websites",
      filterApps: "Apps",
      categoryApp: "App",
      categoryWebsite: "Website",
      motivio: {
        description:
          "An app for mental health and productivity. Features mood tracker, journal, breathing exercises, and daily quotes to inspire action.",
      },
      code: "Code",
      liveDemo: "View",
    },
    contact: {
      contactBadge: "Get in touch",
      title1: "Let's Build Something",
      title2: "Extraordinary",
      subtitle:
        "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
      emailCopied: "Email Copied!",
      readyToPaste: "Ready to paste",
      copyright: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      successTitle: "Message Sent!",
      successMessage:
        "Thank you for reaching out. I'll get back to you as soon as possible.",
      errorTitle: "Sending Error",
      errorMessage: "Something went wrong. Please try again later.",
      close: "Close",
      form: {
        nameLabel: "Name",
        namePlaceholder: "John Doe",
        emailLabel: "Email",
        emailPlaceholder: "john@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Quote Request / Collaboration",
        messageLabel: "Message",
        messagePlaceholder: "Hi! I would like to discuss...",
        sendButton: "Send Message",
        sending: "Sending...",
      },
    },
  },
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "HALLO WELT, ICH BIN OSKAR",
      title1: "Entwicklung",
      title2: "Digitaler Erlebnisse",
      iAm: "Ich bin",
      role1: "ein Web-Entwickler.",
      role2: "ein Android-Entwickler.",
      role3: "ein Full-Stack-Programmierer.",
      description:
        "Ich spezialisiere mich auf die Erstellung moderner Websites und nativer Android-Anwendungen. Ich kombiniere die Flexibilität von React mit der Leistung von Kotlin, um Produkte zu liefern, die großartig aussehen und reibungslos funktionieren.",
      viewWork: "Meine Arbeiten ansehen",
    },
    about: {
      title: "Über",
      titleAccent: "Mich",
      paragraph1:
        "Ich bin ein ehrgeiziger IT-Student, der Leidenschaft in professionellen Code verwandelt. Seit über einem Jahr konzentriere ich mich auf die Entwicklung skalierbarer Web- und Mobile-Anwendungen, die reale Probleme lösen.",
      paragraph2:
        "Ich verbinde technische Ausbildung mit einem praktischen, projektbasierten Ansatz. Ich orientiere mich an den Prinzipien des 'Clean Code' und dem Wunsch, neue Technologien schnell zu beherrschen. Mein Ziel ist es, funktionale Logik mit reibungsloser Benutzererfahrung zu verbinden.",
      skills: {
        frontend: {
          title: "Frontend-Ökosystem",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Mobile Apps",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Kernsprachen",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Entwicklungstools",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Ausgewählte",
      titleAccent: "Projekte",
      subtitle:
        "Eine Sammlung meiner besten Arbeiten auf Web- und Mobile-Plattformen.",
      filterAll: "Alle Arbeiten",
      filterWebsites: "Websites",
      filterApps: "Apps",
      categoryApp: "App",
      categoryWebsite: "Website",
      motivio: {
        description:
          "Eine App für psychische Gesundheit und Produktivität. Bietet Stimmungs-Tracker, Tagebuch, Atemübungen und tägliche Zitate zur Inspiration.",
      },
      code: "Code",
      liveDemo: "Ansehen",
    },
    contact: {
      contactBadge: "Kontaktieren Sie mich",
      title1: "Lass uns etwas",
      title2: "Außergewöhnliches schaffen",
      subtitle:
        "Ich suche derzeit nach neuen Möglichkeiten. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, mein Posteingang ist immer offen.",
      emailCopied: "E-Mail kopiert!",
      readyToPaste: "Bereit zum Einfügen",
      copyright: "Alle Rechte vorbehalten.",
      privacyPolicy: "Datenschutz",
      termsOfService: "Nutzungsbedingungen",
      successTitle: "Nachricht gesendet!",
      successMessage:
        "Danke für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden.",
      errorTitle: "Sendefehler",
      errorMessage:
        "Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.",
      close: "Schließen",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Max Mustermann",
        emailLabel: "E-Mail",
        emailPlaceholder: "max@beispiel.de",
        subjectLabel: "Betreff",
        subjectPlaceholder: "Angebotsanfrage / Zusammenarbeit",
        messageLabel: "Nachricht",
        messagePlaceholder: "Hallo! Ich würde gerne besprechen...",
        sendButton: "Nachricht senden",
        sending: "Wird gesendet...",
      },
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "BONJOUR LE MONDE, JE SUIS OSKAR",
      title1: "Création",
      title2: "d'Expériences Numériques",
      iAm: "Je suis",
      role1: "un Développeur Web.",
      role2: "un Développeur Android.",
      role3: "un Développeur Full Stack.",
      description:
        "Je me spécialise dans la création de sites web modernes et d'applications Android natives. Je combine la flexibilité de React avec les performances de Kotlin pour livrer des produits qui ont fière allure et fonctionnent sans accroc.",
      viewWork: "Voir mes travaux",
    },
    about: {
      title: "À",
      titleAccent: "Propos",
      paragraph1:
        "Je suis un étudiant en informatique ambitieux qui transforme la passion en code professionnel. Depuis plus d'un an, je me concentre sur la création d'applications Web et mobiles évolutives qui résolvent des problèmes réels.",
      paragraph2:
        "Je combine une formation technique avec une approche pratique et axée sur les projets. Je suis guidé par les principes du 'code propre' et le désir de maîtriser rapidement les nouvelles technologies. Mon objectif est de relier la logique fonctionnelle à une expérience utilisateur fluide.",
      skills: {
        frontend: {
          title: "Écosystème Frontend",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Applications Mobiles",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Langages Principaux",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Outils de Développement",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Projets",
      titleAccent: "Sélectionnés",
      subtitle:
        "Une collection de mes meilleurs travaux sur les plateformes web et mobiles.",
      filterAll: "Tous les Travaux",
      filterWebsites: "Sites Web",
      filterApps: "Applications",
      categoryApp: "Application",
      categoryWebsite: "Site Web",
      motivio: {
        description:
          "Une application pour la santé mentale et la productivité. Propose un tracker d'humeur, un journal, des exercices de respiration et des citations quotidiennes inspirantes.",
      },
      code: "Code",
      liveDemo: "Voir",
    },
    contact: {
      contactBadge: "Contactez-moi",
      title1: "Créons Quelque Chose",
      title2: "d'Extraordinaire",
      subtitle:
        "Je recherche actuellement de nouvelles opportunités. Que vous ayez une question ou que vous vouliez simplement dire bonjour, ma boîte de réception est toujours ouverte.",
      emailCopied: "E-mail copié !",
      readyToPaste: "Prêt à coller",
      copyright: "Tous droits réservés.",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      successTitle: "Message envoyé !",
      successMessage:
        "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      errorTitle: "Erreur d'envoi",
      errorMessage:
        "Quelque chose s'est mal passé. Veuillez réessayer plus tard.",
      close: "Fermer",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Jean Dupont",
        emailLabel: "E-mail",
        emailPlaceholder: "jean@exemple.com",
        subjectLabel: "Sujet",
        subjectPlaceholder: "Demande de devis / Collaboration",
        messageLabel: "Message",
        messagePlaceholder: "Bonjour ! J'aimerais discuter de...",
        sendButton: "Envoyer le message",
        sending: "Envoi en cours...",
      },
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "HOLA MUNDO, SOY OSKAR",
      title1: "Construyendo",
      title2: "Experiencias Digitales",
      iAm: "Soy",
      role1: "un Desarrollador Web.",
      role2: "un Desarrollador Android.",
      role3: "un Programador Full Stack.",
      description:
        "Me especializo en crear sitios web modernos y aplicaciones Android nativas. Combino la flexibilidad de React con el rendimiento de Kotlin para entregar productos que se ven geniales y funcionan sin problemas.",
      viewWork: "Ver mi trabajo",
    },
    about: {
      title: "Sobre",
      titleAccent: "Mí",
      paragraph1:
        "Soy un estudiante de informática ambicioso que transforma la pasión en código profesional. Durante el último año, me he centrado en construir aplicaciones web y móviles escalables que resuelven problemas del mundo real.",
      paragraph2:
        "Combino la educación técnica con un enfoque práctico basado en proyectos. Me guío por los principios del 'código limpio' y el deseo de dominar rápidamente nuevas tecnologías. Mi objetivo es conectar la lógica funcional con una experiencia de usuario fluida.",
      skills: {
        frontend: {
          title: "Ecosistema Frontend",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Aplicaciones Móviles",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Lenguajes Principales",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Herramientas de Desarrollo",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Proyectos",
      titleAccent: "Destacados",
      subtitle:
        "Una colección de mis mejores trabajos en plataformas web y móviles.",
      filterAll: "Todos los Trabajos",
      filterWebsites: "Sitios Web",
      filterApps: "Aplicaciones",
      categoryApp: "Aplicación",
      categoryWebsite: "Sitio Web",
      motivio: {
        description:
          "Una aplicación para la salud mental y la productividad. Ofrece seguimiento del estado de ánimo, diario, ejercicios de respiración y citas diarias inspiradoras.",
      },
      code: "Código",
      liveDemo: "Ver",
    },
    contact: {
      contactBadge: "Contáctame",
      title1: "Construyamos Algo",
      title2: "Extraordinario",
      subtitle:
        "Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, mi bandeja de entrada siempre está abierta.",
      emailCopied: "¡Correo copiado!",
      readyToPaste: "Listo para pegar",
      copyright: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      successTitle: "¡Mensaje enviado!",
      successMessage:
        "Gracias por contactarme. Te responderé lo antes posible.",
      errorTitle: "Error de envío",
      errorMessage: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
      close: "Cerrar",
      form: {
        nameLabel: "Nombre",
        namePlaceholder: "Juan Pérez",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "juan@ejemplo.com",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Solicitud de presupuesto / Colaboración",
        messageLabel: "Mensaje",
        messagePlaceholder: "¡Hola! Me gustaría discutir...",
        sendButton: "Enviar mensaje",
        sending: "Enviando...",
      },
    },
  },
  it: {
    nav: {
      about: "Chi sono",
      projects: "Progetti",
      contact: "Contatto",
    },
    hero: {
      greeting: "CIAO MONDO, SONO OSKAR",
      title1: "Creo",
      title2: "Esperienze Digitali",
      iAm: "Sono",
      role1: "uno Sviluppatore Web.",
      role2: "uno Sviluppatore Android.",
      role3: "un Programmatore Full Stack.",
      description:
        "Mi specializzo nella creazione di siti web moderni e applicazioni Android native. Combino la flessibilità di React con le prestazioni di Kotlin per fornire prodotti che hanno un bell'aspetto e funzionano senza problemi.",
      viewWork: "Vedi il mio lavoro",
    },
    about: {
      title: "Chi",
      titleAccent: "Sono",
      paragraph1:
        "Sono uno studente di informatica ambizioso che trasforma la passione in codice professionale. Nell'ultimo anno mi sono concentrato sulla creazione di applicazioni Web e Mobile scalabili che risolvono problemi reali.",
      paragraph2:
        "Combino l'educazione tecnica con un approccio pratico basato sui progetti. Sono guidato dai principi del 'codice pulito' e dal desiderio di padroneggiare rapidamente nuove tecnologie. Il mio obiettivo è collegare la logica funzionale con un'esperienza utente fluida.",
      skills: {
        frontend: {
          title: "Ecosistema Frontend",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "App Mobili",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Linguaggi Principali",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Strumenti di Sviluppo",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Progetti",
      titleAccent: "In Evidenza",
      subtitle:
        "Una raccolta dei miei migliori lavori su piattaforme web e mobili.",
      filterAll: "Tutti i Lavori",
      filterWebsites: "Siti Web",
      filterApps: "App",
      categoryApp: "App",
      categoryWebsite: "Sito Web",
      motivio: {
        description:
          "Un'app per la salute mentale e la produttività. Offre tracker dell'umore, diario, esercizi di respirazione e citazioni quotidiane per ispirare l'azione.",
      },
      code: "Codice",
      liveDemo: "Vedi",
    },
    contact: {
      contactBadge: "Contattami",
      title1: "Costruiamo Qualcosa",
      title2: "di Straordinario",
      subtitle:
        "Attualmente sto cercando nuove opportunità. Che tu abbia una domanda o voglia semplicemente salutare, la mia casella di posta è sempre aperta.",
      emailCopied: "Email Copiata!",
      readyToPaste: "Pronto per incollare",
      copyright: "Tutti i diritti riservati.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Termini di Servizio",
      successTitle: "Messaggio Inviato!",
      successMessage:
        "Grazie per avermi contattato. Ti risponderò il prima possibile.",
      errorTitle: "Errore di Invio",
      errorMessage: "Qualcosa è andato storto. Riprova più tardi.",
      close: "Chiudi",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Mario Rossi",
        emailLabel: "Email",
        emailPlaceholder: "mario@esempio.it",
        subjectLabel: "Oggetto",
        subjectPlaceholder: "Richiesta preventivo / Collaborazione",
        messageLabel: "Messaggio",
        messagePlaceholder: "Ciao! Vorrei discutere di...",
        sendButton: "Invia messaggio",
        sending: "Invio in corso...",
      },
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "OLÁ MUNDO, SOU OSKAR",
      title1: "Criando",
      title2: "Experiências Digitais",
      iAm: "Sou",
      role1: "um Desenvolvedor Web.",
      role2: "um Desenvolvedor Android.",
      role3: "um Programador Full Stack.",
      description:
        "Especializo-me na criação de sites modernos e aplicativos Android nativos. Combino a flexibilidade do React com o desempenho do Kotlin para entregar produtos que têm ótima aparência e funcionam perfeitamente.",
      viewWork: "Ver meu trabalho",
    },
    about: {
      title: "Sobre",
      titleAccent: "Mim",
      paragraph1:
        "Sou um estudante de TI ambicioso transformando paixão em código profissional. No último ano, concentrei-me na construção de aplicações Web e Mobile escaláveis que resolvem problemas do mundo real.",
      paragraph2:
        "Combino educação técnica com uma abordagem prática baseada em projetos. Sou guiado pelos princípios de 'código limpo' e pelo desejo de dominar rapidamente novas tecnologias. Meu objetivo é conectar a lógica funcional com uma experiência de usuário fluida.",
      skills: {
        frontend: {
          title: "Ecossistema Frontend",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Apps Móveis",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Linguagens Principais",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Ferramentas de Dev",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Projetos",
      titleAccent: "Em Destaque",
      subtitle:
        "Uma coleção dos meus melhores trabalhos em plataformas web e mobile.",
      filterAll: "Todos os Trabalhos",
      filterWebsites: "Sites",
      filterApps: "Apps",
      categoryApp: "App",
      categoryWebsite: "Site",
      motivio: {
        description:
          "Um app para saúde mental e produtividade. Oferece rastreador de humor, diário, exercícios de respiração e citações diárias inspiradoras.",
      },
      code: "Código",
      liveDemo: "Ver",
    },
    contact: {
      contactBadge: "Entre em contato",
      title1: "Vamos Construir Algo",
      title2: "Extraordinário",
      subtitle:
        "Atualmente estou procurando novas oportunidades. Se você tem uma pergunta ou apenas quer dizer oi, minha caixa de entrada está sempre aberta.",
      emailCopied: "Email Copiado!",
      readyToPaste: "Pronto para colar",
      copyright: "Todos os direitos reservados.",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      successTitle: "Mensagem Enviada!",
      successMessage:
        "Obrigado por entrar em contato. Responderei o mais breve possível.",
      errorTitle: "Erro de Envio",
      errorMessage: "Algo deu errado. Por favor, tente novamente mais tarde.",
      close: "Fechar",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "João Silva",
        emailLabel: "Email",
        emailPlaceholder: "joao@exemplo.com",
        subjectLabel: "Assunto",
        subjectPlaceholder: "Pedido de orçamento / Colaboração",
        messageLabel: "Mensagem",
        messagePlaceholder: "Olá! Gostaria de discutir...",
        sendButton: "Enviar mensagem",
        sending: "Enviando...",
      },
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      contact: "Контакт",
    },
    hero: {
      greeting: "ПРИВЕТ МИР, Я ОСКАР",
      title1: "Создаю",
      title2: "Цифровые Впечатления",
      iAm: "Я",
      role1: "Веб-разработчик.",
      role2: "Android-разработчик.",
      role3: "Full Stack программист.",
      description:
        "Я специализируюсь на создании современных веб-сайтов и нативных Android-приложений. Я сочетаю гибкость React с производительностью Kotlin для создания продуктов, которые отлично выглядят и работают плавно.",
      viewWork: "Посмотреть работы",
    },
    about: {
      title: "Обо",
      titleAccent: "Мне",
      paragraph1:
        "Я амбициозный студент IT, превращающий страсть в профессиональный код. В течение последнего года я сосредоточился на создании масштабируемых веб и мобильных приложений, решающих реальные проблемы.",
      paragraph2:
        "Я сочетаю техническое образование с практическим подходом, основанным на проектах. Меня направляют принципы 'чистого кода' и желание быстро осваивать новые технологии. Моя цель - связать функциональную логику с плавным пользовательским опытом.",
      skills: {
        frontend: {
          title: "Frontend Экосистема",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Мобильные Приложения",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Основные Языки",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Инструменты Разработки",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Избранные",
      titleAccent: "Проекты",
      subtitle: "Коллекция моих лучших работ на веб и мобильных платформах.",
      filterAll: "Все Работы",
      filterWebsites: "Веб-сайты",
      filterApps: "Приложения",
      categoryApp: "Приложение",
      categoryWebsite: "Веб-сайт",
      motivio: {
        description:
          "Приложение для психического здоровья и продуктивности. Включает трекер настроения, дневник, дыхательные упражнения и ежедневные цитаты для вдохновения.",
      },
      code: "Код",
      liveDemo: "Смотреть",
    },
    contact: {
      contactBadge: "Свяжитесь со мной",
      title1: "Давайте Создадим Что-то",
      title2: "Необычное",
      subtitle:
        "В настоящее время я ищу новые возможности. Есть ли у вас вопрос или вы просто хотите поздороваться, мой почтовый ящик всегда открыт.",
      emailCopied: "Email Скопирован!",
      readyToPaste: "Готов к вставке",
      copyright: "Все права защищены.",
      privacyPolicy: "Политика Конфиденциальности",
      termsOfService: "Условия Использования",
      successTitle: "Сообщение Отправлено!",
      successMessage: "Спасибо за обращение. Я отвечу как можно скорее.",
      errorTitle: "Ошибка Отправки",
      errorMessage: "Что-то пошло не так. Пожалуйста, попробуйте позже.",
      close: "Закрыть",
      form: {
        nameLabel: "Имя",
        namePlaceholder: "Иван Иванов",
        emailLabel: "Email",
        emailPlaceholder: "ivan@example.com",
        subjectLabel: "Тема",
        subjectPlaceholder: "Запрос предложения / Сотрудничество",
        messageLabel: "Сообщение",
        messagePlaceholder: "Привет! Я хотел бы обсудить...",
        sendButton: "Отправить сообщение",
        sending: "Отправка...",
      },
    },
  },
  zh: {
    nav: {
      about: "关于",
      projects: "项目",
      contact: "联系",
    },
    hero: {
      greeting: "你好世界，我是奥斯卡",
      title1: "构建",
      title2: "数字体验",
      iAm: "我是",
      role1: "Web开发者。",
      role2: "Android开发者。",
      role3: "全栈程序员。",
      description:
        "我专注于创建现代网站和原生Android应用程序。我将React的灵活性与Kotlin的性能相结合，提供外观出色且运行流畅的产品。",
      viewWork: "查看作品",
    },
    about: {
      title: "关于",
      titleAccent: "我",
      paragraph1:
        "我是一名雄心勃勃的IT学生，将热情转化为专业代码。在过去的一年里，我专注于构建可扩展的Web和移动应用程序，解决实际问题。",
      paragraph2:
        "我将技术教育与基于项目的实践方法相结合。我遵循'干净代码'原则，渴望快速掌握新技术。我的目标是将功能逻辑与流畅的用户体验联系起来。",
      skills: {
        frontend: {
          title: "前端生态系统",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "移动应用",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "核心语言",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "开发工具",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "精选",
      titleAccent: "项目",
      subtitle: "我在Web和移动平台上的最佳作品集。",
      filterAll: "所有作品",
      filterWebsites: "网站",
      filterApps: "应用",
      categoryApp: "应用",
      categoryWebsite: "网站",
      motivio: {
        description:
          "一款心理健康和生产力应用。提供情绪追踪器、日记、呼吸练习和每日励志名言。",
      },
      code: "代码",
      liveDemo: "查看",
    },
    contact: {
      contactBadge: "联系我",
      title1: "让我们构建",
      title2: "非凡之物",
      subtitle:
        "我目前正在寻找新的机会。无论您有问题还是只是想打个招呼，我的收件箱始终开放。",
      emailCopied: "邮箱已复制！",
      readyToPaste: "准备粘贴",
      copyright: "版权所有。",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      successTitle: "消息已发送！",
      successMessage: "感谢您的联系。我会尽快回复您。",
      errorTitle: "发送错误",
      errorMessage: "出了点问题。请稍后再试。",
      close: "关闭",
      form: {
        nameLabel: "姓名",
        namePlaceholder: "张三",
        emailLabel: "邮箱",
        emailPlaceholder: "zhang@example.com",
        subjectLabel: "主题",
        subjectPlaceholder: "报价请求 / 合作",
        messageLabel: "消息",
        messagePlaceholder: "你好！我想讨论...",
        sendButton: "发送消息",
        sending: "发送中...",
      },
    },
  },
  ja: {
    nav: {
      about: "私について",
      projects: "プロジェクト",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "こんにちは世界、私はオスカーです",
      title1: "構築する",
      title2: "デジタル体験",
      iAm: "私は",
      role1: "Webデベロッパーです。",
      role2: "Androidデベロッパーです。",
      role3: "フルスタックプログラマーです。",
      description:
        "モダンなWebサイトとネイティブAndroidアプリケーションの作成を専門としています。Reactの柔軟性とKotlinのパフォーマンスを組み合わせて、見た目が良くスムーズに動作する製品を提供します。",
      viewWork: "作品を見る",
    },
    about: {
      title: "私に",
      titleAccent: "ついて",
      paragraph1:
        "私は情熱をプロフェッショナルなコードに変える野心的なIT学生です。過去1年間、実際の問題を解決するスケーラブルなWebおよびモバイルアプリケーションの構築に注力してきました。",
      paragraph2:
        "技術教育と実践的なプロジェクトベースのアプローチを組み合わせています。「クリーンコード」の原則と新しい技術を迅速に習得したいという願望に導かれています。私の目標は、機能的なロジックとスムーズなユーザー体験を結びつけることです。",
      skills: {
        frontend: {
          title: "フロントエンドエコシステム",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "モバイルアプリ",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "コア言語",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "開発ツール",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "注目の",
      titleAccent: "プロジェクト",
      subtitle: "Webおよびモバイルプラットフォームでの私の最高の作品集。",
      filterAll: "すべての作品",
      filterWebsites: "ウェブサイト",
      filterApps: "アプリ",
      categoryApp: "アプリ",
      categoryWebsite: "ウェブサイト",
      motivio: {
        description:
          "メンタルヘルスと生産性のためのアプリ。気分トラッカー、日記、呼吸エクササイズ、毎日のインスピレーション引用を提供します。",
      },
      code: "コード",
      liveDemo: "見る",
    },
    contact: {
      contactBadge: "お問い合わせ",
      title1: "一緒に何か",
      title2: "特別なものを作りましょう",
      subtitle:
        "現在、新しい機会を探しています。質問がある場合、または単に挨拶したい場合でも、私の受信トレイは常に開いています。",
      emailCopied: "メールをコピーしました！",
      readyToPaste: "貼り付け準備完了",
      copyright: "全著作権所有。",
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約",
      successTitle: "メッセージが送信されました！",
      successMessage:
        "お問い合わせいただきありがとうございます。できるだけ早く返信いたします。",
      errorTitle: "送信エラー",
      errorMessage: "問題が発生しました。後でもう一度お試しください。",
      close: "閉じる",
      form: {
        nameLabel: "名前",
        namePlaceholder: "山田太郎",
        emailLabel: "メール",
        emailPlaceholder: "yamada@example.com",
        subjectLabel: "件名",
        subjectPlaceholder: "見積もり依頼 / コラボレーション",
        messageLabel: "メッセージ",
        messagePlaceholder: "こんにちは！話し合いたいことがあります...",
        sendButton: "メッセージを送信",
        sending: "送信中...",
      },
    },
  },
  ar: {
    nav: {
      about: "عني",
      projects: "المشاريع",
      contact: "اتصل",
    },
    hero: {
      greeting: "مرحبا بالعالم، أنا أوسكار",
      title1: "بناء",
      title2: "تجارب رقمية",
      iAm: "أنا",
      role1: "مطور ويب.",
      role2: "مطور أندرويد.",
      role3: "مبرمج فول ستاك.",
      description:
        "أتخصص في إنشاء مواقع ويب حديثة وتطبيقات أندرويد أصلية. أجمع بين مرونة React وأداء Kotlin لتقديم منتجات تبدو رائعة وتعمل بسلاسة.",
      viewWork: "عرض أعمالي",
    },
    about: {
      title: "عن",
      titleAccent: "نفسي",
      paragraph1:
        "أنا طالب تكنولوجيا معلومات طموح أحول الشغف إلى كود احترافي. خلال العام الماضي، ركزت على بناء تطبيقات ويب وموبايل قابلة للتوسع تحل مشاكل حقيقية.",
      paragraph2:
        "أجمع بين التعليم التقني والنهج العملي القائم على المشاريع. أسترشد بمبادئ 'الكود النظيف' والرغبة في إتقان التقنيات الجديدة بسرعة. هدفي هو ربط المنطق الوظيفي بتجربة مستخدم سلسة.",
      skills: {
        frontend: {
          title: "نظام الواجهة الأمامية",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "تطبيقات الموبايل",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "اللغات الأساسية",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "أدوات التطوير",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "مشاريع",
      titleAccent: "مميزة",
      subtitle: "مجموعة من أفضل أعمالي على منصات الويب والموبايل.",
      filterAll: "جميع الأعمال",
      filterWebsites: "مواقع الويب",
      filterApps: "التطبيقات",
      categoryApp: "تطبيق",
      categoryWebsite: "موقع ويب",
      motivio: {
        description:
          "تطبيق للصحة النفسية والإنتاجية. يوفر متتبع المزاج، يوميات، تمارين التنفس، واقتباسات يومية ملهمة.",
      },
      code: "الكود",
      liveDemo: "عرض",
    },
    contact: {
      contactBadge: "تواصل معي",
      title1: "لنبني شيئًا",
      title2: "استثنائيًا",
      subtitle:
        "أبحث حاليًا عن فرص جديدة. سواء كان لديك سؤال أو تريد فقط أن تقول مرحبًا، صندوق بريدي مفتوح دائمًا.",
      emailCopied: "تم نسخ البريد الإلكتروني!",
      readyToPaste: "جاهز للصق",
      copyright: "جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      successTitle: "تم إرسال الرسالة!",
      successMessage: "شكرًا على التواصل. سأرد في أقرب وقت ممكن.",
      errorTitle: "خطأ في الإرسال",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.",
      close: "إغلاق",
      form: {
        nameLabel: "الاسم",
        namePlaceholder: "أحمد محمد",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "ahmed@example.com",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "طلب عرض أسعار / تعاون",
        messageLabel: "الرسالة",
        messagePlaceholder: "مرحبًا! أود مناقشة...",
        sendButton: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
      },
    },
  },
  hi: {
    nav: {
      about: "मेरे बारे में",
      projects: "परियोजनाएं",
      contact: "संपर्क",
    },
    hero: {
      greeting: "नमस्ते दुनिया, मैं ऑस्कर हूं",
      title1: "निर्माण",
      title2: "डिजिटल अनुभव",
      iAm: "मैं हूं",
      role1: "एक वेब डेवलपर।",
      role2: "एक एंड्रॉइड डेवलपर।",
      role3: "एक फुल स्टैक प्रोग्रामर।",
      description:
        "मैं आधुनिक वेबसाइट और नेटिव एंड्रॉइड एप्लिकेशन बनाने में विशेषज्ञ हूं। मैं React की लचीलापन और Kotlin के प्रदर्शन को मिलाकर ऐसे उत्पाद प्रदान करता हूं जो बेहतरीन दिखते हैं और सुचारू रूप से चलते हैं।",
      viewWork: "मेरा काम देखें",
    },
    about: {
      title: "मेरे",
      titleAccent: "बारे में",
      paragraph1:
        "मैं एक महत्वाकांक्षी IT छात्र हूं जो जुनून को पेशेवर कोड में बदल रहा हूं। पिछले एक साल से, मैं स्केलेबल वेब और मोबाइल एप्लिकेशन बनाने पर ध्यान केंद्रित कर रहा हूं जो वास्तविक समस्याओं को हल करते हैं।",
      paragraph2:
        "मैं तकनीकी शिक्षा को व्यावहारिक, परियोजना-आधारित दृष्टिकोण के साथ जोड़ता हूं। मैं 'क्लीन कोड' सिद्धांतों और नई तकनीकों में तेजी से महारत हासिल करने की इच्छा से प्रेरित हूं। मेरा लक्ष्य कार्यात्मक तर्क को सुचारू उपयोगकर्ता अनुभव से जोड़ना है।",
      skills: {
        frontend: {
          title: "फ्रंटएंड इकोसिस्टम",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "मोबाइल ऐप्स",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "मुख्य भाषाएं",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "डेव टूल्स",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "चुनिंदा",
      titleAccent: "परियोजनाएं",
      subtitle:
        "वेब और मोबाइल प्लेटफॉर्म पर मेरे सर्वश्रेष्ठ कार्यों का संग्रह।",
      filterAll: "सभी कार्य",
      filterWebsites: "वेबसाइट",
      filterApps: "ऐप्स",
      categoryApp: "ऐप",
      categoryWebsite: "वेबसाइट",
      motivio: {
        description:
          "मानसिक स्वास्थ्य और उत्पादकता के लिए एक ऐप। मूड ट्रैकर, डायरी, सांस लेने के व्यायाम और दैनिक प्रेरक उद्धरण प्रदान करता है।",
      },
      code: "कोड",
      liveDemo: "देखें",
    },
    contact: {
      contactBadge: "संपर्क करें",
      title1: "आइए कुछ बनाएं",
      title2: "असाधारण",
      subtitle:
        "मैं वर्तमान में नए अवसरों की तलाश में हूं। चाहे आपका कोई सवाल हो या बस नमस्ते कहना चाहते हों, मेरा इनबॉक्स हमेशा खुला है।",
      emailCopied: "ईमेल कॉपी हो गया!",
      readyToPaste: "पेस्ट करने के लिए तैयार",
      copyright: "सर्वाधिकार सुरक्षित।",
      privacyPolicy: "गोपनीयता नीति",
      termsOfService: "सेवा की शर्तें",
      successTitle: "संदेश भेज दिया गया!",
      successMessage:
        "संपर्क करने के लिए धन्यवाद। मैं जल्द से जल्द जवाब दूंगा।",
      errorTitle: "भेजने में त्रुटि",
      errorMessage: "कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें।",
      close: "बंद करें",
      form: {
        nameLabel: "नाम",
        namePlaceholder: "राज कुमार",
        emailLabel: "ईमेल",
        emailPlaceholder: "raj@example.com",
        subjectLabel: "विषय",
        subjectPlaceholder: "कोटेशन अनुरोध / सहयोग",
        messageLabel: "संदेश",
        messagePlaceholder: "नमस्ते! मैं चर्चा करना चाहूंगा...",
        sendButton: "संदेश भेजें",
        sending: "भेजा जा रहा है...",
      },
    },
  },
  nl: {
    nav: {
      about: "Over mij",
      projects: "Projecten",
      contact: "Contact",
    },
    hero: {
      greeting: "HALLO WERELD, IK BEN OSKAR",
      title1: "Bouwen aan",
      title2: "Digitale Ervaringen",
      iAm: "Ik ben",
      role1: "een Web Developer.",
      role2: "een Android Developer.",
      role3: "een Full Stack Programmeur.",
      description:
        "Ik specialiseer me in het maken van moderne websites en native Android-applicaties. Ik combineer de flexibiliteit van React met de prestaties van Kotlin om producten te leveren die er geweldig uitzien en soepel werken.",
      viewWork: "Bekijk mijn werk",
    },
    about: {
      title: "Over",
      titleAccent: "Mij",
      paragraph1:
        "Ik ben een ambitieuze IT-student die passie omzet in professionele code. Het afgelopen jaar heb ik me gericht op het bouwen van schaalbare Web- en Mobile-applicaties die echte problemen oplossen.",
      paragraph2:
        "Ik combineer technische opleiding met een praktische, projectgebaseerde aanpak. Ik word gedreven door 'clean code' principes en de wens om snel nieuwe technologieën onder de knie te krijgen. Mijn doel is om functionele logica te verbinden met een soepele gebruikerservaring.",
      skills: {
        frontend: {
          title: "Frontend Ecosysteem",
          desc: "React, Svelte, Tailwind CSS",
        },
        mobile: {
          title: "Mobiele Apps",
          desc: "Flutter, Dart, Android SDK",
        },
        languages: {
          title: "Kerntalen",
          desc: "TypeScript, JavaScript (ES6+), Dart, HTML5/CSS3",
        },
        tools: {
          title: "Dev Tools",
          desc: "Git, VS Code, Android Studio, NPM",
        },
      },
    },
    projects: {
      title: "Uitgelichte",
      titleAccent: "Projecten",
      subtitle:
        "Een verzameling van mijn beste werk op web- en mobiele platforms.",
      filterAll: "Al het Werk",
      filterWebsites: "Websites",
      filterApps: "Apps",
      categoryApp: "App",
      categoryWebsite: "Website",
      motivio: {
        description:
          "Een app voor mentale gezondheid en productiviteit. Biedt stemmingstracker, dagboek, ademhalingsoefeningen en dagelijkse inspirerende citaten.",
      },
      code: "Code",
      liveDemo: "Bekijken",
    },
    contact: {
      contactBadge: "Neem contact op",
      title1: "Laten we Iets",
      title2: "Buitengewoons Bouwen",
      subtitle:
        "Ik ben momenteel op zoek naar nieuwe kansen. Of je nu een vraag hebt of gewoon hallo wilt zeggen, mijn inbox staat altijd open.",
      emailCopied: "Email Gekopieerd!",
      readyToPaste: "Klaar om te plakken",
      copyright: "Alle rechten voorbehouden.",
      privacyPolicy: "Privacybeleid",
      termsOfService: "Servicevoorwaarden",
      successTitle: "Bericht Verzonden!",
      successMessage:
        "Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.",
      errorTitle: "Verzendfout",
      errorMessage: "Er is iets misgegaan. Probeer het later opnieuw.",
      close: "Sluiten",
      form: {
        nameLabel: "Naam",
        namePlaceholder: "Jan de Vries",
        emailLabel: "Email",
        emailPlaceholder: "jan@voorbeeld.nl",
        subjectLabel: "Onderwerp",
        subjectPlaceholder: "Offerte aanvraag / Samenwerking",
        messageLabel: "Bericht",
        messagePlaceholder: "Hallo! Ik zou graag willen bespreken...",
        sendButton: "Bericht verzenden",
        sending: "Verzenden...",
      },
    },
  },
};
