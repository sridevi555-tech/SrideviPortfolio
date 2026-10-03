const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Sridevi Peddireddy. All rights reserved.
                </p>

                <div className="footer-links">
                    <a
                        href="https://github.com/sridevi555-tech/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sridevi-peddireddy-22b434249/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="#home">Back to top ↑</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer