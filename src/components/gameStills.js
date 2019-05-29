import React, { Component } from 'react'
import oneList from './images/one-list.png'
import makeRain from './images/make-it-rain.png'
import bombSniffer from './images/bomb-sniffer.png'
import senseiSense from './images/sensei-sense.png'

class GameStills extends Component {
  render() {
    return (
      <>
        <section className="game-stills">
          <img className="game-img" src={oneList} alt="" />
          <img className="game-img" src={makeRain} alt="" />
          <img className="game-img" src={bombSniffer} alt="" />
          <img className="game-img" src={senseiSense} alt="" />
        </section>
      </>
    )
  }
}

export default GameStills
