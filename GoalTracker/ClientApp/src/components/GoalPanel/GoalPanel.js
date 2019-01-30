import React, { Component } from 'react';

export class GoalPanel extends Component {
  displayName = GoalPanel.name

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
