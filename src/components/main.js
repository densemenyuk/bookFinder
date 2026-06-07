import { useEffect, useState } from "react";

const api = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

function RequestBooks() {
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Books</h1>;
}

export default RequestBooks;
