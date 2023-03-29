import fs from "fs"

const booksPath = "books.json"

class Book {
  constructor({ title }) {
    this.title = title
  }

  static findAll() {
    const bookData = JSON.parse(fs.readFileSync(booksPath)).books
    let books = []
    bookData.forEach(book => {
      const newBook = new Book(book)
      books.push(newBook)
    })
    return books
  }

  save() {

      const books = Book.findAll()

      books.push(this)

      const data = { books: books }
      
      fs.writeFileSync(booksPath, JSON.stringify(data))
      return true
  }
}

export default Book
