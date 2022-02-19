import React, { Component } from 'react';
import '../components-styles/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { textContent } = this.props;

    return (
      <footer className="Footer">
        <p>{ textContent }</p>
      </footer>
    );
  }
}

Footer.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default Footer;
