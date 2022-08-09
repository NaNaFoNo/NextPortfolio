import http from "./http.common";

class ProjectsDataService {
    getAllProjects() {
        return http.get("/projects");
    }
    getAllBlogs() {
        return http.get("/blogs");
    }

}

export default new ProjectsDataService();