import React, { Component } from 'react';
import Wrapper from '../styled-components/EachReview-style.jsx';
import moment from 'moment'
import Star from './Star.jsx';
import BlankStar from './BlankStar.jsx';

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
      <Wrapper.wrapper>
        <div>
          {
            this.props.review.rating === 5 ? <span><Star/><Star/><Star/><Star/><Star/> </span>:
            this.props.review.rating === 4 ? <span><Star/><Star/><Star/><Star/><BlankStar/></span> :
            this.props.review.rating === 3 ? <span><Star/><Star/><Star/><BlankStar/><BlankStar/></span> :
            this.props.review.rating === 2 ? <span><Star/><Star/><BlankStar/><BlankStar/><BlankStar/></span> :
            <span><Star/><BlankStar/><BlankStar/><BlankStar/><BlankStar/></span>
          }
          <Wrapper.date>{moment(this.props.review.date).format('LL')}</Wrapper.date>
        </div>
        <div>
          <Wrapper.opinion>{this.props.review.opinion}</Wrapper.opinion>
          <Wrapper.review>{this.props.review.review}</Wrapper.review>
        </div>
        {this.props.review.recommend ? <Wrapper.recommend>checkmark I recommend this product</Wrapper.recommend> : null}
        <Wrapper.nickname>{this.props.review.nickname}</Wrapper.nickname>
        <Wrapper.helpful>
          <span>Was this review helpful?</span>
          <span>
            <button onClick={this.clickHandler} name='helpfulYes'>Yes</button>
            {'(' + this.props.review.helpfulYes + ')'}
          </span>
          <span>
            <button onClick={this.clickHandler} name='helpfulNo'>No</button>
            {'(' + this.props.review.helpfulNo + ')'}
          </span>
        </Wrapper.helpful>
      </Wrapper.wrapper>
    )
  }
}

export default EachReview;