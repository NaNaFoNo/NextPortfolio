import PortfolioDAO from "../dao/portfolioDAO.js"
import GitController from "./githubAPI.js"
import { Octokit } from "@octokit/core"
import dotenv from 'dotenv'
dotenv.config()

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default class PortfolioController {

    static async apiGetProjects(req, res, next) {
        try {
            const ProjectsResponse = await PortfolioDAO.getProjects()
            
            res.json(ProjectsResponse)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }

        
    }
    
    static async apiPostProject(req, res, next) {
        try {
            const projectName = req.body.project_name
            const Git = await GitController.apiGetProjectInfo(req.body.project_name)

            const projectDoc = {
                name: projectName,
                description: Git.data.description,
                git_url: Git.data.html_url,
                homepage_url: Git.data.homepage,
                topics: Git.data.topics,
                created: Git.data.created_at,
                updated: Git.data.updated_at
            }

            const ProjectResponse = await PortfolioDAO.addProject(projectDoc)

            res.json({ status: "success" })

        } catch (e) {
            res.status(500).json({ error: e.message }) 
        }    
    }

    static async apiUpdateProject(req, res, next) {
        try {
            const projectId  = req.body.project_id
            const data = req.body.data
            console.log(data)
            const ProjectsResponse = await PortfolioDAO.updateProject(projectId, data)
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