const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <p className="section-label">ABOUT ME</p>

        <h2>Building reliable web applications with modern technologies.</h2>

        <p className="section-description">
          I'm a .NET Full Stack Developer with 2+ years of experience
          working on web applications and enterprise solutions. My
          experience includes backend development with C# and ASP.NET Core,
          frontend development with React, database development with SQL
          Server, and cloud technologies with Azure.
        </p>

        <p className="section-description">
          I enjoy solving real-world problems, working with APIs and
          databases, troubleshooting production issues, and continuously
          improving my development skills.
        </p>

        <div className="about-details">
          <div>
            <span>Location</span>
            <strong>Hyderabad, India</strong>
          </div>

          <div>
            <span>Experience</span>
            <strong>2+ Years</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>.NET Full Stack Developer</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

