import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/style/search.css";

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
    <div className="bgimg">
      <h1 className="title">Book Finder</h1>
      <form onSubmit={handleSumbit} className="form">
        <input
          className="searchinput"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введине название книги"
        />
        <button className="searchbtn" type="submit">
          Найти
        </button>
      </form>
    </div>
  );
}

export default SearchPage;
