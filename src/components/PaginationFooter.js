import React, {Component} from 'react';
import {Container, Divider, Grid, Icon} from 'semantic-ui-react';

class PaginationFooter extends Component {
  render() {
    return (
      <Container>
        <Divider />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Icon link name="chevron left" />
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Icon link name="chevron right" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default PaginationFooter;
