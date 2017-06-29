import React, {Component} from 'react';

class PaginationFooter extends Component {
  render() {
    return (
      <div className="pagination-area center">
        <a href="#!"><i className="material-icons left small blue-grey-text">chevron_left</i></a>
        <a href="#!"><i className="material-icons right small blue-grey-text">chevron_right</i></a>
      </div>
    );
  }
}

export default PaginationFooter;
