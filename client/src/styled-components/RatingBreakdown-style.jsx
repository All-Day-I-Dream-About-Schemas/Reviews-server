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
  outline: 2px purple solid;
`;

const breakdown = styled.div`
  outline: 2px purple solid;
  h5 {
    margin: 0;
  }
`;

const greyBar = styled.div`
  flex-grow: 1;
  margin: 0 10px;
  background-color: #767677;
  border-radius: 2px;
`;

const greenBar = styled.div`
  height: 4px;
  border-radius: 2px;
  background-color: #2ada71;
`;

export default {
  greenBox: greenBox,
  breakdown: breakdown,
  greyBar: greyBar,
  greenBar: greenBar,
};
