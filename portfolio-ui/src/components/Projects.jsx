const Projects = () => {
    const projects = [
        {
            title: 'Sridevi Portfolio',
            description:
                'A full-stack portfolio application built to showcase my professional experience, technical skills, and software development capabilities. The application demonstrates backend API development, database integration, frontend development, and cloud-ready architecture.',
            technologies: [
                'C#',
                '.NET 10',
                'ASP.NET Core',
                'React',
                'SQL Server',
                'Entity Framework Core',
                'REST APIs',
                'Azure',
            ],
            capabilities: [
                'REST API Development',
                'Database Integration',
                'CRUD Operations',
                'Entity Framework Core',
                'Dependency Injection',
                'Exception Handling',
                'API Documentation',
                'Frontend API Integration',
            ],
            status: 'Personal Project',
        },
        {
            title: 'Rotary netFORUM – Enterprise Applications & Integrations',
            description:
                'Enterprise application development and integration work within the Rotary netFORUM ecosystem, involving backend APIs, frontend integration, database operations, Azure services, third-party integrations, application monitoring, and production troubleshooting.',
            technologies: [
                'C#',
                'ASP.NET Core',
                'React',
                'SQL Server',
                'Entity Framework Core',
                'Azure',
                'Azure Service Bus',
                'Application Insights',
                'REST APIs',
                'Worldline',
            ],
            capabilities: [
                'Backend API Development',
                'REST API Integration',
                'Third-Party Service Integration',
                'Worldline Payment Services',
                'Events & netFORUM Integration',
                'Database Development',
                'SQL Query Development',
                'Production Troubleshooting',
                'Application Monitoring',
                'Azure Service Integration',
                'API Testing',
                'Production Issue Analysis',
            ],
            status: 'Professional Experience',
        },
    ]

    return (
        <section id="projects" className="section">
            <div className="section-container">
                <p className="section-label">PROJECTS</p>

                <h2>Things I've built and worked on.</h2>

                <p className="section-description">
                    A selection of personal and professional work demonstrating my
                    experience in backend development, frontend applications, databases,
                    cloud services, enterprise integrations, and production support.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-header">
                                <div>
                                    <h3>{project.title}</h3>

                                    <span className="project-status">
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="project-section">
                                <h4>Technologies</h4>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-section">
                                <h4>What I worked on</h4>

                                <div className="project-capabilities">
                                    {project.capabilities.map((capability) => (
                                        <span key={capability}>{capability}</span>
                                    ))}
                                </div>
                            </div>

                            {project.status === 'Personal Project' && (
                                <div className="project-links">
                                    <a
                                        href="#"
                                        className="project-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub →
                                    </a>

                                    <a href="#" className="project-link">
                                        Live Demo →
                                    </a>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects