import PortfolioDAO from "../dao/portfolioDAO.js"

export default class PortfolioController {
    
    static async apiPostProject(req, res, next) {
        try {
            const projectName = req.body.project_name
            const text = req.body.text
            const gitLink = req.body.git_link
            const url = req.body.url
            const stack = req.body.stack

            const ProjectResponse = await PortfolioDAO.addProject(
                projectName,
                text,
                gitLink,
                url,
                stack,
            )
            res.json({ status: "success" })

        } catch (e) {
            res.status(500).json({ error: e.message }) 
        }    


    }

    static async apiGetProjects(req, res, next) {
        try {
            const ProjectsResponse = await PortfolioDAO.getProjects()
            res.json(ProjectsResponse)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }

        
    }

    static async apiDeleteProject(req, res, next) {
        try {
            const projectId  = req.body.project_id
            
            const portfolioResponse = await PortfolioDAO.deleteProject(projectId)
            res.json({ status: "success"})
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
        
    }
}