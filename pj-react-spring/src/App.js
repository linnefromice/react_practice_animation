import React from 'react';
import './App.css';
import { Keyframes } from "react-spring/renderprops";
// import { ReactComponent as GradientOne } from './gradient1.svg';
// import { SampleSix } from './views/samples';
// import { SemiProdSvgOne } from './views/samples_svg';
import {
  SampleSelectMainMenu
} from './views/samples_react_icons';
import {
  SampleOne,
  SampleTwo,
  SampleThree,
  SampleCustomOne,
} from './views/samples_two.js';

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

function App() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <SampleCustomOne/>
    </div>
  );
}

export default App;
