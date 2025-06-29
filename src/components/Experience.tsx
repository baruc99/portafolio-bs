import React from 'react';

const Experience: React.FC = () => {
    return (
        <section className="scroll-trigger py-20 px-6 bg-gray-900">
            <h2 className="text-3xl font-bold mb-8">Experiencia Profesional</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold">Full Stack Developer - IDS</h3>
                    <p className="text-sm text-gray-400">2023 - Actualidad</p>
                    <p>Desarrollo con Spring Boot, React y NestJS. Participación en análisis de código y uso de Jira para seguimiento de tareas.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Desarrollador Web - Dropmania</h3>
                    <p className="text-sm text-gray-400">2022 - 2023</p>
                    <p>Implementación de funcionalidades en Angular y PHP. Mantenimiento y soporte a plataforma e-commerce.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Backend Developer - Secretaría de Finanzas</h3>
                    <p className="text-sm text-gray-400">2020 - 2022</p>
                    <p>Desarrollo de APIs REST con Java y Oracle, gestión de incidencias y procesos fiscales internos.</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;