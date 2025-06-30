import { sharedData } from "./shared";

export const en = {
  header: {
    name: "Baruc Alberto Gómez Sánchez",
    title: "Full Stack Development",
    subtitle: "Java, Angular & React",
    role: "Full Stack Developer"
  },
  intro: {
    title: "Hi there, my name is Baruc!",
    description:
      "Join me on my journey as a Full Stack Developer as I create innovative solutions and solve complex technical challenges."
  },
  projects: sharedData.projects.map((p) => ({
    ...p,
    ...(p.id === "Veracruz" && {
      title: "Official Website of Veracruz",
      description: "The official website of the Government of the State of Veracruz is an institutional portal that provides access to government information, procedures, news, and citizen services."
    }),
    ...(p.id === "ovh" && {
      title: "Virtual Tax Office (OVH)",
      description: "The Virtual Tax Office is a digital platform from the Government of the State of Veracruz that allows citizens to make electronic payments of state and federally coordinated taxes. It also offers services such as validation of tax certificates, vehicle data verification, CFDI issuance, and taxpayer support."
    }),
    ...(p.id === "cuartoinformedegobierno" && {
      title: "Fourth Government Report – Veracruz",
      description: "This microsite is part of the official portal of the Government of the State of Veracruz and is dedicated to presenting the Fourth Government Report for the 2021–2022 period. Its purpose is to ensure transparency in public administration, showcase progress in social, economic, and infrastructure policies, and be accountable to citizens."
    }),
    ...(p.id === "quintoinformedegobierno" && {
      title: "Fifth Government Report – Veracruz",
      description: "This microsite is part of the official portal of the Government of the State of Veracruz and presents the Fifth Government Report of Governor Cuitláhuac García Jiménez. Its aim is to inform citizens about progress, public works, and actions taken during the fiscal year, with an emphasis on health, infrastructure, education, and social development."
    }),
    ...(p.id === "sextoinformedegobierno" && {
      title: "Sixth Government Report – Veracruz",
      description: "This site is part of the official portal of the Government of the State of Veracruz and presents the Sixth Report of Results from Governor Cuitláhuac García Jiménez. Its goal is to document and ensure transparency regarding the works, programs, and actions carried out over six years of administration, in a visual and accessible format."
    }),
    ...(p.id === "wtc" && {
      title: "World Trade Center Veracruz",
      description: "The World Trade Center Veracruz is a world-class venue affiliated with the World Trade Center Association (WTCA), designed to host congresses, conventions, exhibitions, and corporate events. Located in Boca del Río, Veracruz, this center is part of a global network of over 300 WTCs in 100 countries, committed to promoting trade, investment, and technological and cultural exchange."
    }),
  })),
  services: sharedData.services.map(s => ({
    ...s,
    ...(s.key === "fullstack" && {
      title: "Full Stack Development",
      description: "End-to-end web development, from modern frontend to scalable backend.",
      details: [
        "Secure RESTful APIs",
        "React, Angular, and Vue",
        "Spring Boot, NestJS, and Node.js",
        "Responsive design & implementation",
        "Relational & NoSQL databases"
      ]
    }),
    ...(s.key === "devops" && {
      title: "Automation & DevOps",
      description: "Task automation, continuous integration, and quality control for efficient delivery.",
      details: [
        "CI/CD with Jenkins",
        "Version control with Git",
        "Docker containerization",
        "Code quality with SonarQube",
        "Scraping with Python & JS"
      ]
    })
  })),
  experiences: [
    {
      role: "Full Stack Developer",
      company: "IDS Comercial TI",
      location: "Mexico City",
      period: "Aug 2024 – Present",
      description: `Refactored critical modules improving performance of Spring Boot and NestJS applications.
  Built dynamic and responsive interfaces with React, enhancing user experience.
  Implemented CI/CD with Jenkins, reducing deployment times.
  Used SonarQube for static code analysis, decreasing production bugs.
  Documented technical and functional processes in Confluence to improve collaboration.
  Worked in agile teams using Jira, delivering working products every sprint.
  Managed GitHub repositories following version control and code review best practices.`,
      stack: "Spring Boot, React, NestJS, GitHub, Jenkins, SonarQube, Jira, Confluence"
    },
    {
      role: "Software Developer",
      company: "Secretaría de Finanzas y Planeación",
      location: "Xalapa, Veracruz",
      period: "Apr 2022 – Aug 2024",
      description: `Migrated monolithic systems to microservices in Java, improving scalability and maintainability.
  Developed the mobile app 'Infracción Digital' with Android Studio and BBVA SDK.
  Managed SQL databases ensuring data integrity and performance.
  Created institutional websites with WordPress for government reports and events.
  Participated in the redesign of state portals, enhancing accessibility and UX.
  Developed and maintained RESTful APIs and configured GitLab repositories.`,
      stack: "Angular, Java, Oracle, PHP, WordPress, HTML, CSS, JavaScript, GitLab"
    },
    {
      role: "Software Developer",
      company: "Dropmania",
      location: "Xalapa, Veracruz",
      period: "Jan 2022 – Apr 2022",
      description: `Automated product scraping, reducing manual workload by 90%.
  Maintained APIs with Node.js and PHP.
  Developed intuitive and attractive web interfaces using HTML, CSS, and JS.
  Experimented with SwiftUI for iOS mobile apps.
  Implemented automatic backups and recovery for operational continuity.`,
      stack: "HTML, CSS, JavaScript, Node.js, PHP, MySQL, Socket.IO, Swift"
    },
    {
      role: "Web Developer",
      company: "Instituto Tecnológico Superior de Xalapa",
      location: "Xalapa, Veracruz",
      period: "Jan 2021 – Jul 2021",
      description: `Implemented a real-time chat system using Node.js, MongoDB, and Socket.IO.
  Handled user authentication and message persistence.`,
      stack: "Node.js, MongoDB, Socket.IO, HTML, CSS, JavaScript"
    },
    {
      role: "Freelance Developer",
      company: "",
      location: "",
      period: "2021 – Present",
      description: `Designed responsive and custom landing pages.
  Automated processes with scraping using Python and JS.
  Containerized projects with Docker.
  Maintained and updated production web systems.`,
      stack: "HTML, CSS, JavaScript, Python, Docker, Node.js, MongoDB"
    }
  ],
  about: {
    description: "Software developer with over 4 years of experience building web and mobile solutions. Skilled in Java, Spring Boot, Angular, and React. Experienced in microservices migration, RESTful API development, CI/CD, code quality control with SonarQube, and Agile methodologies.",
    skills: sharedData.about.skills,
    education: sharedData.about.education
  },
  contact: {
    ...sharedData.contact,
    location: sharedData.contact.location.en,
    availability: "Open to new opportunities"
  },
  social: sharedData.social
};
