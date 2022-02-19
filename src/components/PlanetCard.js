import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components-styles/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <section className="PlanetCard" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <div>
          <img
            className={ `Image-${planetName}` }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
