import React, { useState } from "react";
import "../styles/input.css";
function Input({ addQuote }) {
  const [formData, setFormData] = useState({
    title: "",
    book: "",
    author: "",
    part: "",
    page: "",
    quote: "",
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
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>اسم الكتاب:</label>
        <input
          type="text"
          name="book"
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
          value={formData.page}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>الاقتباس:</label>
        <textarea name="quote" value={formData.quote} onChange={handleChange} />
      </div>
      <button type="submit">أضف اقتباس</button>
    </form>
  );
}

export default Input;
