import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/books-page?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <h1>Поиск книг</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название книги"
        />
        <button type="submit">Найти</button>
      </form>
    </div>
  );
}

export default SearchPage;
