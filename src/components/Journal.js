import React, {Component} from 'react';
import JournalActions from './JournalActions';
import JournalSegment from './JournalSegment';
import PaginationFooter from './PaginationFooter';
import {Container} from 'semantic-ui-react';

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
      <Container text>
        <JournalActions recipes={recipes} />
        {segments.map((segment, i) =>
                      <JournalSegment segmentDate={segment.date}
                                      entries={segment.entries}
                                      key={i}
                                      recipes={recipes} />)}
        <PaginationFooter />
      </Container>
    );
  }
}

export default Journal;
