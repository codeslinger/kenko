import React, {Component} from 'react';

class TopbarNav extends Component {
  render() {
    return (
      <ul className="hide-on-med-and-down">
        <li><a href="#">Journal</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    );
  }
}

export default TopbarNav;
