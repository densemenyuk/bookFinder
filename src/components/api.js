import { useEffect, useState } from "react";

const API_KEY = "AIzaSyDbnxFOx0ZPqzDdebPVJdssQE4mEeED160"
const api = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${API_KEY}`;

function RequestBooks() {
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Books</h1>;
}

export default RequestBooks;


