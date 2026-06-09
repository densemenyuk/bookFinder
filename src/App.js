import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestBooks from "./components/books-page";
import SearchPage from "./components/search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/books-page" element={<RequestBooks />} />
      </Routes>
    </div>
  );
}

export default App;
