import { useEffect, useState } from "react";
import { fetchProjects } from "../api/projects";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(res => setProjects(res.data));
    }, []);

    return (
        <section className="projects-grid">
            <SEO
                title="Projects | Bhagyesh"
                description="Explore full stack projects built using React, Django, and REST APIs."
            />
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
    );
};

export default Projects;
