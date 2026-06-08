import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;
// const api = `https://www.googleapis.com/books/v1/volumes?q=The Great Gatsby&key=${API_KEY}`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RequestBooks() {
  const query = useQuery().get("q") || "";
  const [books, setBooks] = useState([]);
  const api = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data.items || []);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Автор: {book.volumeInfo.authors}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="book title"
              />
            )}
            <p>{book.volumeInfo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestBooks;
