import express from "express"
import booksRouter from "./api/v1/booksRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.redirect("/books")
})

rootRouter.get("/books", (req, res) => {
  res.render("index")
})

rootRouter.get("/books/new", (req, res) => [
  res.render("form")
])

// all paths in this router will return JSON
// the routes in the booksRouter we tend to call API endpoints
rootRouter.use("/api/v1/books", booksRouter)


export default rootRouter