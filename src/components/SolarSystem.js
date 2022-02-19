import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../components-styles/SolarSystem.css';

const planetList = planets
  .map(({ name, image }) => (
    <PlanetCard key={ name } planetName={ name } planetImage={ image } />
  ));

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" />
        <div className="SolarSystem-planetsContainer">{ planetList }</div>
      </div>
    );
  }
}

export default SolarSystem;
