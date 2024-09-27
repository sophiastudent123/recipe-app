import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Recipe = () => {
	const inputWord = useRef();
	
	let [recipeArray, setRecipeArray] = useState([])
  const search = async (word) => {
    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=${word}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_APP_ID1,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
     makeRecipeArray(result.results);
    } catch (error) {
      console.error(error);
    }
  };
 const searchDetails = async (id)=> {

  const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_APP_ID2,
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  return result.instructions
} catch (error) {
	console.error(error);
} 
}


  //search recipe

  const searchRecipe = (word) => {
	search(word);
  }
  
  const makeRecipeArray = async (arr) => {
    let updatedRecipes = []
    
    for (let i=0; i<arr.length; i++){
      
      const details = await searchRecp(arr[i].id);
     updatedRecipes.push({
      name: arr[i].name,
      description: arr[i].description,
      details: details

     })
    
    }
    setRecipeArray(updatedRecipes);
    console.log(updatedRecipes);
  }
  
  const searchRecp = async (id)=> {
    let instructions = await searchDetails(id);
    console.log(instructions);
    let returnArray = []
    for (let i=0; i<instructions.length; i++){
      returnArray.push(instructions[i].display_text);
    }
 return returnArray;
  }

 const showIngredients = (arr) => {

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
  {/* {inputs.map((inputValue, index) => (
                <div key={index} className="input-wrapper">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              ))} */}
              <div className="recipes">
    {recipeArray.map((value, index)=>(
      <div key={index}> 
      
      <h3>{value.name}</h3>
      <p>{value.description}</p>
      <button >Click here to see instructions...</button>
      //when clicked should be able to see instructions
      </div>
    ))}
    </div>
  </>
};

export default Recipe;
