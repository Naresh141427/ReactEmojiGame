/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    prevEmojiList: emojisList,
    score: 0,
    topScore: 0,
    selectedEmojiList: [],
    isGameEnded: false,
    result: '',
  }

  restartingGame = () => {
    this.setState(prevState => ({
      prevEmojiList: [...emojisList],
      score: 0,
      topScore: prevState.topScore,
      selectedEmojiList: [],
      isGameEnded: false,
      result: '',
    }))
  }

  shuffleAndMarkScore = id => {
    const {prevEmojiList, selectedEmojiList} = this.state
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

    this.setState({prevEmojiList: shuffledEmojisList()})

    const newlySelectedEmojis = emojisList.filter(each => each.id === id)

    if (!selectedEmojiList.includes(id)) {
      this.setState(prevState => ({
        selectedEmojiList: [
          ...prevState.selectedEmojiList,
          newlySelectedEmojis[0].id,
        ],
        score: prevState.score + 1,
      }))
    } else {
      const {score} = this.state
      if (score === emojisList.length) {
        this.setState(prevState => ({
          topScore: score > prevState.topScore ? score : prevState.topScore,
          isGameEnded: !prevState.isGameEnded,
          result: true,
        }))
      } else {
        this.setState(prevState => ({
          topScore: score > prevState.topScore ? score : prevState.topScore,
          isGameEnded: !prevState.isGameEnded,
          result: false,
        }))
      }
    }
  }

  render() {
    const {
      prevEmojiList,
      score,
      selectedEmojiList,
      topScore,
      result,
      isGameEnded,
    } = this.state
    const lastItem = selectedEmojiList[selectedEmojiList.length - 1]
    console.log(selectedEmojiList)
    return (
      <>
        <NavBar
          score={score}
          topScore={topScore}
          result={result}
          isGameEnded={isGameEnded}
        />
        <div className="app-container">
          <ul className="emojis-container">
            {!result && !isGameEnded ? (
              prevEmojiList.map(each => (
                <EmojiCard
                  emojiObject={each}
                  key={each.id}
                  shuffleAndMarkScore={this.shuffleAndMarkScore}
                  result={result}
                  isGameEnded={isGameEnded}
                  score={score}
                  topScore={topScore}
                />
              ))
            ) : (
              <EmojiCard
                result={result}
                isGameEnded={isGameEnded}
                emojiObject={emojisList[lastItem]}
                score={score}
                restartingGame={this.restartingGame}
              />
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default EmojiGame
