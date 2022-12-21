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

  // isValid() {
  //   this.errors = []
  //   const requiredFields = ["title"]
  //   let isValid = true

  //   for (const requiredField of requiredFields) {
  //     this.errors[requiredField] = []
  //     if (!this[requiredField]) {
  //       isValid = false
  //       this.errors[requiredField].push("Can't be blank")
  //     }
  //   }
  //   return isValid
  // }

  save() {
    // if (this.isValid()) {
      // delete this.errors
      const books = Book.findAll()

      books.push(this)

      const data = { books: books }
      
      fs.writeFileSync(booksPath, JSON.stringify(data))
      return true
    // } else {
    //   return false
    // }
  }
}

export default Book
