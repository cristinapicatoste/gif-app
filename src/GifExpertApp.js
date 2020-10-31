import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
//import PropTypes from "prop-types";

const GifExpertApp = (props) => {
  //const initCategories = ["Rock", "Clasica", "Pop", "Punk"];
  const [categories, setCategories] = useState([
    "Rock",
    "Clasica",
    "Pop",
    "Punk",
  ]);

  //setCategories([...categories, "Moderna"]);
  //   const handleAdd = () => {
  //     setCategories([...categories, "Moderna"]);
  //     //setCategories( categs => [...categs, "Moderna"]);
  //   };

  //   const reset = () => {
  //     setCategories(initCategories);
  //   };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <li key={category[i]}>{category}</li>
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
