import React from "react";
import Album from "./Album";
import styled from 'styled-components'

const Albums = ({ albums }) => {
  return (
    <Container>
      {albums.map((album) => (
        <Album album={album} />
      ))}
    </Container>
  );
};

export default Albums;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`