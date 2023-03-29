// with error handling
// const fetchBook = async () => {
//     try {
//             const bookResponse = await fetch("/api/v1/books")

//             if (bookResponse.ok){
//                     const parsedBookData = await bookResponse.json()
//                     appendBooksArrayToHtml(parsedBookData.books)
//             } else {
//                     const myFirstError = new Error(`${bookResponse.status} ${bookResponse.statusText}`)
//                     throw (myFirstError)
//             }
//     } catch (someError){
//             console.log(someError)
//             // console.log("Keep calm, developers are on it...")
//     }
// }

// shortened version
console.log("Hello")

const fetchBook = async () => {
    const bookResponse = await fetch("/api/v1/books")
    const parsedBooksObject = await bookResponse.json()
    appendBooksArrayToHtml(parsedBooksObject.books)
}


const bookButton = document.getElementById('book-button')
if (bookButton){
    bookButton.addEventListener("click", fetchBook);  
}


const appendBooksArrayToHtml = (books) => {
    let bookList = document.getElementById('books')
    let listItems = " " 
    console.log(books)

    books.forEach(book => {
        listItems += `<li>${book.title}</li>`
    })
    bookList.innerHTML = listItems
}

// FOR POST FETCH

const postBook = async (event) => {
    event.preventDefault()

    const titleInputField = document.getElementById('title')

    const newBook = {
        book: {
            title: titleInputField.value,
        }
    }

    const postedBookResponse = await fetch("/api/v1/books", {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
            "Content-Type": "application/json"
        }
    })
         
    alert("your book was saved")
}

document
    .getElementById('new-book-form')
    .addEventListener('submit', postBook)