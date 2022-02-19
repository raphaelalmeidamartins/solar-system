import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components-styles/Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;

    return (<h2 className="Title">{ headline }</h2>);
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
