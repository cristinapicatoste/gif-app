import React, { useState } from "react";
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Hello!");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categs) => [...categs, inputValue]);
    // e.reset()
    setInputValue('')
  };

  return (
    <>
      <h4>Add Category</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add category"
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
