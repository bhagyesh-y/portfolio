import api from "./axios";

export const fetchProjects = () => api.get("/projects/");
export const fetchFeaturedProjects = () => api.get("/projects/featured/");
