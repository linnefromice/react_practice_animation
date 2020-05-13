import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function SampleOne() {
  const [on, toggle] = useState(false);
  const propsOne = useSpring({
    from: {opacity: 0},
    to: {opacity: 1}
  });

  return (
    <center>
      <animated.h1 style={propsOne}>I Will Fade In</animated.h1>
    </center>
  )
}

function SampleTwo() {
  const propsTwo = useSpring({
    from: { width: 0, height: 0, borderRadius: "0%", backgroundColor: "white" },
    to: { width: 80, height: 80, borderRadius: "50%", backgroundColor: "blue" }
  });

  return (
    <center>
      <animated.div style={propsTwo}>
        <div>Blue</div>
        <div>Circle</div>
      </animated.div>
    </center>
  );
}

export { SampleOne, SampleTwo };