/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Person.scss';
import Navigation from '../Navigation';

const Avatar = require('material-ui/lib/avatar');

class Social extends Component {

  static propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string
  };

  render() {
    return (
      <li enabled={this.props.link}>
          <a href={this.props.link}><i className={'fa ' + this.props.icon}></i></a>
      </li>
    );
  }

}

class Position extends Component {

  static propTypes = {
    position: PropTypes.object
  };

  render() {
    if (!this.props.position){
      return null;
    }
    return (
      <div>
        <br/>
        <em className="large">{this.props.position.role}</em><br/>
        <strong className="large">{this.props.position.department}</strong>
        <p className="large">{this.props.position.university}</p>
      </div>
    );
  }

}

class Person extends Component {

  static propTypes = {
    person: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="team-member">
          <img src={this.props.person.image} className="img-responsive img-circle" alt="" />
          <h4 className="yellow">{this.props.person.name}</h4>
          <ul className="list-inline social-buttons">
              <Social link={this.props.person.homepage} icon="fa-home" />
              <Social link={this.props.person.twitter} icon="fa-twitter" />
              <Social link={this.props.person.facebook} icon="fa-facebook" />
              <Social link={this.props.person.linkedin} icon="fa-linkedin" />
              <Social link={this.props.person.email} icon="fa-envelope" />
          </ul>
          <Position position={this.props.person.position}/>
          <div>
              {this.props.person.positions.map(function(position,index) {
                return (
                <div key={index}>
                    <strong className="large">{position.heading}</strong>
                    <p className="large">{position.detail}</p>
                </div>
                );
              })}
              <p>{this.props.person.about}</p>
          </div>
      </div>
    );
  }

}

export default Person;
