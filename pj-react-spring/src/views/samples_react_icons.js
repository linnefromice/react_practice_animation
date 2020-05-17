import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaCode, FaLink, FaGithub,  } from 'react-icons/fa';
import { MdAccountCircle, MdWork, MdFreeBreakfast } from 'react-icons/md';
import { RiProfileLine, RiFlutterLine, RiVuejsLine } from 'react-icons/ri';
import './samples_react_icons.scss';

function SampleAccountMenu() {
  return(
    <div>
      <RiProfileLine size="100px"/>
      <MdWork size="100px"/>
      <MdFreeBreakfast size="100px"/>
    </div>
  )
}

function SampleProductMenu() {
  return(
    <div>
      <RiFlutterLine size="100px"/>
      <RiFlutterLine size="100px"/>
      <RiFlutterLine size="100px"/>
      <RiVuejsLine size="100px"/>
    </div>
  )
}

function SampleLinkMenu() {
  return(
    <div>
      <FaGithub size="100px"/>
    </div>
  )
}

function SampleMainMenu() {
  return(
    <div>
      <MdAccountCircle size="200px"/>
      <FaCode size="200px"/>
      <FaLink size="200px"/>
    </div>
  )
}

function SampleSelectMainMenu() {
  const [focusedMenuIndex, setFocusedMenuIndex] = useState(0);

  const iconList = [
    <MdAccountCircle size="100%"/>,
    <FaCode size="100%"/>,
    <FaLink size="100%"/>,
  ];

  const iconNameList = [
    "Account Information",
    "Product(private)",
    "Links",
  ];

  return(
    <div className="wrapper">
    <div className="dummyScreen">
      <div className="wrapperMainMenu">
        {iconList.map((value, index) => {
          return (
            <div
              key={`mainMenu.${index}`}
              className="mainMenu"
              onClick={() => setFocusedMenuIndex(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
      <h1 style={{
        position: "absolute",
        top: "30%",
        left: "0",
        width: "100%",
        height: "20%",
      }}>{iconNameList[focusedMenuIndex]}</h1>
    </div>
    </div>
  )
}

export {
  SampleAccountMenu,
  SampleProductMenu,
  SampleLinkMenu,
  SampleMainMenu,
  SampleSelectMainMenu
}
