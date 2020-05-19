// https://pakatagoh.com/blog/getting-started-with-react-spring

import React from 'react';
import { animated, useSpring, useSprings } from 'react-spring';

const Translate = () => {
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

const BarGraph = () => {
  const bars = [
    {
      key: 'bar1', color: 'green',
      from: { width: '0px' },
      to: { width: '100px' },
      config: { mass: 20 }
    },
    {
      key: 'bar2', color: 'blue',
      from: { width: '0px' },
      to: { width: '250px' },
      config: { mass: 30 },
    },
    {
      key: 'bar3', color: 'red',
      from: { width: '0px' },
      to: { width: '150px' },
      config: { mass: 13 },
    },
  ];

  const springs = useSprings(
    bars.length,
    bars.map(({ color, key, ...config }) => config)
  );

  return springs.map((spring, index) => (
    <animated.div
      key={bars[index].key}
      style={{
        ...spring,
        height: '20px',
        marginBottom: '10px',
        backgroundColor: bars[index].color,
      }}
    />
  ));
}

export { Translate, BarGraph }