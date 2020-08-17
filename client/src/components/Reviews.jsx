import React, { Component } from 'react';
import EachReview from './EachReview.jsx';
import Wrapper from '../styled-components/Reviews-style.jsx';
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.sortButton = this.sortButton.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.writeReview = this.writeReview.bind(this);
  }

  sortButton(e) {
    e.preventDefault();
    this.props.sortBy(e.target.name);
  }

  loadMore(e) {
    e.preventDefault();
    this.props.loadMoreHandler();
  }

  writeReview(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Wrapper.sort>
          <button name='date' onClick={this.sortButton}>NEWEST</button>
          <button name='helpfulYes' onClick={this.sortButton}>HELPFUL</button>
          <button name='opinion' onClick={this.sortButton}>RELAVANT</button>
        </Wrapper.sort>
        <Wrapper.reviews>
          {
            this.props.currReviews.map((review, key) => (
              <EachReview helpfulHandler={this.props.helpfulHandler} review={review} key={key}/>
            ))
          }
        </Wrapper.reviews>
        <Wrapper.bottomButtons>
          <button onClick={this.loadMore}>LOAD MORE</button>
          <button onClick={this.writeReview}>WRITE A REVIEW</button>
        </Wrapper.bottomButtons>
      </div>
    )
  }
}

export default Reviews;