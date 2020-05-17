import React from 'react';
// import { IconContext } from 'react-icons';
import { FaCode, FaLink, FaGithub,  } from 'react-icons/fa';
import { MdAccountCircle, MdWork, MdFreeBreakfast } from 'react-icons/md';
import { RiProfileLine, RiFlutterLine, RiVuejsLine } from 'react-icons/ri';

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

export {
  SampleAccountMenu,
  SampleProductMenu,
  SampleLinkMenu,
  SampleMainMenu
}
