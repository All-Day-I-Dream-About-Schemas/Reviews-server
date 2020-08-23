import React, { Component } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import Wrapper from '../styled-components/App-style.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviewsToRender: [],
      currReviews: [],
      currReviewNum: 2,
      button5: [],
      button4: [],
      button3: [],
      button2: [],
      button1: [],
      currStarClicked: [],
    }
    this.getAllReviews = this.getAllReviews.bind(this);
    this.starClickHandler = this.starClickHandler.bind(this);
    this.sortByHandler = this.sortByHandler.bind(this);
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
    this.hideStarHandler = this.hideStarHandler.bind(this);
    this.helpfulHandler = this.helpfulHandler.bind(this);
  }

  getAllReviews() {
    $.ajax({
      method: 'GET',
      url: '/api/reviews',
      success: (data) => {
        data.sort((a, b) => {
          if(a.date < b.date) {
            return 1;
          }
          if(a.date > b.date) {
            return -1;
          }
        })
        const five = [], four = [], three = [], two = [], one = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].rating === 5) {
            five.push(data[i])
          } else if (data[i].rating === 4) {
            four.push(data[i])
          } else if (data[i].rating === 3) {
            three.push(data[i])
          } else if (data[i].rating === 2) {
            two.push(data[i])
          } else if (data[i].rating === 1) {
            one.push(data[i])
          }
        }
        this.setState({
          allReviews: data,
          reviewsToRender: data,
          currReviews: data.slice(0, 2),
          button5: five,
          button4: four,
          button3: three,
          button2: two,
          button1: one,
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  sortByHandler(sortBy) {
    console.log(sortBy)
    let reviewsToRender = this.state.reviewsToRender.slice();
    reviewsToRender.sort((a, b) => {
      if(a[sortBy] < b[sortBy]) {
        return 1;
      }
      if(a[sortBy] > b[sortBy]) {
        return -1;
      }
    })
    // console.log(allReviews);
    this.setState({
      reviewsToRender: reviewsToRender,
      currReviews: this.state.reviewsToRender.slice(0, 2),
      currReviewNum: 2,
    })
  }

  loadMoreHandler() {
    let moreReviews = [];
    let numToShow = this.state.currReviewNum + 5;
    for (let i = 0; i < numToShow; i++) {
      moreReviews.push(this.state.reviewsToRender[i]);
    }
    this.setState({
      currReviews: moreReviews,
      currReviewNum: numToShow,
    })
  }

  starClickHandler(stars) {
    const starClicked = this.state.currStarClicked.slice();
    starClicked.push(stars);
    starClicked.sort();
    let currReviews = [];
    for (let i = starClicked.length - 1; i >= 0; i--) {
      currReviews = currReviews.concat(this.state[starClicked[i]]);
      // console.log(this.state[starClicked[i]])
    }
    // console.log(currReviews);
    this.setState({
      reviewsToRender: currReviews,
      currReviews: currReviews.slice(0, 2),
      currStarClicked: starClicked,
    })
  }

  hideStarHandler(stars) {
    const starClicked = [];
    const currStarClicked = this.state.currStarClicked.slice();
    for (let j = 0; j < currStarClicked.length; j++) {
      if (currStarClicked[j] !== stars) {
        starClicked.push(currStarClicked[j]);
      }
    }
    // console.log(stars);
    let currReviews = [];
    // console.log(currStarClicked);
    if (starClicked.length === 0) {
      currReviews = this.state.allReviews;
    } else {
      for (let i = starClicked.length - 1; i >= 0; i--) {
        currReviews = currReviews.concat(this.state[starClicked[i]]);
      }
    }
    // console.log(currReviews);
    this.setState({
      reviewsToRender: currReviews,
      currReviews: currReviews.slice(0, 2),
      currStarClicked: starClicked,
    })
  }

  helpfulHandler(helpful, id, rating) {
    // console.log(helpful);
    $.ajax({
      method: 'POST',
      url: '/api/helpful',
      data: JSON.stringify({helpful: helpful, id: id}),
      contentType: 'application/json',
      success: (data) => {
      },
      error: (err) => {
        console.log(err);
      }
    })
    const currReviews = this.state.currReviews.slice();
    for (let review of currReviews) {
      if (review.id === id) {
        review[helpful]++;
      }
    }
    this.setState({
      currReviews: currReviews,
    })
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    // console.log(this.state.allReviews);
    return (
      <Wrapper.main>
        <Wrapper.title>
          <h4>Ratings &amp; Reviews</h4>
        </Wrapper.title>
        <Wrapper.left>
          <div>
            {this.state.allReviews.length > 0 ? <RatingBreakdown allReviews={this.state.allReviews} hideStarHandler={this.hideStarHandler} starClickHandler={this.starClickHandler}/> : null}
          </div>
          <div>
            {this.state.allReviews.length > 0 ? <Ratings allReviews={this.state.allReviews}/> : null}
          </div>
        </Wrapper.left>
        <Wrapper.right>
          {this.state.allReviews.length > 0 ? <Reviews sortBy={this.sortByHandler} loadMoreHandler={this.loadMoreHandler} currReviews={this.state.currReviews} helpfulHandler={this.helpfulHandler}/> : null}
        </Wrapper.right>
      </Wrapper.main>
    );
  }
}

export default App;
