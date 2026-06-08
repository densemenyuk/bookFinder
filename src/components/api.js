import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const api = `https://www.googleapis.com/books/v1/volumes?q=agatha+christie&key=${API_KEY}`;

function RequestBooks() {
 const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data.items || [])})
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Автор: {book.volumeInfo.authors}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="book title"/>
            )}
            <p>{book.volumeInfo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RequestBooks;


