import React, { Fragment, useState } from "react";
import Card from "./Card.comp";
import styled from "styled-components";

const CardList = (props) => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <SearchBox placeholder="Search Monster" onChange={searchHandler} />
      <CardListComp>
        {props.monster
          .filter((monster) =>
            monster.name.toLowerCase().includes(search ? search : "")
          )
          .map((monster) => {
            return <Card monster={monster} key={monster.id} />;
          })}
      </CardListComp>
    </Fragment>
  );
};

export default CardList;

const CardListComp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 40px;
`;

const SearchBox = styled.input`
padding: 1rem;
border:none;
outline: none;
border-radius: 8px;
width: 260px;
&:focus {
  width: 300px;
}
`