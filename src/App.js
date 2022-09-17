import logo from './logo.svg';
import ComponentProfil from './Profile/ComponentProfil';
import './App.css';
import React from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <ComponentProfil  fullName='Imen Charfi' ><img src='./image-profile.jpg' className="App-logo" alt="logo" /></ComponentProfil>
        <ComponentProfil  bio='lorem ipsum'  />
        <ComponentProfil  profession='Front-End Developper'  />
      </header>
    
    </div>
  );
}

export default App;
