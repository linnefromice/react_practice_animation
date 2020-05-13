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

export default SampleOne;