import React from 'react'

class Vote extends React.Component {
  // Initial state of the component.
  state = {vote: 0, score: 0}

  vote(type) {
    this.setState(state => ({
      vote: state.vote === type ? 0 : type
    }))
  }

  render() {
    const {vote, score} = this.state
    return (
      <main>
        <h1>{score + vote}</h1>
        <button
          id="upvote"
          className={vote === 1 ? 'active' : undefined}
          onClick={() => this.vote(1)}
        >
          Upvote
        </button>
        <button
          id="downvote"
          className={vote === -1 ? 'active' : undefined}
          onClick={() => this.vote(-1)}
        >
          Downvote
        </button>
      </main>
    )
  }
}

export default Vote
