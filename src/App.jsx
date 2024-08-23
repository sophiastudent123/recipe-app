import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MealPlanner from "./MealSchedule/MealPlanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MealPlanner />
    </>
  );
}

export default App;
