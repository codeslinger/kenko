import React, {Component} from 'react';

class JournalActions extends Component {
  render() {
    return (
      <div className="journal-actions center">
        <a className="btn blue-grey">+ Entry</a>
        <a className="btn blue-grey">+ Recipe</a>
      </div>
    );
  }
}

export default JournalActions;
