require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import {Link  } from 'react-router'


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to={`/home`}>Home</Link></li>
          <li><Link to={`/about`}>About</Link></li>
          <li><Link to={`/contact`}>Contact</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
