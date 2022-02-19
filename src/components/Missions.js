import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../components-styles/Missions.css';

const missionsList = missions
  .map((props) => (<MissionCard key={ props.name } { ...props } />));

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="Missions">
        <Title headline="Missões" />
        <div className="Missions-list">{ missionsList }</div>
      </div>
    );
  }
}

export default Missions;
