import { useState } from "react";
import BooksList from "./books-page";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <>
    <div className="bgimg">
      <h1 className="title">Book Finder</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="searchinput"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Введите название книги"
        />
        <button className="searchbtn" type="submit">Найти</button>
      </form>
    </div>
    <BooksList query={search} />
    </>
  );
}

export default SearchPage;