import React, { useState } from 'react';
import './App.css';
import { useSpring, animated } from "react-spring";
import { Keyframes } from "react-spring/renderprops";

import { SampleOne, SampleTwo, SampleThree, SampleFour, SampleFive } from './views/samples';

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 150 },
      to: { radians: 210 },
    })
    await next({
      from: { radians: 210 },
      to: { radians: 150 },
    })
  }
})

function _App() {
  const [on, toggle] = useState(false);

  const { xy, c } = useSpring({
    from: { xy: [0, 0], c: 'green'},
    to: {
      xy: on ? [400, 200] : [0, 0],
      c: on ? 'red' : 'green',
    }
  });
  
  return (
    <div style={{ background: `linear-gradient(180deg, rgba(4,56,0,1) 0%, rgba(2,247,104,1) 45%, rgba(230,252,223,1) 100%)`}}>
      <center>
        <div>
          <animated.h1
            style={{
              transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
              color: c.interpolate(c => c)}}>
                {!on ? "I'm here" : "Now I'm over here"}
          </animated.h1>
          <button onClick={() => toggle(!on)}>Change</button>
        </div>
      </center>
    </div>
  );
}

function App() {
  return (
    <Container
      reset
      config={{ duration: 10000 }}>
      {styles => (
        <div style={{ width: 800, height: 400, background: `linear-gradient(${styles.radians}deg, rgba(4,56,0,1) 0%, rgba(2,247,104,1) 45%, rgba(230,252,223,1) 100%)`}}>
          <center>
            <SampleOne/>
            <SampleTwo/>
            <SampleThree/>
            <SampleFour/>
            <SampleFive/>
          </center>
        </div>
      )}
    </Container>
  );
}

export default App;

/*
<animated.svg width="400" height="200" viewBox="0 0 400 200">
        <path d={waveLinePath} width="400" height="200" viewBox="0 0 400 200"/>
      </animated.svg>
      */