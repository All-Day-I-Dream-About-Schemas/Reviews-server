import React, { Component } from 'react';

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
  <div>
    <h4>{recommendPercentage}%</h4>
    <div>of customers recommend this product</div>
    <div>
      <div>SIZE</div>
      <div>four bars</div>
      <div>mark {size}</div>
      <div>TOO SMALL</div>
      <div>PERFECT</div>
      <div>TOO LARGE</div>
    </div>
    <div>
      <div>WIDTH</div>
      <div>four bars</div>
      <div>mark {width}</div>
      <div>TOO NARROW</div>
      <div>PERFECT</div>
      <div>TOO WIDE</div>
    </div>
    <div>
      <div>COMFORT</div>
      <div>four bars</div>
      <div>mark {comfort}</div>
      <div>TOO SMALL</div>
      <div>UNCOMFORTABLE</div>
      <div>COMFORTABLE</div>
    </div>
    <div>
      <div>QUALITY</div>
      <div>four bars</div>
      <div>mark {quality}</div>
      <div>POOR</div>
      <div>PERFECT</div>
    </div>
  </div>
  )
}
export default Ratings;