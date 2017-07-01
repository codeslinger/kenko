import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {calculateKcal} from '../util/calc';
import {Container, Segment, Header} from 'semantic-ui-react';

export default class JournalSegmentSummary extends Component {
  static propTypes = {
    segmentDate: PropTypes.object.isRequired,
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
    const {segmentDate, entries, recipes} = this.props;
    const macroSummary = this.calculateMacroSummary(entries, recipes);

    return (
      <Container>
        <Header as="h2">
          {segmentDate.toDateString()}
        </Header>
        <Segment inverted color="blue">
          <span className="macro">{macroSummary.fat.toFixed(1)}g Fat</span>
          <span className="macro">{macroSummary.protein.toFixed(1)}g Protein</span>
          <span className="macro">{macroSummary.netCarbs.toFixed(1)}g Net Carbs</span>
          <span className="macro">{macroSummary.fiber.toFixed(1)}g Fiber</span>
          <span className="macro">{Math.round(macroSummary.kcal)} Kcal</span>
        </Segment>
      </Container>
    );
  }
}
