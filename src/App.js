import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RequestBooks from "./components/books-page";
import SearchPage from "./components/search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/books-page" element={<RequestBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
