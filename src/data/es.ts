
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
        ...(p.id === "task-manager" && { title: "Gestor de Tareas (App Full Stack)", description: "Aplicación para gestión de tareas con autenticación, roles, y CRUD. Backend en Laravel y frontend con React." }),
        ...(p.id === "condo-system" && { title: "Sistema de Administración de Condominios", description: "API REST con autenticación y códigos QR para administración de invitados, construida con Node y PostgreSQL." }),
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