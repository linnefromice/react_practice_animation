/*
https://blog.logrocket.com/animations-with-react-spring/
Render-props API
*/

import React from 'react';
import { Spring, Trail } from 'react-spring/renderprops';

const items = ["item One", "item Two", "item Three", "item Four", "item Five"];

const Sample = () => {
  return (
    <div style={{ flexDirection: "column" }}>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <div style={props}>
            Hello
          </div>
        )}
      </Spring>
      <Trail
        items={items}
        keys={item => item.key}
        from={{ transform: 'translate3d(0, 40px, 0)' }}
        to={{ transform: 'translate3d(0, 0px, 0)'}}
      >
        {item => (
          props => (
            <div style={props}>{item}</div>
          )
        )}
      </Trail>
    </div>
  )
}

export default Sample;