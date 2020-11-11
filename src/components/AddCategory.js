import React, { useState } from "react";
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Gif searcher");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categs) => [inputValue, ...categs]);
    // e.reset()
    setInputValue('')
  };

  return (
    <>
      <h3>Add Category</h3>
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
