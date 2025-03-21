import React, { useState } from "react";
import "../styles/input.css";
function Input({ addQuote }) {
  const [formData, setFormData] = useState({
    title: "الصدق",
    book: "سنن ابن ماجه",
    author: "الإمام ابن ماجه",
    part: 1,
    page: 69,
    quote: "عليكم بالصدق فإن الصدق يهدي إلى البر",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addQuote(formData);
    setFormData({
      title: "",
      book: "",
      author: "",
      part: "",
      page: "",
      quote: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>عنوان الفائدة:</label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>اسم الكتاب:</label>
        <input
          type="text"
          name="book"
          required
          value={formData.book}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>اسم المؤلف:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>الجزء:</label>
        <input
          type="number"
          name="part"
          value={formData.part}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>الصفحة:</label>
        <input
          type="number"
          name="page"
          required
          value={formData.page}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>الاقتباس:</label>
        <textarea
          name="quote"
          value={formData.quote}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">أضف الاقتباس </button>
    </form>
  );
}

export default Input;
