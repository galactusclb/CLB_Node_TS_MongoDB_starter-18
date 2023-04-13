import { Request, Response } from "express";

import Blog from "@models/blogs/Blog.model";

export const getAllBlogs = async (req: Request, res: Response) => {
    const blogs = await Blog.find()

    try {
        return res.status(200).json(blogs)
    } catch (error) {
        return res.status(500).json({ err: error })
    }
}

export const createBlog = async (req: Request, res: Response) => {
    console.log(req.body);

    const response = await Blog.create(req.body)

    try {
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ "error": "Couldn't create a new blog" })
    }
}