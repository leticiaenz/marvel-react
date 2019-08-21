/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import styled from "styled-components";

import { Creators as characterDetailsCreators } from "../../redux/characterDetails/types";

const HeroDetailSContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  padding: 10px;
`;
class DetailsPage extends Component {
  state = {};

  componentWillMount() {
    // use localStorage
    this.props.addCharacterDetailRequest(this.props.match.params.id);
  }

  componentWillUnmount() {
    //use localStorage newName for characters
    this.props.resetCharacterDetail();
  }

  stripedHtml(text) {
    return text.replace(/<[^>]+>/g, "");
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.hero ? (
          <HeroDetailSContainer>
            <h1>{this.props.hero.name}</h1>
            <img
              src={`${this.props.hero.thumbnail.path}.${this.props.hero.thumbnail.extension}`}
              alt={this.props.hero.name}
              width="600"
            />
            <p> {this.stripedHtml(this.props.hero.description)}</p>
            <h4>Series</h4>
            <ul>
              {this.props.hero.series.items.map((serie, index) => (
                <li key={index}>{serie.name}</li>
              ))}
            </ul>
          </HeroDetailSContainer>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const target = state.Characters.data.find(character => character.id == id);

  if (target) {
    console.log("get hero data by redux lists");
    return { hero: target };
  } else {
    console.log("get hero data by saga");
    return { hero: state.CharactersDetails };
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(characterDetailsCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
