import { useState } from "react";

function range(target, fire, distance) {
  if (
    parseInt(target[0].x) < parseInt(fire.x) + distance &&
    parseInt(target[0].x) > parseInt(fire.x) - distance &&
    parseInt(target[0].y) < parseInt(fire.y) + distance &&
    parseInt(target[0].y) > parseInt(fire.y) - distance
  ) {
    return true;
  }
}

let direction = "o";
let rangeOf = "?";
let counter = 5;

const Targeter = ({ setShows }) => {
  const [newShowTitle, setNewShowTitle] = useState("");
  const [newShowTitle2, setNewShowTitle2] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setShows(currTarget => {
      counter--;
      if (counter <= 0) {
        console.log("out of ammo");
      }
      console.log(counter);
      const newShow = {
        id: currTarget.length + 1,
        x: newShowTitle,
        y: newShowTitle2,
        watched: false,
      };

      if (range(currTarget, newShow, 50) === true) {
        console.log(`you are 50 meters`);
        rangeOf = `you are 50 meters`;
      } else if (range(currTarget, newShow, 300) === true) {
        console.log(`you are 300 meters`);
        rangeOf = `you are 300 meters`;
      } else if (range(currTarget, newShow, 500) === true) {
        console.log(`you are 500 meters`);
        rangeOf = `you are 500 meters`;
      }

      if (currTarget[0].y > newShow.y && currTarget[0].x < newShow.x) {
        console.log("target is further north-West");
        direction = "target is further north-West";
      } else if (currTarget[0].y < newShow.y && currTarget[0].x < newShow.x) {
        console.log("target is further south-West");
        direction = "target is further south-West";
      } else if (currTarget[0].y > newShow.y && currTarget[0].x > newShow.x) {
        console.log("target is further North-East");
        direction = "target is further North-East";
      } else if (currTarget[0].y < newShow.y && currTarget[0].x > newShow.x) {
        console.log("target is further South-East");
        direction = "target is further South-East";
      }

      return [currTarget[0], newShow];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-show-title">x coordinate:</label>
      <input
        id="new-show-title"
        value={newShowTitle}
        onChange={e => setNewShowTitle(e.target.value)}
      ></input>
      <br />
      <label htmlFor="new-show-title2">y coordinate:</label>
      <input
        id="new-show-title2"
        value={newShowTitle2}
        onChange={e => setNewShowTitle2(e.target.value)}
      ></input>
      <br />
      <button>Fire</button>
      <dir>Direction: {direction}</dir>
      <dir>Distance: {rangeOf}</dir>
    </form>
  );
};

export default Targeter;
