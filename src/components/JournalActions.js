import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Button,
  Container,
  Form,
  Grid,
  Icon,
  Input,
  Segment,
  Select,
} from 'semantic-ui-react';

class JournalActions extends Component {
  static propTypes = {
    recipes: PropTypes.object.isRequired,
  };

  state = {
    addEntryActive: false,
    addRecipeActive: false,
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

  closeAddRecipe = () => {
    if (this.state.addRecipeActive) {
      this.setState({addRecipeActive: false});
    }
  };

  openAddEntry = (event) => {
    if (!this.state.addEntryActive) {
      this.setState({addEntryActive: true});
    }
    this.pauseEvent(event);
  };

  openAddRecipe = (event) => {
    if (!this.state.addRecipeActive) {
      this.setState({addRecipeActive: true});
    }
    this.pauseEvent(event);
  };

  renderActions() {
    let actionClassNames = classnames("journal-actions", {
      "not-visible": this.state.addEntryActive || this.state.addRecipeActive,
    });

    return (
      <Container className={actionClassNames}>
        <Button onClick={this.openAddEntry}>New Entry</Button>
        <Button onClick={this.openAddRecipe}>New Recipe</Button>
      </Container>
    );
  }

  renderAddEntryForm(recipes) {
    const addEntryClassNames = classnames({
      "not-visible": !this.state.addEntryActive,
    });
    const recipeOptions = Object.keys(recipes).map(
      (key, i) =>
        { return {key: i, text: recipes[key].label, value: key}; }
    );
    const unitOptions = [
      {key: 1, text: "g", value: "g"},
      {key: 2, text: "cup", value: "cup"},
      {key: 3, text: "oz", value: "oz"}
    ];
    const now = new Date();

    return (
      <Segment className={addEntryClassNames}>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="right" verticalAlign="top">
              <Icon link name="close" size="large" onClick={this.closeAddEntry} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form>
          <Form.Field control={Select} label="What?" options={recipeOptions} placeholder="Choose a recipe" />
          <Form.Field control={Input} label="When?" placeholder={now.toDateString()} />
          <Form.Group widths="equal">
            <Form.Field control={Input} label="How much?" />
            <Form.Field control={Select} options={unitOptions} label="Units" />
          </Form.Group>
          <Form.Field control={Button}>Add Entry</Form.Field>
        </Form>
      </Segment>
    );
  }

  renderAddRecipeForm() {
    let addRecipeClassNames = classnames("journal-add-recipe center", {
      "not-visible": !this.state.addRecipeActive,
    });

    return (
      <div className={addRecipeClassNames}>
        <h5>Add Recipe</h5>
        <br/>
        <a href="#" onClick={this.closeAddRecipe}><i className="material-icons">close</i></a>
      </div>
    );
  }

  render() {
    const {recipes} = this.props;

    return (
      <div className="row">
        {this.renderActions()}
        {this.renderAddEntryForm(recipes)}
        {this.renderAddRecipeForm()}
      </div>
    );
  }
}

export default JournalActions;
