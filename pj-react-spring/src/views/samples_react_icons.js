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
  const [focusedSubMenuIndex, setFocusedSubMenuIndex] = useState(0);

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

  const accountMenuList = [
    <RiProfileLine size="100%"/>,
    <MdWork size="100%"/>,
    <MdFreeBreakfast size="100%"/>,
  ];

  const accountMenuNameList = [
    "Profile",
    "Work Experience",
    "Hobby",
  ];

  const productMenuList = [
    <RiFlutterLine size="100%"/>,
    <RiFlutterLine size="100%"/>,
    <RiFlutterLine size="100%"/>,
    <RiVuejsLine size="100%"/>,
  ];

  const productMenuNameList = [
    "flutter / study_record_app",
    "flutter / ff_quiz_app",
    "flutter / marvel_data_app",
    "vue / vuetify_news_app",
  ];

  const linkMenuList = [
    <FaGithub size="100px"/>
  ];

  const linkMenuNameList = [
    "Github",
  ];

  const subMenuList = [
    accountMenuList,
    productMenuList,
    linkMenuList,
  ]

  const subMenuNameList = [
    accountMenuNameList,
    productMenuNameList,
    linkMenuNameList,
  ]

  return(
    <div className="wrapper">
    <div className="dummyScreen">
      <div className="wrapperMainMenu">
        {iconList.map((value, index) => {
          return (
            <div
              key={`mainMenu.${index}`}
              className="mainMenu"
              onClick={() => {
                setFocusedMenuIndex(index);
                setFocusedSubMenuIndex(0);
              }}
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
      }}>
        {iconNameList[focusedMenuIndex]}
      </h1>
      <div className="wrapperSubMenu">
        {subMenuList[focusedMenuIndex].map((value, index) => {
          return (
            <div
              key={`SubMenu.${index}`}
              className="subMenu"
              onClick={() => setFocusedSubMenuIndex(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
      <h1 style={{
        position: "absolute",
        top: "50%",
        left: "20%",
        height: "20%",
      }}>
        {subMenuNameList[focusedMenuIndex][focusedSubMenuIndex]}
      </h1>
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
