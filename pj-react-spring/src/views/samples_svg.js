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

function SampleSvgFour() {
  const styles = {
    contents: {
      maxWidth: "400px",
      margin: "auto",
      backgroundColor: "green"
    },
    svgWrapper: {
      position: "relative",
      width: "100%",
      paddingTop: "100%",
      backgroundColor: "blue"
    },
    svg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "grey"
    }
  }

  return (
    <div style={styles.contents}>
      <div style={styles.svgWrapper}>
        <svg style={styles.svg} width="400" height="400" viewBox="0 0 200 200">
          <circle cx="0" cy="0" r="100" fill="lightblue" stroke="blue" />
          <circle cx="100" cy="100" r="100" fill="palegreen" stroke="green" />
          <circle cx="200" cy="200" r="100" fill="lightcoral" stroke="red" />
        </svg>
      </div>
      <div style={styles.svgWrapper}>
        <svg style={styles.svg} width="400" height="400" viewBox="0 0 400 400">
          <circle cx="0" cy="0" r="100" fill="lightblue" stroke="blue" />
          <circle cx="200" cy="200" r="100" fill="lightcoral" stroke="red" />
          <circle cx="100" cy="100" r="100" fill="palegreen" stroke="green" />
        </svg>
      </div>
      <div style={styles.svgWrapper}>
        <svg mlns='http://www.w3.org/2000/svg' style={styles.svg} viewBox="0 0 80 50">
          <path d="M0 10 C 15 20, 25 20, 40 10 S 65 0, 80 10" stroke="black" fill="transparent" />
          <path d="M0 40 C 15 50, 25 50, 40 40 S 65 30, 80 40" stroke="black" fill="transparent" />
        </svg>
      </div>
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
        one_offset: 50,
        two_start: 50,
        two_next: 50,
        two_end: 30,
        two_offset: 50,
      },
      to: { 
        one_start: 0,
        one_next: 0,
        one_end: 20,
        one_offset: 25,
        two_start: 30,
        two_next: 30,
        two_end: 50,
        two_offset: 75,
      },
    })
    await next({
      from: { 
        one_start: 0,
        one_next: 0,
        one_end: 20,
        one_offset: 25,
        two_start: 30,
        two_next: 30,
        two_end: 50,
        two_offset: 75,
      },
      to: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        one_offset: 50,
        two_start: 50,
        two_next: 50,
        two_end: 30,
        two_offset: 50,
      },
    })
    await next({
      from: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        one_offset: 50,
        two_start: 50,
        two_next: 50,
        two_end: 30,
        two_offset: 50,
      },
      to: { 
        one_start: -20,
        one_next: -20,
        one_end: 40,
        one_offset: 75,
        two_start: 10,
        two_next: 10,
        two_end: 70,
        two_offset: 75,
      },
    })
    await next({
      from: { 
        one_start: -20,
        one_next: -20,
        one_end: 40,
        one_offset: 25,
        two_start: 10,
        two_next: 10,
        two_end: 70,
        two_offset: 75,
      },
      to: { 
        one_start: 20,
        one_next: 20,
        one_end: 0,
        one_offset: 50,
        two_start: 50,
        two_next: 50,
        two_end: 30,
        two_offset: 50,
      },
    })
  }
})


function SemiProdSvgOne() {
  const root_style = {
    contents: {
      maxWidth: 800,
      maxHeight: 600,
      margin: "auto",
      backgroundColor: "green"
    },
    svgWrapper: {
      position: "relative",
      width: "100%",
      paddingTop: "100%",
    },
  }
  
  return (
    <div style={root_style.contents}>
    <div style={root_style.svgWrapper}>

    <Container
      reset
      config={{ duration: 5000 }}
    >
      {styles => (
        <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "75%", background: "linear-gradient(to bottom, palegreen 0%, white 50%, palegreen 100%)"}}>
          <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 80 60">
            <defs>
              <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="lightgreen" />
                <stop offset={`${styles.one_offset}`} stopColor="palegreen" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="white" />
                <stop offset={`${styles.two_offset}`} stopColor="palegreen" />
                <stop offset="100%" stopColor="lightgreen" />
              </linearGradient>
            </defs>
            <path fill="url(#Gradient1)" stroke="none" d={`M 0 0 L 0 10 C 15 ${styles.one_start}, 25 ${styles.one_next}, 40 10 S 65 ${styles.one_end}, 80 10 L 80 0`} />
            <path fill="url(#Gradient2)" stroke="none" d={`M 0 65 L 0 40 C 15 ${styles.two_start}, 25 ${styles.two_next}, 40 40 S 65 ${styles.two_end}, 80 40 L 80 65`} />
          </svg>
        </div>
      )}
    </Container>
    </div>
    </div>
  )
}

export { SampleSvgOne, SampleSvgTwo, SampleSvgThree, SampleSvgFour, SemiProdSvgOne };
