import React from 'react';
import styled from 'styled-components';

const greenBox = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2ada71;
`;

const overallRate = styled.div`
  font-size: 56px;
  font-weight: bold;
  padding: 0 15px 0 0;
`;

const stars = styled.div`
  font-size: 16px;
`;

const showing = styled.div`
  display: inline;
`;

const totalReviews = styled.div`
  font-size: 16px;
  margin: 8px 0 0 0;
`;

const ratingBreakdown = styled.div`
  padding: 15px 0 20px 0;
  font-size: 18px;
  text-transform: uppercase;
`;

const buttons = styled.div`
  box-sizing: border-box;
  padding-top: 10px;
  .barBox {
    display: inline-block;
    width: 77%;
    padding-left: 10px;
    box-sizing: border-box;
  }
  button {
    width: 21%;
  }
`;

const breakdown = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  .showing_reviews {
    display: inline;
  }
  button {
    border: none;
    background-color: white;
    margin: 0 3px 0 0;
    padding: 3px 0;
    box-sizing: border-box;
    text-decoration: underline;
  }
  button:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
  i {
    display: inline-block;
    font-style: normal;
    font-size: 11px;
    width: 10%;
    text-align: right;
  }
`;

const greyBar = styled.span`
  position: relative;
  display: inline-block;
  height: 5px;
  width: 90%;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #767677;

  span {
    position: absolute;
    top: 0;
    width: ${props => props.greenBar}%;
    height: 100%;
    background: #2ada71;
    display: inline-block;
  }
`;

export default {
  greenBox: greenBox,
  breakdown: breakdown,
  greyBar: greyBar,
  overallRate: overallRate,
  stars: stars,
  totalReviews: totalReviews,
  ratingBreakdown: ratingBreakdown,
  showing: showing,
  buttons: buttons,
};
