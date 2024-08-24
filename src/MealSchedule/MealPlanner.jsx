import React, { useRef } from "react";
import "./Planner.css";

const MealPlanner = () => {
  // document elements
  const itemClick = useRef();
  const dropdownMenu = useRef();

  const itemClicked = () => {
    if (dropdownMenu.current.style.display==='none'){
    dropdownMenu.current.style.display = 'block'
    }
    else {
      dropdownMenu.current.style.display = 'none'
    }
  }
  return (
    <div className="planner-container">
      <h1>Meal Planner Scheducle</h1>
      <div className="add-item-container">
        <div className="add-item-menu">
        <a  onClick={itemClicked}ref ={itemClick}>Add Item</a>
        <div ref={dropdownMenu}className="dropdown-menu">
          <h2>Add Item:</h2>
          <h3>Title:</h3> <input type="text"></input>
          <h3>Ingredients:</h3> <button>Add Ingredients</button>
          </div>
        </div>
      </div>
      <div className="planner-week">
      <div className="weekday">
        <h3>Monday</h3>
        <h3>Tuesday</h3>
        <h3>Wednesday</h3>
        <h3>Thursday</h3>
        <h3>Friday</h3>
        <h3>Saturday</h3>
        <h3>Sunday</h3>
      </div>
      <div className="food-list-monday">
        <ul></ul>
      </div>
      <div className="food-list-tuesday">
        <ul></ul>
      </div>
      <div className="food-list-wednesday">
        <ul></ul>
      </div>
      <div className="food-list-thursday">
        <ul></ul>
      </div>
      <div className="food-list-friday">
        <ul></ul>
      </div>
      <div className="food-list-saturday">
        <ul></ul>
      </div>
      <div className="food-list-sunday">
        <ul></ul>
      </div>
    </div>
    </div>
  );
};

export default MealPlanner;
