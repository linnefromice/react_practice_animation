// https://pakatagoh.com/blog/getting-started-with-react-spring

import React from 'react';
import { animated, useSpring } from 'react-spring';

const SampleOne = () => {
  const spring = useSpring({
    from: { myXTranslateValue: 0 },
    to: { myXTranslateValue: 120 },
    config: { mass: 6 },
  });

  return (
    <animated.div
      style={{
        transform: spring.myXTranslateValue.interpolate(myXTranslateValue => `translate(${myXTranslateValue}px)`),
        display: 'inline-block',
      }}
    >
      Translated Div
    </animated.div>
  );
}

export { SampleOne }