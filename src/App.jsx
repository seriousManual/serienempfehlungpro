import React, { Component } from 'react';

import Show from './Show'
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()

    this.state = {
      filter: null,
      order: null
    }
  }

  render() {
    return (
      <div>
        powered by <a href="http://www.serienempfehlung.de">serienempfehlung.de</a><br />
        <br />
        <Buttons 
          onOrder={order => this.setState({order})}
          onFilter={filter => this.setState({filter})}
          {...this.state}
        />

        <br />

        {this._getShows().map(entry => <Show key={entry.id} {...entry} />)}
      </div>
    );
  }

  _getShows() {
    let shows = this.props.shows.concat([])
      
    if (this.state.filter) {
      shows = this.props.shows.filter(entry => entry.faved)
    }

    if (this.state.order) {
      shows.sort(sorterGetter(this.state.order))
    }

    return shows
  }
}

function sorterGetter(order) {
  if (order === 'alpha') return alphaSort
  if (order === '-alpha') return alphaMinusSort
  if (order === 'mustsee') return mustSeeSort
  
  return () => 0
}

function alphaSort(a, b) {
  return a.title.localeCompare(b.title)
}

function alphaMinusSort(a, b) {
  return alphaSort(a, b) * -1
}

function mustSeeSort(a, b) {
  if (a.faved && b.faved) return alphaSort(a, b)
  if (a.faved) return -1
  if (b.faved) return 1

  return alphaSort(a, b)
}

export default App;
