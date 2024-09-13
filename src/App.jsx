import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MealPlanner from "./MealSchedule/MealPlanner";
import Recipe from "./Recipe/Recipe";
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<MealPlanner/>}/>
      <Route path="/MealSchedule" element={<MealPlanner/>}/>
      <Route path="/Recipe" element={<Recipe/>}/>
    </Routes>
    
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
