/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Person from '../components/Person';

export default class extends Component {

  render() {

	var henry = {
            name: 'Henry Miskin',
            image: 'images/team/henrym.jpg',
            about: 'Henry wants to share his passion for problem solving in engineering and computing with upcoming inventors.',
            positions : [{
                heading: 'MSc Computer Science',
                detail: ' Imperial College London'
            },{
                heading: 'BEng Mechanical Engineering',
                detail: 'University of Southampton'
            }],
            linkedin: 'https://uk.linkedin.com/in/hpgmiskin'
        };

    return (
      <div>
        <h1>Home Page</h1>
        <p>Coming soon.</p>
        <Person person={henry}/>
      </div>
    );
  }

}
