import React from 'react';
import styled from 'styled-components';

const main = styled.section`
  width: 850px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  font: small-caption;
`;

const title = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  h4 {
    margin: 0;
    text-transform: uppercase;
    font-size: 30px;
  }
`;

const left = styled.div`
  float: left;
  width: 270px;
`;

const right = styled.div`
  float: right;
  width: 580px;
  padding: 0 30px;
  box-sizing: border-box;
`;

export default {
  main: main,
  title: title,
  left: left,
  right: right,
};