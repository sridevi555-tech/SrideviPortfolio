const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="section-container">
                <p className="section-label">EXPERIENCE</p>

                <h2>Professional experience.</h2>

                <div className="experience-card">
                    <div className="experience-header">
                        <div>
                            <h3>Associate Software Engineer</h3>
                            <p className="experience-company">
                                Accion Technologies Private Limited
                            </p>
                        </div>

                        <div className="experience-duration">
                            Aug 2024 – Present
                        </div>
                    </div>

                    <p className="experience-description">
                        Working on enterprise web applications and backend services,
                        contributing across application development, API integration,
                        database operations, troubleshooting, and production support.
                    </p>

                    <ul className="experience-list">
                        <li>
                            Developed and maintained backend functionality using C#,
                            ASP.NET Core, and REST APIs.
                        </li>

                        <li>
                            Worked with React for frontend development and integration with
                            backend APIs.
                        </li>

                        <li>
                            Developed and worked with SQL Server queries, stored procedures,
                            views, and database operations.
                        </li>

                        <li>
                            Worked with Entity Framework Core, LINQ, dependency injection,
                            and application-level business logic.
                        </li>

                        <li>
                            Worked with Azure services including Azure App Service,
                            Application Insights, and Azure Service Bus.
                        </li>

                        <li>
                            Investigated application and production issues using logs,
                            debugging, SQL analysis, and monitoring tools.
                        </li>

                        <li>
                            Collaborated with team members in an Agile/Scrum development
                            environment and participated in development, testing, and issue
                            resolution activities.
                        </li>
                    </ul>

                    <div className="experience-tech">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>ASP.NET Core</span>
                        <span>React</span>
                        <span>SQL Server</span>
                        <span>Entity Framework Core</span>
                        <span>Azure</span>
                        <span>Azure DevOps</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience