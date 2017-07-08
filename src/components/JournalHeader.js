import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react';
import moment from 'moment';

export default class JournalHeader extends Component {
  static propTypes = {
    date: PropTypes.object,
    onDateChange: PropTypes.func,
  };

  render() {
    const {date, onDateChange} = this.props;
    const prevDay = moment(date).subtract(1, 'day');
    const nextDay = moment(date).add(1, 'day');

    return (
      <Container className="journal-pagination-header">
        <Grid textAlign="center">
          <Grid.Row textAlign="center">
            <Grid.Column width={2} mobile={1} onClick={() => onDateChange(prevDay)}>
              <Icon link name="chevron left" />
            </Grid.Column>
            <Grid.Column width={6} mobile={10}>
              <Header as="h2">
                {date.format("ddd, MMM Do, YYYY")}
              </Header>
            </Grid.Column>
            <Grid.Column width={2} mobile={1} onClick={() => onDateChange(nextDay)}>
              <Icon link name="chevron right" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
