export type Language = "pl" | "en" | "de" | "fr" | "es";

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
    title1: string;
    title2: string;
    subtitle: string;
    emailCopied: string;
    readyToPaste: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
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
      title1: "Zbudujmy Coś",
      title2: "Niezwykłego",
      subtitle:
        "Obecnie szukam nowych możliwości. Niezależnie od tego, czy masz pytanie, czy po prostu chcesz się przywitać, moja skrzynka jest zawsze otwarta.",
      emailCopied: "Email Skopiowany!",
      readyToPaste: "Gotowy do wklejenia",
      copyright: "Wszelkie prawa zastrzeżone.",
      privacyPolicy: "Polityka Prywatności",
      termsOfService: "Warunki Usługi",
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
      title1: "Let's Build Something",
      title2: "Extraordinary",
      subtitle:
        "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
      emailCopied: "Email Copied!",
      readyToPaste: "Ready to paste",
      copyright: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
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
      title1: "Lass uns etwas",
      title2: "Außergewöhnliches schaffen",
      subtitle:
        "Ich suche derzeit nach neuen Möglichkeiten. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, mein Posteingang ist immer offen.",
      emailCopied: "E-Mail kopiert!",
      readyToPaste: "Bereit zum Einfügen",
      copyright: "Alle Rechte vorbehalten.",
      privacyPolicy: "Datenschutz",
      termsOfService: "Nutzungsbedingungen",
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
      title1: "Créons Quelque Chose",
      title2: "d'Extraordinaire",
      subtitle:
        "Je recherche actuellement de nouvelles opportunités. Que vous ayez une question ou que vous vouliez simplement dire bonjour, ma boîte de réception est toujours ouverte.",
      emailCopied: "E-mail copié !",
      readyToPaste: "Prêt à coller",
      copyright: "Tous droits réservés.",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
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
      title1: "Construyamos Algo",
      title2: "Extraordinario",
      subtitle:
        "Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, mi bandeja de entrada siempre está abierta.",
      emailCopied: "¡Correo copiado!",
      readyToPaste: "Listo para pegar",
      copyright: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
    },
  },
};
