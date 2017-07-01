import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Segment} from 'semantic-ui-react';
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
        <JournalSegmentSummary segmentDate={segmentDate} entries={entries} recipes={recipes} />
        <Segment>
          {entries.map((entry, i) =>
                       <JournalEntry key={i}
                                     entry={entry}
                                     recipes={recipes} />)}
        </Segment>
      </Container>
    );
  }
}
