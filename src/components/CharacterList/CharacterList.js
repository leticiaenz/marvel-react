import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CharacterListItem from "../CharacterListItem/CharacterListItem";
import Loader from "../../components/Loader/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterList = props => {
  return (
    <Container data-testid="characterlist-container">
      {!props.loading ? (
        props.characters.map(character => (
          <CharacterListItem key={character.id} {...character} />
        ))
      ) : (
        <Loader />
      )}
    </Container>
  );
};

function mapStateToProps(state) {
  console.log(state.Characters);
  return {
    characters: state.Characters.data,
    loading: state.Characters.loading
  };
}

export default connect(mapStateToProps)(CharacterList);
