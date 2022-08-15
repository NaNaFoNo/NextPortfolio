import express from "express"
import PortfolioController from "./portfolio.controller.js"
import BlogController from "./blog.controller.js"
import GitController from "./githubAPI.js"

const router = express.Router()

router.route('/').get((req, res) => res.send("hello world"))

router
    .route('/projects')
        .get(PortfolioController.apiGetProjects)
        .post(PortfolioController.apiPostProject)
        .put(PortfolioController.apiUpdateProject)
        .delete(PortfolioController.apiDeleteProject)

router
    .route('/blogs').get(BlogController.apiGetBlogs)
router
    .route('/github').get(GitController.apiGetProjectInfo)

export default router