import React, { Component } from 'react'
import Header from './components/Header'
import GameStills from './components/gameStills'
import Articles from './components/articles'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <GameStills />
        <Articles />
        <Footer />
      </>
    )
  }
}

export default App
