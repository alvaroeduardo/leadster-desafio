import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 60vh;
  background-color: #F0F8FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.span`
  padding: .5rem 1rem;
  font-size: .6rem;
  font-weight: 900;
  color: #1F76F0;
  border: 2px solid #1F76F0;
  border-radius: 1rem 1rem 1rem .2rem;
  margin: -2rem;
`;

export const PrimaryTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  background: -webkit-linear-gradient(-45deg,#2c83fb, #1f76f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: -3rem;

  &::after {
    content: url(/img/asset-header.png);
    position: relative;
    top: -2.5rem;
    left: -2rem;
  }
`;

export const SecondaryTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: #1C3C50;
`;