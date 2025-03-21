import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import islamicQuotes from "./data/data";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  const [quotes, setQuotes] = useState(islamicQuotes);
  const [numberOfQuotes, setNumberOfQuotes] = useState(quotes.length);
  const [forumIsShown, setForumIsShown] = useState(false);
  useEffect(() => {
    setNumberOfQuotes(quotes.length);
  }, [quotes]);
  let quotesList = quotes.map((quote, i) => {
    return (
      <Notes
        key={quote.page + i}
        title={quote.title}
        book={quote.book}
        author={quote.author}
        part={quote.part}
        page={quote.page}
        quote={quote.quote}
        removeQuote={() => {
          removeQuote(i);
        }}
        editQuote={() => {
          editQuote(i, quote.quote);
        }}
      />
    );
  });
  function showForum() {
    setForumIsShown(!forumIsShown);
  }
  function addQuote(data) {
    setQuotes([...quotes, data]);
  }
  function removeQuote(index) {
    const newQuotes = quotes.filter((_, i) => i !== index);
    setQuotes(newQuotes);
  }

  function editQuote(i, quote) {
    let editedQuote = prompt("الفــائــدة", quote);

    console.log(editedQuote);
    console.log(quotes[i].quote);
    setQuotes((prevArr) => {
      const newQuotes = [...prevArr];
      newQuotes[i].quote = editedQuote;
      return newQuotes;
    });
  }
  return (
    <>
      <div className="main-header">
        <h1 className="n-of-qs">عــدد الفــوائــد : {numberOfQuotes}</h1>
        <Button showForum={showForum} />
        {forumIsShown ? <Input addQuote={addQuote} /> : null}
      </div>
      <hr />
      <div className="notes-container">{quotesList}</div>
    </>
  );
}

export default App;
