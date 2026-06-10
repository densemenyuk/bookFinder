import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function BooksList({ query }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setBooks([]);
      return;
    }
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`)
      .then(r => r.json())
      .then(data => setBooks(data.items || []))
      .finally(() => setLoading(false));
  }, [query]);

  if (!query) return null;

  return (
    <div className="books-list">
      {loading && <div>Поиск...</div>}
      {books.length === 0 && !loading && <div>Ничего не найдено.</div>}
      <div className="books-cards">
        {books.map(book =>
          <div className="book-card" key={book.id}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=?"}
              alt={book.volumeInfo.title}
              className="book-cover"
            />
            <div className="book-info">
              <div className="book-title">{book.volumeInfo.title}</div>
              <div className="book-authors">
                {book.volumeInfo.authors?.join(", ") || "Автор неизвестен"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BooksList;