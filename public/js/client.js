// with error handling
// const fetchBook = async () => {
//         try {
//                 const bookResponse = await fetch("/api/v1/books")

//                 if (bookResponse.ok){
//                         const parsedBookData = await bookResponse.json()
//                         appendBooksArrayToHtml(parsedBookData.books)
//                 } else {
//                         const myFirstError = new Error(`${bookResponse.status} ${bookResponse.statusText}`)
//                         throw (myFirstError)
//                 }
//         } catch (someError){
//                 console.log(someError)
//                 console.log("Keep calm, developers are on it...")
//         }
// }

// shortened version
const fetchBook = async () => {
        const bookResponse = await fetch("/api/v1/books")
        const parsedBookData = await bookResponse.json()
        appendBooksArrayToHtml(parsedBookData.books)
}


const bookButton = document.getElementById('book-button')
bookButton.addEventListener("click", fetchBook, false); 


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

// const postBook = async (event) => {
//     event.preventDefault()

//     const titleInputField = document.getElementById('city')

//     const newBook = {
//         book: {
//             title: titleInputField.value,
//         }
//     }

//     const postedBookResponse = await fetch("/api/v1/books", {
//         method: "POST",
//         body: JSON.stringify(newBook),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
         
//     const data = await response.json()
//     appendBooksArrayToHtml(data.books)
// }

// document
//     .getElementById('new-book-submit-button')
//     .addEventListener('click', postBook)