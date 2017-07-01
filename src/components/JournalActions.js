import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    let actionClassNames = classnames("journal-actions center", {
      "not-visible": this.state.addEntryActive || this.state.addRecipeActive,
    });

    return (
      <div className={actionClassNames}>
        <a className="btn blue-grey" onClick={this.openAddEntry}>+ Entry</a>
        <a className="btn blue-grey" onClick={this.openAddRecipe}>+ Recipe</a>
      </div>
    );
  }

  renderAddEntryForm(recipes) {
    const addEntryClassNames = classnames("journal-add-entry z-depth-2", {
      "not-visible": !this.state.addEntryActive,
    });
    //const defaultAppliesTo = new Date();
    const defaultAppliesTo = "";
    const recipeKeys = Object.keys(recipes).map((key) => [key, recipes[key].label]);

    return (
      <div className={addEntryClassNames}>
        <div className="form-header">
          <a href="#" className="close-btn grey-text" onClick={this.closeAddEntry}>
            <i className="material-icons">close</i>
          </a>
          <span className="title blue-grey-text">Add a Journal Entry</span>
        </div>
        <div className="form-body">
          <form>
            <div className="row">
              <label htmlFor="what">What?</label>
              <div className="input-field col s8">
                <select id="what">
                  <option value="" disabled selected>Choose recipe</option>
                  {recipeKeys.map((v) => <option value={v[0]}>{v[1]}</option>)}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input placeholder="" id="when" type="text" value={defaultAppliesTo} />
                <label htmlFor="appliesTo">When?</label>
              </div>
              <div className="input-field col s2">
                <input placeholder="" id="amount" type="text" />
                <label htmlFor="servings">Amount</label>
              </div>
              <div className="input-field col s2">
                <select id="units">
                  <option value="units">units</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
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
