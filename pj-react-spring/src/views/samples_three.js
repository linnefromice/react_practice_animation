// https://pakatagoh.com/blog/getting-started-with-react-spring

import React, { useState, useRef } from 'react';
import { animated, useSpring, useSprings, useTrail, useTransition, useChain, config } from 'react-spring';

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

const StaggeredBars = () => {
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
  const trailSprings = useTrail(colors.length, {
    from: { height: '0px' },
    to: { height: '80px' }
  });

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '500px' }}>
      {trailSprings.map((spring, index) => (
        <animated.div
          key={colors[index]}
          style={{
            ...spring,
            width: '20px',
            marginRight: '10px',
            transformOrigin: 'bottom',
            backgroundColor: colors[index],
          }}
        />
      ))}
    </div>
  );
}

const DisappearingComponent = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const transitions = useTransition(isDisplay, null, {
    from: { transform: `translateX(50px)`, opacity: 0 },
    enter: { transform: `translateX(0px)`, opacity: 1 },
    leave: { transform: `translateX(50px)`, opactity: 0},
  });

  return (
    <>
      <div style={{ width: '50px', height: '20px' }}>
        {transitions.map(({ item, key, props }) => (
          item
          &&
          (
            <animated.div key={key} style={{ ...props, display: 'inline-block' }}>
              Yo
            </animated.div>
          )
        ))}
      </div>
      <button onClick={() => setIsDisplay(prevState => !prevState)}>
        Click
      </button>
    </>
  )
}

const TranslateStaggersBars = () => {
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
  const [expanded, setExpanded] = useState(false);

  const springRef = useRef();
  const spring = useSpring({
    from: { transform: `translateX(80px)` },
    to: { transform: `translateX(0px)` },
    ref: springRef,
    config: config.stiff,
    reverse: expanded,
  });

  const trailRef = useRef();
  const trailSprings = useTrail(colors.length, {
    from: { height: '5px' },
    to: { height: '80px' },
    ref: trailRef,
    reverse: !expanded,
  });

  useChain(expanded ? [springRef, trailRef] : [trailRef, springRef]);

  return (
    <div style={{ height: '500px' }}>
      <animated.div
        style={{
          ...spring,
          height: '100px',
          display: 'inline-flex',
          alignItems: 'flex-end',
          marginBottom: '15px'
        }}
      >
        {trailSprings.map((trailSpring, index) => (
          <animated.div
            key={colors[index]}
            style={{
              ...trailSpring,
              width: '20px',
              marginRight: '10px',
              transformOrigin: 'bottom',
              backgroundColor: colors[index],
            }}
          />
        ))}
      </animated.div>
      <div>
        <button
          type="button"
          onClick={() => setExpanded(prevState => !prevState)}
        >
          Click to Animate
        </button>
      </div>
    </div>
  )
}

export { Translate, BarGraph, StaggeredBars, DisappearingComponent, TranslateStaggersBars }