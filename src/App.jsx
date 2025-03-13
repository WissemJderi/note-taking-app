import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import islamicQuotes from "./data/data";
import Button from "./components/Button";
function App() {
  const [numberOfQuotes] = useState(islamicQuotes.length);

  let quotes = islamicQuotes.map((quote, i) => {
    return (
      <Notes
        key={quote.page + i}
        title={quote.title}
        book={quote.book}
        author={quote.author}
        part={quote.part}
        page={quote.page}
        quote={quote.quote}
      />
    );
  });
  return (
    <>
      <Header />
      <div className="main-header">
        <h1 className="n-of-qs">عــدد الفــوائــد : {numberOfQuotes}</h1>
        <Button />
      </div>
      <hr />
      <div className="notes-container">{quotes}</div>
    </>
  );
}

export default App;
