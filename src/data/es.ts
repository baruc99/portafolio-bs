
import { sharedData } from "./shared";

export const es = {
    header: {
        name: "Baruc Alberto Gómez Sánchez",
        title: "Desarrollo Full Stack",
        subtitle: "Java, Angular & React",
        role: "Desarrollador Full Stack"
    },
    intro: {
        title: "¡Hola! Mi nombre es Baruc",
        description:
            "Acompáñame en mi trayectoria como Desarrollador Full Stack mientras creo soluciones innovadoras y resuelvo desafíos técnicos complejos."
    },
    projects: sharedData.projects.map((p) => ({
        ...p,
        ...(p.id === "Veracruz" && { title: "Sitio oficial de Veracruz", description: "La página oficial del Gobierno del Estado de Veracruz es un portal institucional que ofrece acceso a información gubernamental, trámites, noticias y servicios para la ciudadanía." }),
        ...(p.id === "ovh" && { title: "Oficina Virtual de Hacienda (OVH)", description: "La Oficina Virtual de Hacienda es una plataforma digital del Gobierno del Estado de Veracruz que permite a los ciudadanos realizar pagos electrónicos de impuestos estatales y federales coordinados. Además, ofrece servicios como validación de constancias fiscales, verificación de datos vehiculares, emisión de CFDI y atención a contribuyentes." }),
        ...(p.id === "marvel-app" && { title: "Marvel App", description: "Consulta de personajes de Marvel usando su API pública. Páginas responsivas creadas con Angular." }),
        ...(p.id === "landing-pages" && { title: "Landing Pages Freelance", description: "Sitios responsivos y optimizados para negocios locales. HTML, CSS, Bootstrap y WordPress." })
    })),
    services: sharedData.services.map(s => ({
        ...s,
        ...(s.key === "fullstack" && {
            title: "Desarrollo Full Stack",
            description: "Desarrollo de soluciones web completas, desde frontend atractivo hasta backend robusto.",
            details: [
                "APIs RESTful seguras",
                "React, Angular y Vue",
                "Spring Boot, NestJS y Node.js",
                "Diseño y desarrollo responsivo",
                "Bases de datos relacionales y no relacionales"
            ]
        }),
        ...(s.key === "devops" && {
            title: "Automatización & DevOps",
            description: "Automatización de tareas, despliegues y pruebas para mayor eficiencia y control.",
            details: [
                "CI/CD con Jenkins",
                "Control de versiones con Git",
                "Contenerización con Docker",
                "Análisis de calidad con SonarQube",
                "Scraping con Python y JS"
            ]
        })
    })),
    experiences: [
        {
            role: "Full Stack Developer",
            company: "IDS Comercial TI",
            location: "Ciudad de México",
            period: "Ago 2024 – Actualidad",
            description: `Refactoricé módulos críticos mejorando el rendimiento de aplicaciones Spring Boot y NestJS.
      Desarrollé interfaces dinámicas y responsivas con React, optimizando la experiencia del usuario.
      Implementé integración y entrega continua (CI/CD) con Jenkins, reduciendo tiempos de despliegue.
      Utilicé SonarQube para análisis estático de código, disminuyendo errores en producción.
      Documenté procesos técnicos y funcionales en Confluence, mejorando la colaboración y trazabilidad.
      Trabajé con equipos ágiles mediante Jira, entregando productos funcionales al final de cada sprint.
      Gestioné repositorios en GitHub siguiendo buenas prácticas de versionado y revisiones de código.`,
            stack: "Spring Boot, React, NestJS, GitHub, Jenkins, SonarQube, Jira, Confluence"
        },
        {
            role: "Desarrollador de Software",
            company: "Secretaría de Finanzas y Planeación",
            location: "Xalapa, Veracruz",
            period: "Abr 2022 – Ago 2024",
            description: `Migré sistemas monolíticos a microservicios en Java, mejorando escalabilidad y mantenibilidad.
      Desarrollé la app móvil 'Infracción Digital' con Android Studio y BBVA SDK.
      Administré bases de datos SQL, garantizando integridad y rendimiento.
      Creé sitios web institucionales con WordPress para informes de gobierno y eventos.
      Participé en el rediseño de portales estatales, optimizando accesibilidad y experiencia de usuario.
      Desarrollé y mantuve APIs RESTful y configuré repositorios en GitLab.`,
            stack: "Angular, Java, Oracle, PHP, WordPress, HTML, CSS, JavaScript, GitLab"
        },
        {
            role: "Desarrollador de Software",
            company: "Dropmania",
            location: "Xalapa, Veracruz",
            period: "Ene 2022 – Abr 2022",
            description: `Automatización de scraping de productos, reduciendo carga manual en un 90%.
      Mantuve APIs con Node.js y PHP.
      Desarrollé interfaces web intuitivas y atractivas con HTML, CSS y JS.
      Experimenté con SwiftUI para aplicaciones móviles en iOS.
      Implementé backups automáticos y recuperación de datos para continuidad operativa.`,
            stack: "HTML, CSS, JavaScript, Node.js, PHP, MySQL, Socket.IO, Swift"
        },
        {
            role: "Desarrollador Web",
            company: "Instituto Tecnológico Superior de Xalapa",
            location: "Xalapa, Veracruz",
            period: "Ene 2021 – Jul 2021",
            description: `Implementé un sistema de chat en tiempo real con Node.js, MongoDB y Socket.IO.
      Gestioné autenticación de usuarios y persistencia de mensajes.`,
            stack: "Node.js, MongoDB, Socket.IO, HTML, CSS, JavaScript"
        },
        {
            role: "Desarrollador Freelance",
            company: "",
            location: "",
            period: "2021 – Actualidad",
            description: `Diseño de landing pages personalizadas y adaptables.
      Automatización de procesos con scraping en Python y JS.
      Contenerización de proyectos con Docker.
      Mantenimiento y actualización de sistemas web en producción.`,
            stack: "HTML, CSS, JavaScript, Python, Docker, Node.js, MongoDB"
        }
    ],
    about: {
        description: "Desarrollador de software con más de 4 años de experiencia creando soluciones web y móviles. Experto en Java, Spring Boot, Angular y React. Con conocimientos en migración a microservicios, desarrollo de APIs RESTful, integración y entrega continua, control de calidad con SonarQube y metodologías ágiles.",
        skills: sharedData.about.skills,
        education: sharedData.about.education
    },
    contact: {
        ...sharedData.contact,
        location: sharedData.contact.location.es,
        availability: "Disponible para nuevas oportunidades"
    },
    social: sharedData.social
};