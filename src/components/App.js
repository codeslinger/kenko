import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Topbar from './Topbar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return (
      <div>
        <Topbar />
        {this.props.children}
      </div>
    );
  }
}
