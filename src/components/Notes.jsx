import "../styles/notes.css";
function Notes({ title, book, author, part, page, quote }) {
  return (
    <>
      <div className="note">
        <h3>عنوان الفائدة : {title}</h3>
        <h4>اسم الكتاب : {book}</h4>
        <h4>اسم المؤلف : {author} </h4>
        <h4>
          الصفحة والجزء : الجزء {part}، الصفحة {page}
        </h4>
        <h5>الفائدة : " {quote} "</h5>
      </div>
    </>
  );
}

export default Notes;
