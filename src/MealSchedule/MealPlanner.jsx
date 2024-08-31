import React, { useEffect, useRef, useState } from "react";
import "./Planner.css";

const MealPlanner = () => {
  // document elements

  const ingredientButton = useRef();
  const titleRecipeValue = useRef();
  const dayWeekValue = useRef();
  //state for when to show dropdown menu

  const [dropdownState, setDropdownState] = useState(false);

  //function for when you click on the Add Item
  const itemClicked = () => {
    setDropdownState(!dropdownState);
  };

  //make array of inputs
  const [inputs, setInput] = useState([]);
  //make arrays for elements of each day of week
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  // State to track visibility of ingredients for each meal

  //make function to add new input
  const addInput = () => {
    setInput([...inputs, " "]);
  };
  //make function to handle input changes
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInput(newInputs);
  };

  //make function when deleting ingredient
  const handleDelete = (i) => {
    setInput(inputs.filter((_, index) => i !== index));
  };
  const handleDeleteForMonday = (i) => {
    const newMonday = monday.filter((_, index) => i !== index);
    setMonday(newMonday);
    saveData("monday", newMonday);
  };

  const handleDeleteForTuesday = (i) => {
    const newTuesday = tuesday.filter((_, index) => i !== index);
    setTuesday(newTuesday);
    saveData("tuesday", newTuesday);
  };
  const handleDeleteForWednesday = (i) => {
    const newWednesday = wednesday.filter((_, index) => i !== index);
    setWednesday(newWednesday);
    saveData("wednesday", newWednesday);
  };
  const handleDeleteForThursday = (i) => {
    const newThursday = thursday.filter((_, index) => i !== index);
    setThursday(newThursday);
    saveData("thursday", newThursday);
  };
  const handleDeleteForFriday = (i) => {
    const newFriday = friday.filter((_, index) => i !== index);
    setFriday(newFriday);
    saveData("friday", newFriday);
  };
  const handleDeleteForSaturday = (i) => {
    const newSaturday = saturday.filter((_, index) => i !== index);
    setSaturday(newSaturday);
    saveData("saturday", newSaturday);
  };
  const handleDeleteForSunday = (i) => {
    const newSunday = sunday.filter((_, index) => i !== index);
    setSunday(newSunday);
    saveData("sunday", newSunday);
  };

  //make function to add the meal to the correct day
  const addMeal = (day, title) => {
    const newMeal = { title, ingredients: inputs, shown: true };

    day = day.trim();
    day = day.toLowerCase();
    title = title.trim();
    if (day === "" || title === "") {
      alert("please fill in all the fields");
    } else {
      if (day === "monday") {
        setMonday((prevMonday) => [...prevMonday, newMeal]);
      } else if (day === "tuesday") {
        setTuesday((prevTuesday) => [...prevTuesday, newMeal]);
      } else if (day === "wednesday") {
        setWednesday((prevWednesday) => [...prevWednesday, newMeal]);
      } else if (day === "thursday") {
        setThursday((prevThursday) => [...prevThursday, newMeal]);
      } else if (day === "friday") {
        setFriday((prevFriday) => [...prevFriday, newMeal]);
      } else if (day === "saturday") {
        setSaturday((prevSaturday) => [...prevSaturday, newMeal]);
      } else if (day === "sunday") {
        setSunday((prevSunday) => [...prevSunday, newMeal]);
      }

      return console.log(inputs);
    }
  };

  //handle add meal button

  const handleAddMeal = () => {
    addMeal(dayWeekValue.current.value, titleRecipeValue.current.value);
  };

  //handle delete all meals

  const handleDeleteAll = () => {
    deleteAllMeals();
  };

  //delete all the meals

  const deleteAllMeals = () => {
    setMonday([]);
    setTuesday([]);
    setWednesday([]);
    setThursday([]);
    setFriday([]);
    setSaturday([]);
    setSunday([]);
    localStorage.removeItem("monday");
    localStorage.removeItem("tuesday");
    localStorage.removeItem("wednesday");
    localStorage.removeItem("thursday");
    localStorage.removeItem("friday");
    localStorage.removeItem("saturday");
    localStorage.removeItem("sunday");
  };

  //save data

  const saveData = (day, data) => {
    console.log(`Loading data for ${day}:`, JSON.stringify(data));
    localStorage.setItem(day, JSON.stringify(data));
  };

  const loadData = (day) => {
    const savedData = localStorage.getItem(day);

    return savedData ? JSON.parse(savedData) : [];
  };

  useEffect(() => {
    setMonday(loadData("monday"));
  }, []);
  useEffect(() => {
    setTuesday(loadData("tuesday"));
  }, []);
  useEffect(() => {
    setWednesday(loadData("wednesday"));
  }, []);
  useEffect(() => {
    setThursday(loadData("thursday"));
  }, []);
  useEffect(() => {
    setFriday(loadData("friday"));
  }, []);
  useEffect(() => {
    setSaturday(loadData("saturday"));
  }, []);
  useEffect(() => {
    setSunday(loadData("sunday"));
  }, []);

  useEffect(() => {
    if (monday.length > 0) {
      saveData("monday", monday);
    }
  }, [monday]);
  useEffect(() => {
    if (tuesday.length > 0) {
      saveData("tuesday", tuesday);
    }
  }, [tuesday]);
  useEffect(() => {
    if (wednesday.length > 0) {
      saveData("wednesday", wednesday);
    }
  }, [wednesday]);
  useEffect(() => {
    if (thursday.length > 0) {
      saveData("thursday", thursday);
    }
  }, [thursday]);
  useEffect(() => {
    if (friday.length > 0) {
      saveData("friday", friday);
    }
  }, [friday]);
  useEffect(() => {
    if (saturday.length > 0) {
      saveData("saturday", saturday);
    }
  }, [saturday]);
  useEffect(() => {
    if (sunday.length > 0) {
      saveData("sunday", sunday);
    }
  }, [sunday]);
  return (
    <div className="planner-container">
      <h1>Meal Planner Scheducle</h1>
      <div className="add-item-container">
        <div className="add-item-menu">
          <div className="a-types">
            <a onClick={itemClicked}>Add Item</a>
            <a onClick={handleDeleteAll}>Delete All Meals</a>
          </div>
          <div
            style={{ display: dropdownState ? "block" : "none" }}
            className="dropdown-menu"
          >
            <h2>Add Item:</h2>
            <h3>Title:</h3>{" "}
            <input
              ref={titleRecipeValue}
              type="text"
              placeholder="write"
            ></input>
            <h3>Which Day?</h3>
            <select ref={dayWeekValue}>
              <option>Choose a Day</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
            <h3>Ingredients:</h3>
            <div className="input-container">
              <button
                ref={ingredientButton}
                className="add-ingredient-button"
                onClick={addInput}
              >
                Add Ingredients
              </button>
              {inputs.map((inputValue, index) => (
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
              ))}
            </div>
            <button className="add-meal-button" onClick={handleAddMeal}>
              Add Meal
            </button>
          </div>
        </div>
      </div>
      <div className="planner-week">
        <div className="weekday">
          <div className="food-list-monday">
            <h3>Monday</h3>
            <ul>
              {monday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForMonday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="food-list-tuesday">
            <h3>Tuesday</h3>
            <ul>
              {tuesday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForTuesday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="food-list-wednesday">
            <h3>Wednesday</h3>
            <ul>
              {wednesday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForWednesday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="food-list-thursday">
            <h3>Thursday</h3>
            <ul>
              {thursday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForThursday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="food-list-friday">
            <h3>Friday</h3>
            <ul>
              {friday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForFriday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="food-list-saturday">
            <h3>Saturday</h3>
            <ul>
              {saturday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForSaturday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="food-list-sunday">
            <h3>Sunday</h3>
            <ul>
              {sunday.map((value, index) => (
                <li key={index}>
                  <strong>{value.title}</strong>
                  <button
                    onClick={() => handleDeleteForSunday(index)}
                    className="week-delete-button"
                  >
                    Delete
                  </button>
                  <ul>
                    {value.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MealPlanner;
