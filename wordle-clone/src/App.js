import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Increment";
import Targeter from "./components/showAdder";
import Arrow from "./components/Arrow";
import Shows from "./components/shows";
import NewApp from "./components/pieChart";

function App() {
  const randomXCoord = Math.floor(Math.random() * 1001);
  const randomYCoord = Math.floor(Math.random() * 1001);

  const [shows, setShows] = useState([
    { id: 1, x: randomXCoord, y: randomYCoord },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        {/* <Counter /> */}
        {/* <Arrow /> */}
        <NewApp shows={shows} />
        <Targeter setShows={setShows} />
        <Shows shows={shows} />
      </header>
    </div>
  );
}
//target={target}
export default App;
