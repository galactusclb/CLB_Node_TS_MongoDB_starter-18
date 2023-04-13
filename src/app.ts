import express, { Application, Request, Response } from "express"
import cors from 'cors'
import "dotenv/config"

import blogRoutes from "@routes/blog-routes/Blog.routes"

const app: Application = express()
app.use(express.json())

const BASE_ROUTE = "/api/v1"

//test route
app.get(`${BASE_ROUTE}/`, (req: Request, res: Response) => {
    res.send({ message: "Base route : 🔥😊" })
})

app.use(`${BASE_ROUTE}/blogs`, blogRoutes)

export { app }