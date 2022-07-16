import http from "./http.common";

class ProjectsDataService {
    getAll() {
        return http.get();
    }

}

export default new ProjectsDataService();