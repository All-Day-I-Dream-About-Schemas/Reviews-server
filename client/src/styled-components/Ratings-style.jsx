import React from 'react';
import styled from 'styled-components';



const ratings = styled.div`
  padding-top: 20px;
  box-sizing: border-box;
  h5 {
    margin: 0;
    font-size: 56px;
  }
`;

const percent = styled.div`

`;

const eachRate = styled.div`
  padding-top: 20px;
  box-sizing: border-box;
  .fourBars {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  .fourBars > span {
    display: inline-block;
    width: 24%;
    height: 5px;
    margin-right: 1%;
    background-color: #767677;
  }
  .fourBars > span:last-child {
    margin-right: 0;
  }
  img {
    position: absolute;
    top: -3px;
    left: ${props => props.pointer}%;
  }
  b {
    display: inline-block;
    font-weight: normal;
    font-size: 11px;
  }
  b:last-child {
    text-align: right;
  }
  .three > b {
    width: 33.33%;
  }
  .three > b:nth-child(2) {
    text-align: center;
  }
  .two > b {
    width: 50%;
  }
`;

export default {
  percent: percent,
  ratings: ratings,
  eachRate: eachRate,
};