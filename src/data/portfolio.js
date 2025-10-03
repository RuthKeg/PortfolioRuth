// src/data/portfolio.js
const portfolio = {
  meta: {
    name: "Ruth Kegmo",
    title: "Étudiante en Technologie de l'informatique",
    tagline:
      "J'ai acquis des bases solides en développement logiciel, gestion de données et de réseaux, ainsi qu'en support technique. Mon objectif est de mettre ces acquis en pratique pour développer mon expertise terrain et contribuer efficacement en milieu professionnel.",
    email: "ruthkegmo8@gmail.com",
    github: "https://github.com/RuthKeg/",
    linkedin: "https://www.linkedin.com/in/ruth-kegmo-b750932b7/",
  },

  projects: [
    {
      title: "AzerType",
      description:
        "Premier projet conçu pour aider ma sœur de 7 ans à apprendre la saisie au clavier.",
      tech: ["HTML", "JavaScript", "CSS"],
      repo: "https://github.com/ruthkeg/azertype",
      img: "/src/assets/pictures/azertype.png",
      demo: "https://ruthkeg.github.io/AzerType/", 
    },
    {
      title: "MaClinique",
      description:
        "Application WinForms sur 3 couches avec .NET pour gérer une clinique complète : patients, rendez-vous, rapports, horaires des médecins et historiques.",
      tech: [".NET", "C#", "SQL Server"],
      repo: "https://github.com/ruthkegmo/winform-clinique",
      img: "/src/assets/pictures/clinique.png",
      demo: "https://bold.pro/my/ruth-kegmo", 
    },
    {
      title: "Déploiement d'un réseau local",
      description:
        "Mise en place d'un réseau LAN avec configuration de serveurs et clients.",
      tech: ["Réseaux", "TCP/IP", "Cisco"],
      repo: "https://github.com/ruthkegmo/lan-deployment",
      img: "/src/assets/pictures/network.png",
    },
    {
      title: "QuizzzVerse",
      description:
        "Application pour créer ou passer des quiz, générer des scores et gérer l'historique.",
      tech: ["Java", "SpringBoot", "React"],
      repo: "https://github.com/ruthkegmo/quiz-app",
      img: "/src/assets/pictures/quiz.png",
      demo: "https://ton-compte.github.io/ecommerce-app",
    },
    {
      title: "Application mobile (en cours)",
      description:
        "Application mobile en cours de développement utilisant la stack Java.",
      tech: ["Java", "Android"],
      repo: "https://github.com/ruthkegmo/mobile-app",
      img: "/src/assets/pictures/mobile.png",
      demo: "https://ton-compte.github.io/ecommerce-app",
    },
    {
      title: "Keg-Merce",
      description:
        "Application web pour gérer un magasin : produits, employés, stocks, et ventes",
      tech: ["Python", "Flask", "React"],
      repo: "https://github.com/ruthkegmo/flask-ecommerce",
      img: "/src/assets/pictures/ecommerce.png",
      demo: "https://ton-compte.github.io/ecommerce-app",
    },
  ],

  skills: {
    Langages: ["Python", "Java", "C#", "ASP.NET MVC", "SQL"],
    Bases_de_donnees: ["SQL Server", "MySQL"],
    Web: ["HTML", "CSS", "JavaScript"],
    Outils: [
      "VS Code",
      "CISCO",
      "Jupyter",
      "Visual Studio 2022",
      "Git/GitHub",
      "Microsoft Office 365",
      "Jira",
      "PowerBI",
    ],
    Frameworks: ["Flask", "React", "SpringBoot", "Django", ".NET"],
    Reseaux: ["TCP/IP", "Configuration routeurs et commutateurs"],
    Systemes: ["Windows", "macOS", "Linux"],
  },

  formation: [
    {
      institution: "College LaSalle",
      lieu: "Montréal, Québec",
      periode: "08/2023 - 06/2026",
      diplome: "DEC : Techniques de l'informatique",
      details:
        "Programme axé sur la programmation, l'administration de réseaux, et la gestion de systèmes informatiques.",
    },
    {
      institution: "ENSPD Douala",
      lieu: "Douala, Cameroun",
      periode: "09/2021 - 05/2023",
      diplome: "Baccalauréat : Génie logiciel",
      details:
        "Études orientées vers l'analyse, la conception et l'optimisation de solutions logicielles.",
    },
  ],

  langues: {
    Français: "Langue maternelle",
    Anglais: "Bilingue",
  },

  experience: [
    {
      role: "Stagiaire analyste programmeur",
      entreprise: "RoboticFirst",
      lieu: "Montréal, Québec",
      periode: "05/2025 - 08/2025",
      missions: [
        "Optimiser les requêtes SQL Server pour réduire le temps de génération des rapports.",
        "Développer des scripts Python pour automatiser le nettoyage de données.",
        "Tests unitaires et rédaction de documentation technique en collaboration avec l'équipe",
        "Soutien à la maintenance corrective et évolutive des applications existantes"

      ],
    },
    {
      role: "Stagiaire support informatique",
      entreprise: "Groupe Yellow",
      lieu: "Montréal, Québec",
      periode: "05/2024 - 08/2024",
      missions: [
        "Supporter les utilisateurs des logiciels commerciaux utilisés en magasin.",
        "Installer et configurer les équipements informatiques pour les logiciels et programmes utilitaires.",
        "Participer à l'implantation et à la mise à jour des réseaux.",
        "Developper, documenter et tester les procédures destinées aux utilisateurs et participer a leur formation sur les produits informatiques",
        "Effectuer les réparations mineures et rapporter les défectuosités majeures à des ressources externes"
      ],
    },
  ],
};

export default portfolio;
