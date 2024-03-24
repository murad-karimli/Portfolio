import React from 'react';
import About from './Components/About';
import Nav from './Components/Nav';
import Resume from './Components/Resume';
import Work from './Components/Projects';
import Tech from './Components/Tech';
import Contact from './Components/Contact';
import Cyber from './Components/Cyber';
import Stipendium from './Components/Elte';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">

      <Nav/>
      <Header/>
      <About/>
      <Cyber/>
      <Stipendium/>
      <Resume/>
      <Work/>
      <Tech/>
      <Contact/>
    </div>
  );
}

export default App;
