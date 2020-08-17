import React, { Component } from 'react';
import Wrapper from '../styled-components/EachReview-style.jsx';

class EachReview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.helpfulHandler(e.target.name, this.props.review.id, this.props.review.rating);
  }

  render() {
    // console.log(this.props.review)
    return (
      <Wrapper.review>
        <div>
          <Wrapper.star>{this.props.review.rating}</Wrapper.star>
          <Wrapper.date>{this.props.review.date.slice(0, 10)}</Wrapper.date>
        </div>
        <div>
          <div>{this.props.review.opinion}</div>
          <div>{this.props.review.review}</div>
        </div>
        <div>{this.props.review.recommend}</div>
        <div>{this.props.review.nickname}</div>
        <Wrapper.helpful>
          <span>Was this review helpful?</span>
          <span>
            <button onClick={this.clickHandler} name='helpfulYes'>Yes</button>
            {this.props.review.helpfulYes}
          </span>
          <span>
            <button onClick={this.clickHandler} name='helpfulNo'>No</button>
            {this.props.review.helpfulNo}
          </span>
        </Wrapper.helpful>
      </Wrapper.review>
    )
  }
}

export default EachReview;