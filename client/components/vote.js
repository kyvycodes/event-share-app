import React from 'react'
import ReactDOM from 'react-dom'

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
// class Vote extends React.Component {
//   // Initial state of the component.
//   state = {vote: 0, score: 0}

//   // Method to change the state of the component, which the UI reflects "live".
//   vote(type) {
//     this.setState(state => ({
//       vote: state.vote === type ? 0 : type
//     }))
//   }

//   // How the UI should look based on the state.
//   render() {
//     const {vote, score} = this.state
//     return (
//       <main>
//         <h1>{score + vote}</h1>
//         <button
//           id="upvote"
//           className={vote === 1 ? 'active' : undefined}
//           onClick={() => this.vote(1)}
//         >
//           Upvote
//         </button>
//         <button
//           id="downvote"
//           className={vote === -1 ? 'active' : undefined}
//           onClick={() => this.vote(-1)}
//         >
//           Downvote
//         </button>
//       </main>
//     )
//   }
// }

export default Vote
