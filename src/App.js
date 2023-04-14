import {v4 as uuid} from 'uuid'

import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {word: '', wordsList: []}

  onChangeWord = event => {
    this.setState({word: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {word} = this.state
    const newWord = {
      id: uuid(),
      word,
    }

    if (word.length !== 0) {
      this.setState(prevState => ({
        word: '',
        wordsList: [...prevState.wordsList, newWord],
      }))
    }
  }

  renderNoUserInputsView = () => (
    <div className="no-results">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-results-image"
      />
    </div>
  )

  renderUserInputsView = () => {
    const {wordsList} = this.state

    return (
      <ul className="results">
        {wordsList.map(eachObj => (
          <li key={eachObj.id} className="result-item">
            <p className="result-description">
              {eachObj.word}: {eachObj.word.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {word, wordsList} = this.state

    const result =
      wordsList.length === 0
        ? this.renderNoUserInputsView()
        : this.renderUserInputsView()

    return (
      <div className="character-counter-app">
        <div className="character-counter-app-container">
          <div className="character-counter-1">
            <div className="character-counter-1-inner-1">
              <h1 className="heading-1">Count the characters like a Boss...</h1>
            </div>
            <div className="character-counter-1-inner-2">{result}</div>
          </div>
          <form className="character-counter-2" onSubmit={this.submitForm}>
            <h1 className="heading-2"> Character Counter </h1>
            <div className="character-counter-input-container">
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input"
                value={word}
                onChange={this.onChangeWord}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
