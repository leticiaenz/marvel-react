import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import CharacterList from "../../components/CharacterList/CharacterList";

import { Creators as CharacterCreators } from "../../redux/characters/types";

class Home extends Component {
  handleSearch = e => {
    this.props.addCharacterRequest(e.target.value);
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <SearchBar onChange={this.handleSearch} />
        <CharacterList />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CharacterCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
