import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Keyframes } from "react-spring/renderprops";

function SampleOne() {
  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1}
  });

  return (
    <animated.h1 style={props}>
      I Will Fade In
    </animated.h1>
  );
}

function SampleTwo() {
  const props = useSpring({
    from: { width: 0, height: 0, borderRadius: "0em", backgroundColor: "white" },
    to: { width: 80, height: 80, borderRadius: "5em", backgroundColor: "blue" }
  });

  return (
    <animated.div style={props}>
      <div>Blue</div>
      <div>Circle</div>
    </animated.div>
  );
}

function SampleThree() {
  const props = useSpring({
    from: { number: 0 },
    to: { number: 1 }
  });

  return (
    <animated.div>{props.number}</animated.div>
  );
}

function SampleFour() {
  const props = useSpring({
    from: { opacity: 0, color: 'red' },
    to: async (next, cancel) => {
      await next({ opacity: 1, color: 'green' });
      await next({ opacity: 0, color: 'purple' });
    }
  })

  return (
    <animated.div style={props}>I Will Fade In</animated.div>
  );
}

function SampleFive() {
  const props = useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 1, color: 'red' },
      { opacity: 0.5, color: '#008000' },
      { opacity: 0.8, color: 'black' },
      { opacity: 0, color: 'grey' },
    ]
  });

  return (
    <animated.h1 style={props}>Hello World...</animated.h1>
  );
}

function SampleSix() {
  const styles = {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    box: {
      width: 300,
      height: 300,
      borderRadius: 5,
      backgroundColor: "red",
      position: "relative",
      overflow: "hidden",
      transform: "translate3d(0, 0, 0)",
    },
    wave: {
      opacity: 0.4,
      position: "absolute",
      top: "3%",
      left: "50%",
      background: "#0af",
      width: "500px",
      height: "500px",
      marginLeft: "-250px",
      marginTop: "-250px",
      transformOrigin: "50% 48%",
      borderRadius: "43%",
    }
  }

  const container = Keyframes.Spring(async next => {
    await next({
      from: { transform: 'rotate("0deg")' },
      to: { transform: 'rotate("360deg")' }
    })
  })

  return (
    <div style={styles.main}>
      <div style={styles.box}>
        <div style={styles.wave}></div>
        <div>Capacities</div>
      </div>
    </div>
  );
}

function SampleSvgOne() {
  const waveLinePath = "M0,0 v50 q10,10 20,0 t20,0 t20,0 t20,0 t20,0 v-50 Z";

  return (
    <animated.svg width="400" height="200" viewBox="0 0 400 200">
      <path d={waveLinePath} fill="#3eba90" width="400" height="200" viewBox="0 0 400 200"/>
    </animated.svg>
  );
}

function SampleToggleOne() {
  const [on, toggle] = useState(false);
  const props = useSpring({
    from: { xy: [0, 0], c: 'green' },
    to: {
      xy: on ? [400, 200] : [0, 0],
      c: on ? 'red' : 'green',
    }
  });
  
  return (
    <div>
      <animated.h1
        style={{
          transform: props.xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
          color: props.c.interpolate(c => c)
        }}
      >
        { !on ? "I'm here" : "Now I'm over here" }
      </animated.h1>
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}

export {
  SampleOne,
  SampleTwo,
  SampleThree,
  SampleFour,
  SampleFive,
  SampleSix,
  SampleSvgOne,
  SampleToggleOne
};
