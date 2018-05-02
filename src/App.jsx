import React, { Component } from 'react';

import Show from './Show'

class App extends Component {
  render() {
    const {shows} = this.props

    return (
      <div>
        sortieren: <a href="">ohne</a> <a href="">alphabetisch aufwärts</a> <a href="">alphabetisch abwärts</a><br />
        filter: <a href="">nur must-see</a> <a href="">alle</a><br />
        <br />

        {shows.map(entry => <Show key={entry.id} {...entry} />)}
        <br />
        powered by <a href="http://www.serienempfehlung.de">serienempfehlung.de</a>
      </div>
    );
  }
}

export default App;
