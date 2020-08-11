import React, { Component } from 'react';
import EachReview from './EachReview.jsx';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <button>NEWEST</button>
        <button>HELPFUL</button>
        <button>RELAVANT</button>
        <EachReview/>
        <button>LOAD MORE</button>
        <button>WRITE A REVIEW</button>
      </div>
    )
  }
}

export default Reviews;