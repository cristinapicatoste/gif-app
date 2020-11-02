import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

//import PropTypes from "prop-types";

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState([
    "Rock"
  ]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <GifGrid key={category} category={category} />
          // <li key={category[i]}>{category}</li>
        ))}
      </ol>
      {/* 
      <button onClick={handleAdd}>Añadir categoría</button>
      <button onClick={reset}>Reset</button> */}
    </>
  );
};

//GifExpertApp.propTypes = {};

export default GifExpertApp;
