import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MacroProgressBar extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    target: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    units: PropTypes.string,
  };

  determineColor(disposition, percent) {
    switch (disposition) {
    case "closeness":
      return (percent >= 80) ? "green" : ((percent >= 60) ? "yellow" : "red");
    case "stayUnder":
      return (percent <= 100) ? "green" : "red";
    case "stayOver":
      return (percent > 100) ? "green" : "red";
    }
    return "blue";
  }

  render() {
    const {value, target, label, units} = this.props;
    const percent = (value / target.value) * 100;
    const roundedPercent = Math.round(percent);
    const textLabel = `${label}: ${Math.round(value)} ${units} / ${Math.round(target.value)} ${units} (${roundedPercent}%)`;
    const style = {width: `${Math.min(roundedPercent, 100)}%`};
    const color = this.determineColor(target.disposition, percent);
    const barClassNames = `bar ${color}`;
    const labelClassNames = `label ${color}`;

    return (
      <div className="pbar">
        <div className={barClassNames} style={style} />
        <div className={labelClassNames}>{textLabel}</div>
      </div>
    );
  }
}

