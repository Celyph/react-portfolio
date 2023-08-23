import React from 'react';
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navigation() {
  return (
    <div className="navbar">
      <ul>
        <Link to='/'>About</Link>
        <Link to='/projects'>Projects</Link>
      </ul>
    </div>
  )
}

function Project({name, desc, imgurl}) {
  return (
    <div class="project">
      <h1>{name}</h1>
      <p>{desc}</p>
      <img src={imgurl} />
    </div>
  )
}

function Projects() {
  const projects = [
    {name: 'Pokemon Quiz', desc: 'A simple quiz about Pokemon that utilized JS to have a coundown timer that subtracts time if a question is answered incorrectly.', img: 'https://i.imgur.com/IBzdV8p.png'},
    {name: 'Password Generator;', desc: 'A password generator using prompts to ask for each desired aspect of said password.', img: 'https://i.imgur.com/EhRNdrd.png'},
    {name: 'Task Scheduler', desc: 'A simple task scheduler that stores user input to localstorage and displays past, current, and present times using color coding.', img: 'https://i.imgur.com/9jqJmCE.png'},
    {name: 'First Portfolio', desc: 'This is the very first portfolio, and first challenge, I made in my coding bootcamp using HTML and CSS.', img: 'https://i.imgur.com/2XgNbcd.png'}
  ]

  return (
    <>
      {projects.map((p) => (<Project name={p.name} desc={p.desc} imgurl={p.img}/>))}
    </>
  )
}

function About() {
  const aboutMe = 'MY NAME IS BRIANNA SLICER AND I AM CURRENTLY A STUDENT IN THE KU CODING BOOTCAMP, AND TECHNICAL SUPPORT FOR POSIM. I JOINED THE BOOTCAMP TO FURTHER DEVELOP MY SKILLS REGARDING CODING AND BUILD A PORTFOLIO FOR FUTURE OPPORTUNITIES. I MOST ENJOY UTILIZING HTML AND CSS TO CREATE VISUALLY PLEASING AND FUNCTIONAL WEBPAGES. MY EXPERIENCE AS A TECHNICAL SUPPORT TEAM MEMBER WITH POSIM HAS HELPED ME GAIN INFORMATION ON COMMAND LINE, MYSQL, AND HOW TO OPERATE BOTH MAC AND WINDOWS COMPUTERS. OUTSIDE OF THE BOOTCAMP AND POSIM, I ENJOY SPENDING TIME WITH MY CATS, PLAYING VIDEO GAMES AND PAINTING.'
  return (
    <>
      <p>{aboutMe}</p>
    </>
  )
}

function Main() {
  return (
    <Routes>
      <Route path='/' element={<About />}></Route>
      <Route exact path='/projects' element={<Projects />}></Route>
    </Routes>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Main />
    </>
  )
}

export default App
