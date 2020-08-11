import React, { Component } from 'react';

class EachReview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>5 Stars</div>
        <div>date</div>
        <div>opinion</div>
        <div>review</div>
        <div>check I recommend this product</div>
        <div>nickname - Verified Purchaser</div>
        <div>Was this review helpful?</div>
        <button>Yes</button>(0)
        <button>No</button>(0)
      </div>
    )
  }
}

export default EachReview;