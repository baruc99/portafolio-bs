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
