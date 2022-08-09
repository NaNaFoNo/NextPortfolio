import express from "express"
import BlogController from "./blog.controller.js"

const router = express.Router()

router.route('/').get((req, res) => res.send("hello world"))

router
    .route('/blogs')
        .get(BlogController.apiGetBlogs)

export default router