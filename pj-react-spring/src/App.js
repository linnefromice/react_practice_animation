import React from 'react';
import './App.css';
import { Keyframes } from "react-spring/renderprops";
import { ReactComponent as GradientOne } from './gradient1.svg';

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

function SampleBackGroundOne () {
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

function SampleSvgOne() {
  return (
    <div style={{width: 500, height: 200, background: 'linear-gradient(to bottom right, #de350b, #0065ff)'}}>
      <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 64 64">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ad3" />
            <stop offset="50%" stopColor="#add" />
          </linearGradient>
        </defs>
        <path d='M0 10 C30 28 38 0 64 10 L64 0 L0 0 Z' fill="url(#grad)"/>
      </svg>
    </div>
  )
}

function App() {
  return (
    <GradientOne/>
  );
}

export default App;
