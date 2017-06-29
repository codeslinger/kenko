import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Topbar from './Topbar';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
