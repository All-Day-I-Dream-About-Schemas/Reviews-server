import React, { Component } from 'react';

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
      <div>
        <div>{this.props.review.rating}</div>
        <div>{this.props.review.date.slice(0, 10)}</div>
        <div>{this.props.review.opinion}</div>
        <div>{this.props.review.review}</div>
        <div>{this.props.review.recommend}</div>
        <div>{this.props.review.nickname}</div>
        <div>Was this review helpful?</div>
        <button onClick={this.clickHandler} name='helpfulYes'>Yes</button>{this.props.review.helpfulYes}
        <button onClick={this.clickHandler} name='helpfulNo'>No</button>{this.props.review.helpfulNo}
      </div>
    )
  }
}

export default EachReview;