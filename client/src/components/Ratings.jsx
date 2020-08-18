import React, { Component } from 'react';
import Wrapper from '../styled-components/Ratings-style.jsx';

const Ratings = (props) => {
  let totalRecommend = 0, totalSize = 0, totalWidth = 0, totalComfort = 0, totalQuality = 0;
  // console.log(props.allReviews);
  for (let i = 0; i < props.allReviews.length; i++) {
    if (props.allReviews[i].recommend === 1) {
      totalRecommend++;
    }
    totalSize += props.allReviews[i].size;
    totalWidth += props.allReviews[i].width;
    totalComfort += props.allReviews[i].comfort;
    totalQuality += props.allReviews[i].quality;
  }
  const recommendPercentage = Math.round(totalRecommend / props.allReviews.length * 100);
  const size = Math.round(totalSize / props.allReviews.length * 100) / 100;
  const width = Math.round(totalWidth / props.allReviews.length * 100) / 100;
  const comfort = Math.round(totalComfort / props.allReviews.length * 100) / 100;
  const quality = Math.round(totalQuality / props.allReviews.length * 100) / 100;
  return (
  <Wrapper.ratings>
    <Wrapper.percent>
      <h5>{recommendPercentage}%</h5>
      <div>of customers recommend this product</div>
    </Wrapper.percent>
    <Wrapper.eachRate>
      <div>SIZE</div>
      <span className="fourBars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="./triangle.png" alt="pointer" width="20" height="25" />
      </span>
      <span className="three">
        <b>TOO SMALL</b>
        <b>PERFECT</b>
        <b>TOO LARGE</b>
      </span>
    </Wrapper.eachRate>
    <Wrapper.eachRate>
      <div>WIDTH</div>
      <span className="fourBars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="./triangle.png" alt="pointer" width="20" height="25" />
      </span>
      <span className="three">
        <b>TOO NARROW</b>
        <b>PERFECT</b>
        <b>TOO WIDE</b>
      </span>
    </Wrapper.eachRate>
    <Wrapper.eachRate>
      <div>COMFORT</div>
      <span className="fourBars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="./triangle.png" alt="pointer" width="20" height="25" />
      </span>
      <span className="two">
        <b>UNCOMFORTABLE</b>
        <b>COMFORTABLE</b>
      </span>
    </Wrapper.eachRate>
    <Wrapper.eachRate>
      <div>QUALITY</div>
      <span className="fourBars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="./triangle.png" alt="pointer" width="20" height="25" />
      </span>
      <span className="two">
        <b>POOR</b>
        <b>PERFECT</b>
      </span>
    </Wrapper.eachRate>
  </Wrapper.ratings>
  )
}
export default Ratings;