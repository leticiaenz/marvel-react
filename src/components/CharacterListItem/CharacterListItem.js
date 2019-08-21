import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 380px;
`;

const stripedHtml = text => {
  return text.replace(/<[^>]+>/g, "");
};

const charactersListItem = props => (
  <Card data-testid="characterlistitem-container">
    <h2>{props.name}</h2>
    <img
      src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
      alt="hero imagem"
      height="350"
    />
    <p>{stripedHtml(props.description)}</p>
    <Link to={`/details/${props.id}`}>
      <Button>Details</Button>
    </Link>
  </Card>
);

charactersListItem.defaultProps = {
  name: "default",
  thumbnail: {
    path: "image",
    extension: "jpg"
  }
};

export default charactersListItem;
