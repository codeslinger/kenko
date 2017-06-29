import React, {Component} from 'react';
import JournalSegment from './JournalSegment';
import PaginationFooter from './PaginationFooter';

import mockData from '../mockData';

class Journal extends Component {
  groupSegmentsByDate(data) {
    let rv = {};
    for (let item of data) {
      if (!("appliesTo" in item)) {
        continue;
      }
      let key = item.appliesTo.getTime();
      rv[key] = rv[key] || {date: item.appliesTo, entries: []};
      rv[key].entries.push(item.consumption);
    }
    // return entries grouped by date in descending order (latest date first)
    return Object.keys(rv).sort().reverse().map((key) => rv[key]);
  }

  render() {
    const recipes = mockData.recipes;
    const segments = this.groupSegmentsByDate(mockData.journalEntries);

    return (
      <div className="row">
        <div className="col s10 offset-s1 journal-area">
          {segments.map((segment, i) =>
                        <JournalSegment segmentDate={segment.date}
                                        entries={segment.entries}
                                        key={i}
                                        recipes={recipes} />)}
          <PaginationFooter />
        </div>
      </div>
    );
  }
}

export default Journal;
