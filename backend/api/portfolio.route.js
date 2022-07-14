import express from "express"
import PortfolioController from "./portfolio.controller.js"

const router = express.Router()

router.route('/').get((req, res) => res.send("hello world"))

router
    .route('/projects')
        .get(PortfolioController.apiGetProjects)
        .post(PortfolioController.apiPostProject)

export default router