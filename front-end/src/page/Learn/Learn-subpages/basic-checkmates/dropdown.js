import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { 
    Image,
    Grid,
 } from 'semantic-ui-react';
 import "./style.css";

const imgsrc = '/img/chesslogoQueen.png';

const Main = styled("div")`
  background: #000000;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 20em;
  margin: 0 auto;
  border: 1px solid white;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: white;
  
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 20em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: teal;
    cursor: pointer;
  }
`;


const options = ["Smothered", "Back Rank", "Scholars", "Fools", "Mate with Queen and King", "Mate with two Rooks", "Mate with King and Rook"];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <h1 style={{color: "teal"}}>Basic Checkmates</h1>
      <DropDownContainer style={{position:"relative", top: "100px"}}>
        <DropDownHeader class="click" onClick={toggling}>
          {selectedOption || "Basic Checkmates"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <Grid.Column width={3} style={{position: 'relative', right: '0px', top: '0px'}}>
            <Image src={imgsrc} size='small' verticalAlign='top' as={Link} to='/'/>
        </Grid.Column>

        <div class="infotext">
            <p>Text about the checkmates</p>
        </div>

    </Main>
  );
}

