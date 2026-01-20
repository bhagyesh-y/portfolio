import { useEffect, useState } from "react";
import { fetchProjects } from "../api/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(res => setProjects(res.data));
    }, []);

    return (
        <section className="projects-grid">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
    );
};

export default Projects;
