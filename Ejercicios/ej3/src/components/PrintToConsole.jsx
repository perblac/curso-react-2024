// imports
import { useState } from "react";
import "./PrintToConsole.css";

// globals
const adjectives = [
  "powerful",
  "innovative",
  "dynamic",
  "user-friendly",
  "flexible",
  "efficient",
  "interactive",
  "responsive",
  "scalable",
  "seamless",
  "intuitive",
  "revolutionary",
  "versatile",
  "engaging",
  "cutting-edge",
  "robust",
  "streamlined",
  "forward-thinking",
  "game-changing",
  "transformative",
];
const initialState = "";

const PrintToConsole = () => {
  // hooks
  // vars
  const [consoleMessage, setConsoleMessage] = useState(initialState);

  // functs
  function handleNewMessage() {
    const message = `Wow! React is ${
      adjectives[Math.floor(Math.random() * 20)]
    }!`;
    setConsoleMessage(message);
    console.log(message);
  }
  return (
    <>
      <button onClick={handleNewMessage}>Click Me!</button>
      <div className="box">{consoleMessage}</div>
    </>
  );
};

export default PrintToConsole;
