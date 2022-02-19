import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components-styles/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section data-testid="mission-card" className="MissionCard">
        <header>
          <h3 data-testid="mission-name">{ name }</h3>
        </header>
        <div>
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
