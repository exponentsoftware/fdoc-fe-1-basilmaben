import React from "react";
import styled from "styled-components";

const Album = ({ album }) => {
  return (
    <Main>
      <Cover src={album.album_cover} alt="" />
      <Title>{album.album_title}</Title>
      <Artist>{album.artist}</Artist>
    </Main>
  );
};

export default Album;

const Main = styled.div`
  width: 15vw;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 20px;
  margin: 2vh 2vw;
`;
const Cover = styled.img`
  border-radius: 0.12rem;
`;

const Title = styled.span`
  margin-top: 14px;
  font-weight: 700;
  font-size: 1.3vw;
  color: #fbfbfb;
`;

const Artist = styled.span`
  margin-top: 6px;
  color: #b3b3b3;
`;
