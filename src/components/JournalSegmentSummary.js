import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {calculateKcal} from '../util/calc';

class JournalSegmentSummary extends Component {
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
      (entry, i) =>
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
      <div className="journal-segment">
        <div className="journal-segment-header">{segmentDate.toDateString()}</div>
        <div className="macro-summary">
          <span>Fat: {macroSummary.fat}g</span>
          <span>Protein: {macroSummary.protein}g</span>
          <span>Net Carbs: {macroSummary.netCarbs}g</span>
          <span>Fiber: {macroSummary.fiber}g</span>
          <span>Kcal: {macroSummary.kcal}g</span>
        </div>
      </div>
    );
  }
}

JournalSegmentSummary.propTypes = {
  segmentDate: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
  recipes: PropTypes.object.isRequired,
};

export default JournalSegmentSummary;

