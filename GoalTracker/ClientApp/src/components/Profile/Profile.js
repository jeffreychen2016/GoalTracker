import React, { Component } from 'react';
import { GoalPanel } from '../GoalPanel/GoalPanel';

export class Profile extends Component {
  displayName = Profile.name

  render() {
    return (
      <div>
        <h1 className="text-center">User Profile</h1>
        <GoalPanel />
      </div>
    );
  }
}
