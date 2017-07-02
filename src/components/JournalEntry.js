import React, {Component} from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import {calculateKcal} from '../util/calc';
import {Icon} from 'semantic-ui-react';

const iconForConsumptionType = {
  "drink": "coffee",
  "food": "food",
};

export default class JournalEntry extends Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,
    recipes: PropTypes.object.isRequired,
  };

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

    return (
      <div className="entry">
        <div className="icon-label">
          <Icon name={icon} />
        </div>
        <div className="content">
          <a href="#" className="header">{data.recipe.label}</a>
          <br/>
          <Icon name="chevron down" />
          <span>{data.units} {data.unitLabel}</span>
        </div>
        <div className="extra">
          <span>{Math.round(data.kcal)} Kcal</span>
        </div>
      </div>
    );
  }
}
