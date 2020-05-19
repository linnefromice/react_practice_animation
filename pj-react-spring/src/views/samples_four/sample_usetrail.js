/*
https://blog.logrocket.com/animations-with-react-spring/
useTrail
*/

import React, { useState } from 'react';
import './sample_usetrail.css';
import { animated, useTrail } from 'react-spring';

const items = ["item One", "item Two", "item Three", "item Four", "item Five"];
const config = { mass: 3, tension: 2000, friction: 250 };

const Sample = () => {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    opacity: toggle ? 0 : 20,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    config
  });

  return (
    <div className="trails-main" onClick={() => set(state => !state)}>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={items[index]}
          className="trails-text"
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)
          }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Sample;