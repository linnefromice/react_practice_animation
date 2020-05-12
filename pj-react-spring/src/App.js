import React from 'react';
import './App.css';
import { useSpring, animated } from "react-spring";

function App() {
  const propsOne = useSpring({opacity: 1, from: {opacity: 0}});
  const propsTwo = useSpring({
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "blue",
    from: {
      width: 0,
      height: 0,
    }
  });

  return (
    <div className="App">
      <center>
        <animated.div style={propsOne}>
          I Will Fade In
        </animated.div>
        <animated.div style={propsTwo}>
          <div>Blue</div>
          <div> Circle</div>
        </animated.div>
      </center>
    </div>
  );
}

export default App;
