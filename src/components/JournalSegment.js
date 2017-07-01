import React, {Component} from 'react';
import PropTypes from 'prop-types';
import JournalSegmentSummary from './JournalSegmentSummary';
import JournalEntry from './JournalEntry';

class JournalSegment extends Component {
  static propTypes = {
    segmentDate: PropTypes.object.isRequired,
    entries: PropTypes.array.isRequired,
    recipes: PropTypes.object.isRequired,
  };

  render() {
    const {segmentDate, entries, recipes} = this.props;

    return (
      <div className="journal-segment">
        <JournalSegmentSummary segmentDate={segmentDate} entries={entries} recipes={recipes} />
        {entries.map((entry, i) =>
                     <JournalEntry key={i}
                                   entry={entry}
                                   recipes={recipes} />)}
      </div>
    );
  }
}


export default JournalSegment;
