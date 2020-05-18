// https://alligator.io/react/advanced-react-spring/

import React, { useState } from 'react';
import { animated, useTransition, useSprings, useTrail } from 'react-spring';

const SampleOne = () => {
  const [on, toggle] = useState(false);

  const transition = useTransition(on, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => {
        console.log(item);
        console.log(key);
        console.log(props);
        return (
          item
          &&
          (
            <animated.div style={props}>
              Hello world
            </animated.div>
          )
        )
      })}
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}

const SampleCustomOne = () => {
  const [focused, setFocused] = useState(0);
  const listStyle = (index) => {
    const x = 50 * index;
    return (
      { 
        flexDirection: "row",
        transform: `translate3d(-${x}px, 0, 0)`,
      }
    )
  }

  return (
    <div style={listStyle(focused)}>
      {["A", "B", "C", "D", "E"].map((value, index, array) => {
        console.log(value);
        console.log(index);
        console.log(array);
        
        if (index === focused) {
          return (
            <div>
              <div style={{ color: "red"}}>{value}</div>
              <button onClick={() => setFocused(index)}>Button</button>
            </div>
          );
        } else {
          return (
            <div>
              <div>{value}</div>
              <button onClick={() => setFocused(index)}>Button</button>
            </div>
          );
        }
      })}
      <div>{focused}</div>
    </div>
  );
}

const SampleTwo = () => {
  const [on, toggle] = useState(false);

  const items = [
    { color: 'red', opacity: .5 },
    { color: 'blue', opacity: 1 },
    { color: 'green', opacity: .2 },
    { color: 'orange', opacity: .8}
  ];

  const springs = useSprings(items.length, items.map(item => ({
    from: { color: '#fff', opacity: 0 },
    to: {
      color: on ? item.color : '#fff',
      opacity: on ? item.opacity : 0
    }
  })));

  return (
    <div>
      {springs.map(animation => (
        <animated.div style={animation}>Hello World</animated.div>
      ))}
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}

const SampleThree = () => {
  const [on, toggle] = useState(false);
  const springs = useTrail(5, {
    to: { opacity: on ? 1 : 0},
    config: { tension: 250 }
  });

  return (
    <div>
      {springs.map((animation, index) => {
        return (
          <animated.div style={animation} key={index}>
            Hello World
          </animated.div>
        );
      })}

      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}

export {
  SampleOne,
  SampleCustomOne,
  SampleTwo,
  SampleThree
};
