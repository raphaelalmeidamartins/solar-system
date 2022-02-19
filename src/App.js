import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App-container">
          <SolarSystem />
          <Missions />
        </div>
        <Footer textContent="Projeto desenvolvido por Raphael Martins usando React" />
      </React.Fragment>
    );
  }
}

export default App;
