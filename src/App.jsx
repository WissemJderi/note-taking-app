import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import islamicQuotes from "./data/data";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  const [numberOfQuotes] = useState(islamicQuotes.length);
  const [forumIsShown, setForumIsShown] = useState(false);
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
  function showForum() {
    setForumIsShown(!forumIsShown);
  }
  return (
    <>
      <Header />
      <div className="main-header">
        <h1 className="n-of-qs">عــدد الفــوائــد : {numberOfQuotes}</h1>
        <Button showForum={showForum} />
        {forumIsShown ? <Input /> : null}
      </div>
      <hr />
      <div className="notes-container">{quotes}</div>
    </>
  );
}

export default App;
