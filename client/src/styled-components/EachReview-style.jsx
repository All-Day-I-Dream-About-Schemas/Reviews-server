import React from 'react';
import styled from 'styled-components';

const wrapper = styled.div`
  border-bottom: 2px solid #777;
  padding: 50px 0;
  font-family: serif;
`;

const star = styled.div`
  display: inline-block;
  width: 50%;
`;

const date = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
  color: #767677;
`;

const opinion = styled.div`
  font-size: 22px;
  margin: 20px 0 0;
  font-weight: bold;
  font-family: sans-serif;
`;

const review = styled.div`
  margin: 10px 0 0;
`;

const recommend = styled.div`
  margin: 20px 0 14px;
`;

const nickname = styled.div`
  margin: 10px 0 14px;
  font-family: sans-serif;
  font-weight: bold;
`;

const helpful = styled.div`
  margin: 20px 0 0 0;
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
  wrapper: wrapper,
  star: star,
  date: date,
  helpful: helpful,
  opinion: opinion,
  review: review,
  recommend: recommend,
  nickname: nickname,
};