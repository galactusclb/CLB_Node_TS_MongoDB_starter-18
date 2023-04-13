import { Router } from "express"

import { createBlog, getAllBlogs } from "@controllers/blog-controller/Blog.controller"

const router: Router = Router()

router.get("/", getAllBlogs)
router.post("/blog", createBlog)

export default router
