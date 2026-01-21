const ProjectCard = ({ project }) => {
    return (
        <div
            className="project-card"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
        >
            <h3 className="project-title">{project.title}</h3>

            <p className="project-desc">{project.short_description}</p>

            <div className="tech-stack">
                {project.tech_stack.split(",").map((tech, index) => (
                    <span key={index}>{tech.trim()}</span>
                ))}
            </div>

            <div className="project-actions">
                {project.live_url && (
                    <a href={project.live_url} target="_blank">Live</a>
                )}
                {project.github_url && (
                    <a href={project.github_url} target="_blank">Code</a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
