import React, {Component} from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import {calculateKcal} from '../util/calc';

const iconForConsumptionType = {
  "drink": {name: "local_drink", color: "light-blue-text"},
  "food": {name: "restaurant", color: "blue-text"},
};

class JournalEntry extends Component {
  buildDataForEntry(entry, recipes) {
    const recipe = recipes[entry.recipeKey];
    const units = pluralize(recipe.units.label, recipe.units.servingUnits * entry.servings, true);
    const kcal = calculateKcal(recipe, entry.servings);

    return {recipe: recipe, units: units, kcal: kcal};
  }

  render() {
    const {entry, recipes} = this.props;
    const data = this.buildDataForEntry(entry, recipes);
    const icon = iconForConsumptionType[data.recipe.type];
    const iconClassName = `material-icons white left-bookend ${icon.color}`;

    return (
      <div className="journal-entry white">
        <i className={iconClassName}>
          {icon.name}
        </i>
        <p className="middle">
          <span className="journal-entry-title">
            {data.recipe.label}
          </span>
          <br />
          {data.units} {data.unitLabel}
          <br/>
        </p>
        <div className="right-bookend">
          {data.kcal} Kcal
        </div>
      </div>
    );
  }
}

JournalEntry.propTypes = {
  entry: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired,
};

export default JournalEntry;
