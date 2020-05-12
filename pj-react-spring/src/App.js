import React from 'react';
import './App.css';
import { useSpring, animated } from "react-spring";

function App() {
  const propsOne = useSpring({opacity: 1, from: {opacity: 0}});
  const propsTwo = useSpring({ x: 100, from: { x: 0 } })

  return (
    <div className="App">
      <animated.div style={propsOne}>
        I Will Fade In
      </animated.div>
      <animated.svg strokeDashoffset={propsTwo.x}>
        <path d="./circle.svg" />
      </animated.svg>
    </div>
  );
}

export default App;
