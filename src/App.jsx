import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import islamicQuotes from "./data/data";
function App() {
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
      <h1 className="n-of-qs">عــدد الفــوائــد :</h1>
      <div className="notes-container">{quotes}</div>
    </>
  );
}

export default App;
