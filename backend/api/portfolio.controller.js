import PortfolioDAO from "../dao/portfolioDAO.js"

export default class PortfolioController {
    
    static async apiPostProject(req, res, next) {
        try {
            const projectName = req.body.project_name
            
            const ProjectResponse = await PortfolioDAO.addProject(projectName)
            res.json({ status: "success" })

        } catch (e) {
            res.status(500).json({ error: e.message }) 
        }    


    }
}