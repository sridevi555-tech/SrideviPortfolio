const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    Sridevi Peddireddy
                </a>

                <div className="navbar-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="navbar-actions">
                    <a
                        href="https://github.com/sridevi555-tech/"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-social"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sridevi-peddireddy-22b434249/"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-social"
                    >
                        LinkedIn
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
        </nav>
    )
}

export default Navbar