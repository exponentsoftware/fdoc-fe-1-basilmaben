import React, { useState } from "react";
import Album from "./Album";
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Albums = ({ data, filter }) => {
  const [input, setInput] = useState("")
  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="search" placeholder onChange={searchHandler} />
        <button onClick={() => filter(input)}>Search</button>
      </div>
    <Container>
      {data.map(album => (
          <Link to={`/albums/${album.id}`}><Album album={album} /></Link>
      ))}
    </Container>
    </>
  );
};

export default Albums;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`