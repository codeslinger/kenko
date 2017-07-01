import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {calculateKcal} from '../util/calc';
import {Message, Grid, Icon} from 'semantic-ui-react';

export default class JournalSegmentSummary extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    recipes: PropTypes.object.isRequired,
  };

  calculateMacros(recipe, servings) {
    return {
      fat: recipe.nutrition.fat * servings,
      protein: recipe.nutrition.protein * servings,
      netCarbs: (recipe.nutrition.carbs - recipe.nutrition.fiber) * servings,
      fiber: recipe.nutrition.fiber * servings,
      kcal: calculateKcal(recipe, servings),
    };
  }

  calculateMacroSummary(entries, recipes) {
    return entries.map(
      (entry) =>
        this.calculateMacros(recipes[entry.recipeKey], entry.servings)
    ).reduce(
      (acc, n) => {
        return {
          fat: acc.fat + n.fat,
          protein: acc.protein + n.protein,
          netCarbs: acc.netCarbs + n.netCarbs,
          fiber: acc.fiber + n.fiber,
          kcal: acc.kcal + n.kcal,
        };
      },
      {fat: 0, protein: 0, netCarbs: 0, fiber: 0, kcal: 0}
    );
  }

  render() {
    const {entries, recipes} = this.props;
    const macroSummary = this.calculateMacroSummary(entries, recipes);

    return (
      <Message icon className="macro-summary">
        <Icon name="bar chart" />
        <Message.Content>
          <Grid columns={5} textAlign="center" divided stackable>
            <Grid.Row>
              <Grid.Column>{macroSummary.fat.toFixed(1)}g Fat</Grid.Column>
              <Grid.Column>{macroSummary.protein.toFixed(1)}g Protein</Grid.Column>
              <Grid.Column>{macroSummary.netCarbs.toFixed(1)}g Carbs</Grid.Column>
              <Grid.Column>{macroSummary.fiber.toFixed(1)}g Fiber</Grid.Column>
              <Grid.Column>{Math.round(macroSummary.kcal)} Kcal</Grid.Column>
            </Grid.Row>
          </Grid>
        </Message.Content>
      </Message>
    );
  }
}
