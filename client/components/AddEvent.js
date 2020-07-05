import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class addEventForm extends React.Component {
  render() {
    return (
      <div className="form">
        <form>
          <label>
            Event Title:
            <input type="text" name="name" />
          </label>
          <label>
            Event description:
            <input type="text" name="name" />
          </label>
          <label>
            Event Date:
            <input type="date" date="date" />
          </label>
          <label>
            Address:
            <input type="text" address="address" />
          </label>
          <label>
            City:
            <input type="text" city="city" />
          </label>
          <label htmlFor="state">State:</label>

          <select name="state" id="state">
            <option value="NY">NY</option>
            <option value="NJ">NJ</option>
            <option value="PA">PA</option>
            <option value="FL">FL</option>
          </select>
          <label>
            Zipcode:
            <input id="zip" name="zip" type="text" pattern="[0-9]*" />
          </label>
          <label>
            Start Time:
            <input type="time" />
          </label>
        </form>
        <div>
          <Link to="/event/:id">
            <button type="submit">Create Event</button>
          </Link>
        </div>
      </div>
    )
  }
}
