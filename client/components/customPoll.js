import React from 'react'
import ReactVote from 'react-vote'
// import { Container } from '@material-ui/core'

const customPoll = () => {
  return (
    <div>
      <h1>hi from poll</h1>

      {/* if this is a component can I dispatch inside of it  */}
      <ReactVote
        // styles={customStyle}
        // text={customText}
        text="hi"
        // data={data}
        // console.log("data", data)

        onCreate={(data, diff) => {
          console.log('onCreate data', data)
          console.log('onCreate diff', diff)
        }}
        onUpvote={(data, diff) => {
          console.log('onUpvote data', data)
          console.log('onUpvote diff', diff)
        }}
        onClose={(data, diff) => {
          console.log('onClose data', data)
          console.log('onClose diff', diff)
        }}
        onEdit={data => {
          console.log('onEdit data', data)
        }}
        onReset={(data, diff) => {
          console.log('onReset data', data)
          console.log('onReset diff', diff)
        }}
        // if
        isAdmin={true}
        clientId={1}
      />
    </div>
  )
}

export default customPoll
