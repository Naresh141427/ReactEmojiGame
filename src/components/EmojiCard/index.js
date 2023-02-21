import './index.css'

const EmojiCard = props => {
  const {
    emojiObject,
    shuffleAndMarkScore,
    result,
    isGameEnded,
    score,
    restartingGame,
  } = props
  const {id, emojiUrl, emojiName} = emojiObject

  const resultImageUrl = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const results = result ? 'Won' : 'Lose'
  const scoreText = score < 12 ? 'Score' : 'Best Score'

  const onClickingEmoji = () => {
    shuffleAndMarkScore(id)
  }

  const onClickingPlayAgain = () => restartingGame()

  return (
    <div>
      {!result && !isGameEnded ? (
        <li className="emoji-item">
          <button type="button" className="btn" onClick={onClickingEmoji}>
            <img src={emojiUrl} className="emoji" alt={emojiName} />
          </button>
        </li>
      ) : (
        <div>
          <div className="app-container">
            <div className="lose-container">
              <div className="result-score-container">
                <h1 className="game-result">You {results}</h1>
                <p className="score-text">{scoreText}</p>
                <p className="total-score">{score}/12</p>
                <button
                  type="button"
                  className="play-again"
                  onClick={onClickingPlayAgain}
                >
                  Play Again
                </button>
              </div>
              <img
                src={resultImageUrl}
                className="lose-image"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmojiCard
