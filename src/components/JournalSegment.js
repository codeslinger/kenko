import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Icon,
  Message,
  Segment,
} from 'semantic-ui-react';
import JournalSegmentSummary from './JournalSegmentSummary';
import JournalEntry from './JournalEntry';

export default class JournalSegment extends Component {
  static propTypes = {
    goals: PropTypes.object.isRequired,
    entries: PropTypes.array.isRequired,
    recipes: PropTypes.object.isRequired,
  };

  render() {
    const {goals, entries, recipes} = this.props;
    let renderedEntries = (
      <Message icon>
        <Icon name="attention" />
        <Message.Content>
          <Message.Header>No journal entries found</Message.Header>
          Did you eat anything?
        </Message.Content>
      </Message>
    );
    if (entries.length > 0) {
      renderedEntries = entries.map(
        (entry, i) =>
          <JournalEntry key={i} entry={entry} recipes={recipes} />
      );
    }

    return (
      <Container>
        <Segment basic>
          <div className="journal-list">
            {renderedEntries}
          </div>
          {entries.length > 0 &&
            <JournalSegmentSummary goals={goals} entries={entries} recipes={recipes} />}
        </Segment>
      </Container>
    );
  }
}
