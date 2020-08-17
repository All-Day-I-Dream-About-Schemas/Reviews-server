import React from 'react';
import styled from 'styled-components';

const review = styled.div`
  border-bottom: 2px solid #777;
  padding: 50px 0;
`;

const star = styled.div`
  display: inline-block;
  width: 50%;
`;

const date = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
`;

const helpful = styled.div`
  span {
    margin-right: 15px;
  }
  span:nth-child(2) > button,
  span:nth-child(3) > button {
    border: none;
    background-color: white;
    margin: 0 3px 0 0;
    padding: 3px 0;
    box-sizing: border-box;
    text-decoration: underline;
  }
  span:nth-child(2):hover > button,
  span:nth-child(3):hover > button {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

export default {
  review: review,
  star: star,
  date: date,
  helpful: helpful,
};