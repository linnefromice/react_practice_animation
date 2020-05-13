import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

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
    from: { width: 0, height: 0, borderRadius: "0%", backgroundColor: "white" },
    to: { width: 80, height: 80, borderRadius: "50%", backgroundColor: "blue" }
  });

  return (
    <animated.div style={props}>
      <div>Blue</div>
      <div>Circle</div>
    </animated.div>
  );
}

export { SampleOne, SampleTwo };