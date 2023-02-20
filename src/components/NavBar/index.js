import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, result, isGameEnded} = this.props
    return (
      <>
        {!result && !isGameEnded ? (
          <nav className="navbar-container">
            <div className="game-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                className="emoji-logo"
                alt="emoji logo"
              />
              <h1 className="game-title">Emoji Game</h1>
            </div>
            <div className="score-container">
              <p className="score">Score: {score}</p>
              <p className="score">Top Score: {topScore}</p>
            </div>
          </nav>
        ) : (
          <nav className="navbar-container-end">
            <div className="game-title-container-end">
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                className="emoji-logo"
                alt="emoji logo"
              />
              <h1 className="game-title">Emoji Game</h1>
            </div>
          </nav>
        )}
      </>
    )
  }
}

export default NavBar
