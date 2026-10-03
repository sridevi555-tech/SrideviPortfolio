const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-availability">
                        <span className="availability-dot"></span>
                        Open to new opportunities
                    </div>

                    <p className="hero-greeting">Hi, I'm</p>

                    <h1>Sridevi Peddireddy</h1>

                    <h2>.NET Full Stack Developer</h2>

                    <p className="hero-description">
                        .NET Full Stack Developer with 2+ years of experience
                        building and supporting enterprise web applications
                        using C#, ASP.NET Core, React, SQL Server, and Azure.
                    </p>

                    <p className="hero-description">
                        I work across backend APIs, frontend development,
                        databases, cloud services, third-party integrations,
                        and production troubleshooting.
                    </p>

                    <div className="hero-skills">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>ASP.NET Core</span>
                        <span>React</span>
                        <span>SQL Server</span>
                        <span>Azure</span>
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>

                        <a
                            href="/Sridevi-Peddireddy-Resume.pdf"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Resume
                        </a>

                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero