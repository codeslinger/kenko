import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, Container, Segment, Divider} from 'semantic-ui-react';
import JournalSegmentSummary from './JournalSegmentSummary';
import JournalEntry from './JournalEntry';

export default class JournalSegment extends Component {
  static propTypes = {
    segmentDate: PropTypes.object.isRequired,
    entries: PropTypes.array.isRequired,
    recipes: PropTypes.object.isRequired,
  };

  render() {
    const {segmentDate, entries, recipes} = this.props;

    return (
      <Container>
        <Divider />
        <Header as="h2">
          {segmentDate.toDateString()}
        </Header>
        <Segment basic>
          <JournalSegmentSummary entries={entries} recipes={recipes} />
          <div className="journal-list">
            {entries.map(
              (entry, i) =>
                <JournalEntry key={i} entry={entry} recipes={recipes} />)}
          </div>
        </Segment>
      </Container>
    );
  }
}
