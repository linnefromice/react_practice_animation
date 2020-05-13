import React from 'react';
import './App.css';
import { Keyframes } from "react-spring/renderprops";

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

function App() {
  return (
    <Container
      reset
      config={{ duration: 10000 }}>
      {styles => (
        <div style={{ width: 800, height: 400, background: `linear-gradient(${styles.radians}deg, rgba(4,56,0,1) 0%, rgba(2,247,104,1) 45%, rgba(230,252,223,1) 100%)`}}>
          <center>
            Hello World
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