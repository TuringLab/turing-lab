/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Person.scss';
import Navigation from '../Navigation';

class Person extends Component {

  static propTypes = {
    name: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="Person">
        {this.props.name}
      </div>
    );
  }

}

export default Person;
