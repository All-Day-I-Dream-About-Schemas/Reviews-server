import React from 'react';
import styled from 'styled-components';

const Gl_star_rating__item = styled.span`
  position: relative;
`;

const Star_rating___3tUz2 = styled.span`
  font-size: 17px;
  margin-right: 16.5px;
  position: relative;
  right: 3px;
  top:1px;
  color: white;
`;
const Gl_star_rating__mask = styled.span`
  overflow: hidden;
  position: absolute;
`;

const Gl_star_rating__star = styled.svg`
  height: 1em;
  width: 1em;
`;
const Gl_star_rating__fill = styled.path`
  d: path("M 13.277 6.182 L 9.697 8.782 L 11.057 12.992 L 7.487 10.392 L 3.907 12.992 L 5.277 8.782 L 1.697 6.182 L 6.117 6.182 L 7.487 1.992 L 8.857 6.182 L 13.277 6.182 Z");
  fill: none;
  stroke: #646464;
  stroke-width: 1px;
`;


const Stars = () => (
  <Star_rating___3tUz2>
    <Gl_star_rating__item>
      <Gl_star_rating__mask>
          <Gl_star_rating__star viewBox="0 0 15 15" >
              <Gl_star_rating__fill></Gl_star_rating__fill>
            </Gl_star_rating__star>
        </Gl_star_rating__mask>
    </Gl_star_rating__item>
  </Star_rating___3tUz2>
);

export default Stars;