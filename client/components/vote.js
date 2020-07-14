import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Typography} from '@material-ui/core'
import {getPoll} from '../store/poll'
import {connect} from 'react-redux'

// this is a template for user vote component that is being refactored
class Vote extends React.Component {
  componentDidMount() {
    this.props.getPoll(this.props.match.params.pollId)
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
    console.log('PROPS', this.props)
    const options = this.props.options || []
    return (
      <div>
        <div className="profile">
          <Typography color="primary" variant="h3" size="large">
            Event Poll: {this.props.currPoll.title}
          </Typography>
        </div>
        <h3 className="heading">Vote Now!</h3>
        <div className="options">
          {options.map((opt, i) => (
            <div key={opt.id} className="option">
              <div className="voteCount">{opt.votes}</div>
              <div className="optionName">{opt.title}</div>
              <button type="button" onClick={this.vote.bind(this, i)}>
                Click Here
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currPoll: state.poll.poll,
  options: state.poll.poll.options
})
const mapDispatchToProps = dispatch => ({
  getPoll: id => dispatch(getPoll(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
