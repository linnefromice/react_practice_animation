import React from 'react';
import { Keyframes } from "react-spring/renderprops";

function SampleSvgOne() {
  return (
    <div style={{width: 500, height: 200, background: 'linear-gradient(to bottom right, #de350b, #0065ff)'}}>
      <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 64 64">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ad3" />
            <stop offset="50%" stopColor="#add" />
          </linearGradient>
        </defs>
        <path d='M0 10 C30 28 38 0 64 10 L64 0 L0 0 Z' fill="url(#grad)"/>
      </svg>
    </div>
  )
}

function SampleSvgTwo() {
  return (
    <div style={{width: 500, height: 200, backgroundColor: "grey"}}>
      <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 64 64">
        <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
      </svg>
    </div>
  )
}

function SampleSvgThree() {
  return (
    <div style={{width: 500, height: 400, backgroundColor: "grey"}}>
      <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 80 80">
        <path d="M0 10 C 15 20, 25 20, 40 10 S 65 0, 80 10" stroke="black" fill="transparent" />
        <path d="M0 40 C 15 50, 25 50, 40 40 S 65 30, 80 40" stroke="black" fill="transparent" />
      </svg>
    </div>
  )
}

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        two_start: 50,
        two_next: 50,
        two_end: 30,
      },
      to: { 
        one_start: 0,
        one_next: 0,
        one_end: 20,
        two_start: 30,
        two_next: 30,
        two_end: 50,
      },
    })
    await next({
      from: { 
        one_start: 0,
        one_next: 0,
        one_end: 20,
        two_start: 30,
        two_next: 30,
        two_end: 50,
      },
      to: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        two_start: 50,
        two_next: 50,
        two_end: 30,
      },
    })
    await next({
      from: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        two_start: 50,
        two_next: 50,
        two_end: 30,
      },
      to: { 
        one_start: -20,
        one_next: -20,
        one_end: 40,
        two_start: 10,
        two_next: 10,
        two_end: 70,
      },
    })
    await next({
      from: { 
        one_start: -20,
        one_next: -20,
        one_end: 40,
        two_start: 10,
        two_next: 10,
        two_end: 70,
      },
      to: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        two_start: 50,
        two_next: 50,
        two_end: 30,
      },
    })
  }
})

function SampleSvgFour() {
  return (
    <Container
      reset
      config={{ duration: 5000 }}
    >
      {styles => (
        <div style={{width: 500, height: 400, backgroundColor: "grey"}}>
          <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 80 80">
            <path d={`M0 10 C 15 ${styles.one_start}, 25 ${styles.one_next}, 40 10 S 65 ${styles.one_end}, 80 10`} stroke="black" fill="transparent" />
            <path d={`M0 40 C 15 ${styles.two_start}, 25 ${styles.two_next}, 40 40 S 65 ${styles.two_end}, 80 40`} stroke="black" fill="transparent" />
          </svg>
        </div>
      )}
    </Container>
  )
}

export { SampleSvgOne, SampleSvgTwo, SampleSvgThree, SampleSvgFour };
