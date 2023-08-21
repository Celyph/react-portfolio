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
    {name: 'asdf', desc: 'some stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
    {name: 'jkl;', desc: 'more stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
    {name: 'balls', desc: 'more stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
    {name: 'eeee', desc: 'more stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
    {name: 'jkl;', desc: 'more stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
    {name: 'jkl;', desc: 'more stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
    {name: 'ooo', desc: 'more stuff', img: 'https://i0.wp.com/chemmatcars.uchicago.edu/wp-content/uploads/2021/03/default-placeholder-image-1024x1024-1.png?ssl=1'},
  ]

  return (
    <>
      {projects.map((p) => (<Project name={p.name} desc={p.desc} imgurl={p.img}/>))}
    </>
  )
}

function About() {
  const aboutMe = 'some stuff about me'
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
