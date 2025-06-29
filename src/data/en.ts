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
    ...(p.id === "task-manager" && { title: "Task Manager (Full Stack App)", description: "Task management app with authentication, user roles, and CRUD. Backend in Laravel, frontend in React." }),
    ...(p.id === "condo-system" && { title: "Condominium Management System", description: "REST API with authentication and QR codes for guest control, built with Node and PostgreSQL." }),
    ...(p.id === "marvel-app" && { title: "Marvel App", description: "Character search using Marvel's public API. Responsive pages built with Angular." }),
    ...(p.id === "landing-pages" && { title: "Freelance Landing Pages", description: "Responsive, optimized websites for local businesses using HTML, CSS, Bootstrap and WordPress." })
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
