import React, { useState } from 'react';
import './App.css';
import { useSpring, animated } from "react-spring";

function App() {
  const [on, toggle] = useState(false);

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
  const propsThree = useSpring({
    from: { number: 0 },
    to: { number: 10.0 }
  });
  const propsFour = useSpring({
    from: {opacity: 0, color: 'red'},
    to: async (next, cancel) => {
      await next({opacity: 1, color: 'blue'});
      await next({opacity: 0, color: 'green'});
    },
  });
  const multiAnimation = useSpring({
    from: { opacity: 0, color: 'red'},
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 1, color: 'red' },
      { opacity: 0.5, color: '#008000' },
      { opacity: 0.8, color: 'black' },
      { opacity: 0, color: 'gray' },
    ],
  });
  const clickAnimation = useSpring({
    color: on ? 'blue' : 'red'
  });
  
  return (
    <div className="App">
      
      <center>
        <animated.h1 style={propsOne}>I Will Fade In</animated.h1>
        <animated.div style={propsTwo}>
          <div>Blue</div>
          <div>Circle</div>
        </animated.div>
        <animated.div>{propsThree.number}</animated.div>
        <animated.div style={propsFour}>I Will Fade In</animated.div>
        <animated.h1 style={multiAnimation}>Hello World...</animated.h1>
        <div>
          <animated.h1 style={clickAnimation}>{!on ? "I'm red" : "Now I'm blue"}</animated.h1>
          <button onClick={() => toggle(!on)}>Change</button>
        </div>
      </center>
    </div>
  );
}

export default App;

/*
<animated.svg width="400" height="200" viewBox="0 0 400 200">
        <path d={waveLinePath} width="400" height="200" viewBox="0 0 400 200"/>
      </animated.svg>
      */