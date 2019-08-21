import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";

const Field = ({ component, ...props }) => <input {...props} />;

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div data-testid="searchbar-container">
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={this.props.onChange}
          data-testid="SearchBar"
        />
      </div>
    );
  }
}

export default SearchBar;
