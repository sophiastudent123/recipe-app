import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Recipe = () => {
	const inputWord = useRef();
	
	let [recipeArray, setRecipeArray] = useState()
  const search = async (word) => {
    const url = `https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${word}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'de1927aaa3msh4d2f36cda4943a8p108c2cjsnaea7cf5d7bae',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	 const result = await response.json();
   console.log(result)
	for (let i=0; i<result.results.length; i++){
    const newRecipe = {
      display: result.results[i].display
    }
  }

} catch (error) {
	console.error(error);
}
  };
 const searchDetails = async ()=> {

  const url = 'https://tasty.p.rapidapi.com/recipes/detail?id=5586';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'de1927aaa3msh4d2f36cda4943a8p108c2cjsnaea7cf5d7bae',
      'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

searchDetails()
  //search recipe

  const searchRecipe = (word) => {
	search(word);
  }
  

  return <>
  <ul>
      <li>
        <Link to="../MealSchedule"></Link>
      </li>
      </ul>
  <input  ref={inputWord} type="text" placeholder="type a recipe" ></input>;
  <button onClick={()=>{
	searchRecipe(inputWord.current.value)}
	}>Search</button>
  </>
};

export default Recipe;
