import express from "express"

import Book from "../../../models/Book.js"

const booksRouter = new express.Router()

booksRouter.get("/", (req, res) => {
  const books = Book.findAll()
  
  res.json({ books: books })
})

booksRouter.post("/", (req, res) => {
  const book = new Book(req.body.book)

  if(book.save()) {
    res.status(201).json({ book })
  } else {
    res.status(422).json({ errors: book.errors })
  }
})

booksRouter.get("/test-error", (req, res) => {
  res.status(500).send("")
})

export default booksRouter