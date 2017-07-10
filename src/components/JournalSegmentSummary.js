import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
} from 'semantic-ui-react';
import {calculateKcal} from '../util/calc';
import MacroProgressBar from './MacroProgressBar';

export default class JournalSegmentSummary extends Component {
  static propTypes = {
    goals: PropTypes.object.isRequired,
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
    const {goals, entries, recipes} = this.props;
    const summary = this.calculateMacroSummary(entries, recipes);

    return (
      <Segment>
        <MacroProgressBar value={summary.kcal} target={goals.kcal} label="Energy" units="kcal" />
        <MacroProgressBar value={summary.fat} target={goals.fat} label="Fat" units="g" />
        <MacroProgressBar value={summary.protein} target={goals.protein} label="Protein" units="g" />
        <MacroProgressBar value={summary.netCarbs} target={goals.netCarbs} label="Net Carbs" units="g" />
        <MacroProgressBar value={summary.fiber} target={goals.fiber} label="Fiber" units="g" />
      </Segment>
    );
  }
}
