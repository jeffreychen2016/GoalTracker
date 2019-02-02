import React, { Component } from 'react';
import goalRequests from '../../firebaseRequests/goal';


export class GoalPanel extends Component {

  componentDidMount () {
    goalRequests.getGoal()
      .then((res) => {
        console.error(res);
      })
      .catch((err) => {
        console.error('there was an error while trying to get user goal', err)
      })
  }

  render() {

    
    return (
      <div className="form-group col-sm-6 col-sm-offset-3">
        <textarea 
          className="form-control" 
          id="exampleFormControlTextarea3" 
          rows="7"
          placeholder="Your fitness goal for the year..."
        >
        </textarea>
        <button type="button" className="btn btn-primary btn-rounded">Edit</button>
        <button type="button" className="btn btn-default btn-rounded">Delete</button>
      </div>
    );
  }
}
