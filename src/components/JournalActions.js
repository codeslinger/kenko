import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Button, Container} from 'semantic-ui-react';
import AddEntryForm from './AddEntryForm';

export default class JournalActions extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    recipes: PropTypes.object.isRequired,
  };

  state = {
    addEntryActive: false,
  };

  pauseEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  closeAddEntry = () => {
    if (this.state.addEntryActive) {
      this.setState({addEntryActive: false});
    }
  };

  openAddEntry = (event) => {
    if (!this.state.addEntryActive) {
      this.setState({addEntryActive: true});
    }
    this.pauseEvent(event);
  };

  renderActions() {
    let actionClassNames = classnames("journal-actions", {
      "not-visible": this.state.addEntryActive,
    });

    return (
      <Container className={actionClassNames} textAlign="center">
        <Button onClick={this.openAddEntry}>Add Entry</Button>
      </Container>
    );
  }

  renderAddEntryForm(recipes) {
    const visible = this.state.addEntryActive;

    return (
      <AddEntryForm recipes={recipes} visible={visible} onClose={this.closeAddEntry} />
    );
  }

  render() {
    const {recipes} = this.props;

    return (
      <div className="row">
        {this.renderActions()}
        {this.renderAddEntryForm(recipes)}
      </div>
    );
  }
}
