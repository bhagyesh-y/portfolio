import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { fetchFeaturedProjects } from "../api/projects";


const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchFeaturedProjects()
            .then((res) => setProjects(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="home">

            {/* HERO */}
            <section className="home-hero">
                <h1>
                    Hi, I’m <span>Bhagyesh</span>
                </h1>

                <h2>Full Stack Developer (React + Django)</h2>

                <p>
                    I build clean, scalable web applications with modern frontend
                    experiences and robust backend architectures.
                </p>

                <div className="hero-actions">
                    <Link to="/projects" className="btn-primary">
                        View Projects
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section className="home-projects">
                <h3 className="section-title">Featured Projects</h3>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="section-link">
                    <Link to="/projects">View all projects →</Link>
                </div>
            </section>

            {/* SKILLS */}
            <section className="home-skills">
                <h3 className="section-title">Skills</h3>

                <div className="skills-grid">
                    <div>
                        <h4>Frontend</h4>
                        <p>React, JavaScript, HTML, CSS</p>
                    </div>

                    <div>
                        <h4>Backend</h4>
                        <p>Python, Django, Django REST Framework</p>
                    </div>

                    <div>
                        <h4>Database & Tools</h4>
                        <p>PostgreSQL, SQLite, Git, GitHub, REST APIs</p>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="home-about">
                <h3 className="section-title">About Me</h3>

                <p>
                    I’m a Computer Science graduate with hands-on experience in building
                    full-stack web applications. I enjoy working on backend logic, APIs,
                    and creating clean, user-focused frontend interfaces.
                </p>
            </section>

            {/* CTA */}
            <section className="home-cta">
                <h3>Interested in working together?</h3>
                <Link to="/contact" className="btn-primary">
                    Let’s Talk
                </Link>
            </section>

        </div>
    );
};

export default Home;
