import React, { Component } from 'react'
import reactStill from './images/react.png'
import codeStill from './images/code.png'
class Articles extends Component {
  render() {
    return (
      <>
        <main>
          <article className="first-article">
            <img className="react-still" src={reactStill} alt="" />
            <h3 className="article_text">
              Hello, React <span>December 6th, 2017</span>
            </h3>
            <p className="article_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <p className="keep-read">Keep Reading</p>
          <article className="secound-article">
            <img src="codeStill" alt="" />
            <h3 className="article_text">
              Fizz Buzz <span>Novermber 15th, 2017</span>
            </h3>
            <p className="article_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <p className="keep-read">Keep Reading</p>
        </main>
      </>
    )
  }
}

export default Articles
