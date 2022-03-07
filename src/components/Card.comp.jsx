import React from "react";
import styled from "styled-components";

const Card = (props) => {
  
const imgUrl = `https://robohash.org/${props.monster.id}?set=set2`;
  return (
    <CardComp>
      <RoboImg src={imgUrl} alt="monster" />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </CardComp>
  );
};

export default Card;

const CardComp = styled.div`
  padding: 2rem;
  background-color: lightblue;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  justify-content: center;
`;

const RoboImg = styled.img`
width: 180px;
height: 180px;
`
