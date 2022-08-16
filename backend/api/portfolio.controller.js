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
            const image_url = req.body.image_url
            const GitRepo = await GitController.apiGetProjectInfo(projectName)
            const GitLang = await GitController.apiGetRepoLanguages(projectName)
            

            const projectDoc = {
                name: projectName,
                image_url: image_url,
                description: GitRepo.data.description,
                git_url: GitRepo.data.html_url,
                homepage_url: GitRepo.data.homepage,
                topics: GitRepo.data.topics,
                languages: GitLang.data,
                created: GitRepo.data.created_at,
                updated: GitRepo.data.updated_at,  
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