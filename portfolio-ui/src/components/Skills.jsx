const Skills = () => {
    const skillCategories = [
        {
            title: 'Backend',
            skills: [
                'C#',
                '.NET',
                'ASP.NET Core',
                'Web API',
                'Entity Framework Core',
                'LINQ',
                'ADO.NET',
                'REST APIs',
                'Dependency Injection',
                'JWT Authentication',
            ],
        },
        {
            title: 'Frontend',
            skills: [
                'React',
                'JavaScript',
                'HTML5',
                'CSS3',
                'JSX',
                'React Hooks',
                'API Integration',
                'Responsive Design',
            ],
        },
        {
            title: 'Database',
            skills: [
                'SQL Server',
                'T-SQL',
                'Stored Procedures',
                'Views',
                'Functions',
                'Joins',
                'Transactions',
                'EF Core Migrations',
            ],
        },
        {
            title: 'Cloud & DevOps',
            skills: [
                'Microsoft Azure',
                'Azure App Service',
                'Azure Service Bus',
                'Application Insights',
                'Azure DevOps',
                'GitHub Actions',
                'CI/CD',
            ],
        },
        {
            title: 'Engineering & Tools',
            skills: [
                'Git',
                'GitHub',
                'Visual Studio',
                'Postman',
                'Swagger / OpenAPI',
                'SSMS',
                'SOLID Principles',
                'Clean Architecture',
                'Exception Handling',
                'Logging',
            ],
        },
    ]

    return (
        <section id="skills" className="section">
            <div className="section-container">
                <p className="section-label">TECHNICAL SKILLS</p>

                <h2>Technologies and tools I work with.</h2>

                <p className="section-description">
                    My technical experience spans backend development, frontend
                    applications, databases, cloud services, and software engineering
                    practices.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <div className="skill-category" key={category.title}>
                            <h3>{category.title}</h3>

                            <div className="skill-list">
                                {category.skills.map((skill) => (
                                    <span className="skill-tag" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills