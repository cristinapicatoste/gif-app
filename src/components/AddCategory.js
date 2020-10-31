import React, { useState } from "react";

const AddCategory = (props) => {
  const { setCategories } = props;
  const [inputValue, setInputValue] = useState("Hello!");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categs) => [...categs, inputValue]);
  };

  return (
    <>
      <h5>{inputValue}</h5>
      <h4>Add Category</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

export default AddCategory;
