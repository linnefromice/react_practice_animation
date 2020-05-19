/*
https://blog.logrocket.com/animations-with-react-spring/
useSpring
*/

import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import './sample_usespring.css';

const Sample = () => {
  const [greetingStatus, displayGreeting] = useState(false);
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500,
  });

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={() => displayGreeting(prevState => !prevState)}>
          Click Here
        </button>
      </div>
      {!greetingStatus ? (
        <div className="Intro">Click button below</div>
      ) : (
        <animated.div className="box" style={contentProps}>
          <h1>Hey there! React Spring is awesome.</h1>
        </animated.div>
      )}
    </div>
  )
}

export default Sample;