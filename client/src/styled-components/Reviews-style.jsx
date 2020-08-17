import React from 'react';
import styled from 'styled-components';

const sort = styled.div`
  button {
    width: 33.33%;
    height: 48px;
    padding: 0;
    margin: 0;
    background-color: white;
    color: #ccc;
    border: 1px solid #555;
    border-right: none;
  }
  button:last-child {
    border-right: 1px solid #555;
  }
`;

const reviews = styled.div`

`;

const bottomButtons = styled.div`
  padding-top: 40px;
  box-sizing: border-box;
  button {
    width: 49%;
    margin-right: 2%;
    height: 48px;
    text-align: left;
  }
  button:first-child {
    background-color: white;
    border: 1px solid #555;
  }
  button:last-child {
    background-color: black;
    color: #fff;
    margin-right: 0%;
  }
`;

export default {
  sort: sort,
  reviews: reviews,
  bottomButtons, bottomButtons,
};