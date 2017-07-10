import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Form,
  Grid,
  Icon,
  Segment,
} from 'semantic-ui-react';

export default class AddEntryForm extends Component {
  static propTypes = {
    recipes: PropTypes.object.isRequired,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    visible: true,
    onClose: null,
  };

  state = {
    what: -1,
    amount: 1,
    units: null,
    unitsVisible: false,
  };

  clearForm = () => this.setState({what: -1, amount: 0, units: '', unitsVisible: false});

  handleChange = (e, {name, value}) => this.setState({[name]: value});

  handleWhatChange = (e, {name, value}) => this.setState({[name]: value, unitsVisible: true});

  handleSubmit = () => this.clearForm();

  onClose = () => {
    if (this.props.onClose()) {
      this.props.onClose();
    }
    this.clearForm();
  };

  recipeOptions = (recipes) => Object.keys(recipes).map(
    (key, i) => {
      return {
        key: i,
        text: recipes[key].label,
        value: key
      };
    }
  );

  recipeUnits = (recipes, key, units) => {
    if (key === -1) {
      return {unitOptions: [], defaultUnit: null};
    }
    let unitValue = units;
    if (!unitValue) {
      unitValue = 'oz';
    }
    return {
      unitOptions: [
        {key: 1, text: "g", value: "g"},
        {key: 2, text: "cup", value: "cup"},
        {key: 3, text: "oz", value: "oz"},
      ],
      unitValue: unitValue,
    };
  };

  render() {
    const {what, amount, units, unitsVisible} = this.state;
    const {recipes, visible} = this.props;
    const classNames = classnames({"not-visible": !visible});
    const recipeOptions = this.recipeOptions(recipes);
    const {unitOptions, unitValue} = this.recipeUnits(recipes, what, units);

    return (
      <Segment className={classNames}>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="right" verticalAlign="top">
              <Icon link name="close" size="large" onClick={this.onClose} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Select label="Search"
                         name="what"
                         value={what}
                         search
                         scrolling
                         noResultsMessage="No results found. Try another search."
                         placeholder="Search foods"
                         options={recipeOptions}
                         onChange={this.handleWhatChange} />
          </Form.Group>
          {unitsVisible &&
            <Form.Group widths="equal">
              <Form.Input label="How much?"
                          name="amount"
                          value={amount}
                          onChange={this.handleChange} />
              <Form.Select label="&nbsp;"
                           name="units"
                           value={unitValue}
                           options={unitOptions}
                           onChange={this.handleChange} />
            </Form.Group>
          }
          <Form.Button>Add</Form.Button>
        </Form>
      </Segment>
    );
  }
}
