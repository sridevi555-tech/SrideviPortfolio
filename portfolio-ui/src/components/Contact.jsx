const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="section-container contact-container">
                <p className="section-label">CONTACT</p>

                <h2>Let's connect.</h2>

                <p className="section-description contact-description">
                    I'm open to opportunities in .NET Full Stack Development and
                    interested in working on challenging applications, integrations,
                    and backend systems. Feel free to reach out or connect with me.
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:sridevireddy405@gmail.com"
                        className="contact-card"
                    >
                        <span className="contact-label">Email</span>
                        <span className="contact-value">
                            sridevireddy405@gmail.com
                        </span>
                    </a>

                    <a
                        href="tel:+917093845351"
                        className="contact-card"
                    >
                        <span className="contact-label">Phone</span>
                        <span className="contact-value">
                            +91 7093845351
                        </span>
                    </a>

                    <a
                        href="https://github.com/sridevi555-tech/"
                        className="contact-card"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-label">GitHub</span>
                        <span className="contact-value">
                            github.com/sridevi555-tech
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sridevi-peddireddy-22b434249/"
                        className="contact-card"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-label">LinkedIn</span>
                        <span className="contact-value">
                            LinkedIn Profile
                        </span>
                    </a>
                    <a
                        href="/Sridevi-Peddireddy-Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-resume"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact