import React from 'react'

class Vote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        {name: 'cake', votes: 0},
        {name: 'pudding', votes: 0},
        {name: 'chocolate', votes: 0},
        {name: 'cotton candy', votes: 0}
      ]
    }
  }

  vote(i) {
    let favOptions = [...this.state.options]
    favOptions[i].votes++
    function swap(array, i, j) {
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    this.setState({options: favOptions})
  }

  render() {
    return (
      <>
        <h1 className="heading">Vote!</h1>
        <div className="options">
          {this.state.options.map((opt, i) => (
            <div key={i} className="option">
              <div className="voteCount">{opt.votes}</div>
              <div className="optionName">{opt.name}</div>
              <button onClick={this.vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Vote
