import React, { Component } from 'react'
import hectorsEmoji from './images/Hectors_emoji.png'
class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <img className="img-me" src={hectorsEmoji} alt="cartoonMe" />
        <section className="hi-i-am sb3">
          <h2 className=" hector-text"> Hi, I'm Hector L. Velez!</h2>
          <p className="jr-front-end-text">
            I'm a Jr.Front End Engineer in St. Petersburg, Fl.
          </p>
        </section>
      </header>
    )
  }
}

export default Header
