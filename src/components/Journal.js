import React, {Component} from 'react';
import {
  Container,
} from 'semantic-ui-react';
import moment from 'moment';
import JournalActions from './JournalActions';
import JournalSegment from './JournalSegment';
import JournalHeader from './JournalHeader';
import {getSegmentsForDate} from '../util/calc';

import mockData from '../mockData';

export default class Journal extends Component {
  state = {
    date: moment("2017-06-28"),
  };

  onDateChange = (date) => {
    console.log("onDateChange called");
    this.setState({date: date});
  };

  render() {
    const date = this.state.date;
    const recipes = mockData.recipes;
    const segment = getSegmentsForDate(date, mockData.journalEntries);
    const entries = (segment) ? segment.entries : [];

    return (
      <Container text>
        <JournalHeader date={date} onDateChange={this.onDateChange} />
        <JournalActions recipes={recipes} date={date} />
        <JournalSegment date={date} entries={entries} recipes={recipes} />
      </Container>
    );
  }
}
