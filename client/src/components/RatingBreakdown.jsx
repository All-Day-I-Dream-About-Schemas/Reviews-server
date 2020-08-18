import React, { Component } from 'react';
import Wrapper from '../styled-components/RatingBreakdown-style.jsx';

class RatingBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRatings: 0,
      numReviews: 0,
      fiveStar: 0,
      fourStar: 0,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
      button5: false,
      button4: false,
      button3: false,
      button2: false,
      button1: false,
      ButtonClicked: 0,
    }
    this.showButtonClick = this.showButtonClick.bind(this);
    this.hideButtonClick = this.hideButtonClick.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.allReviews);
    let totalRatings = 0;
    let five = 0, four = 0, three = 0, two = 0, one = 0;
    let allReviews = this.props.allReviews;
    for (let i = 0; i < allReviews.length; i++) {
      totalRatings += allReviews[i].rating;
      if (allReviews[i].rating === 5) {
        five++;
      } else if (allReviews[i].rating === 4) {
        four++;
      } else if (allReviews[i].rating === 3) {
        three++;
      } else if (allReviews[i].rating === 2) {
        two++;
      } else {
        one++;
      }
    }
    const averageRatings = Math.round(totalRatings / allReviews.length * 100) / 100;
    // console.log(totalRatings);
    this.setState({
      avgRatings: averageRatings,
      numReviews: allReviews.length,
      fiveStar: five,
      fourStar: four,
      threeStar: three,
      twoStar: two,
      oneStar: one,
    })
  }

  showButtonClick(e) {
    e.preventDefault();
    if (!this.state[e.target.name]) {
      this.props.starClickHandler(e.target.name);
      this.setState({
        [e.target.name]: true,
        ButtonClicked: this.state.ButtonClicked + 1,
      })
    }
  }

  hideButtonClick(e) {
    e.preventDefault();
    if (this.state[e.target.name]) {
      this.props.hideStarHandler(e.target.name);
      this.setState({
        [e.target.name]: false,
        ButtonClicked: this.state.ButtonClicked - 1,
      })
    }
  }

  render() {
    // console.log(this.state.button1);
    return (
      <div>
        <Wrapper.greenBox>
          <Wrapper.overallRate>{this.state.avgRatings.toString().slice(0, 3)}</Wrapper.overallRate>
          <div>
            <Wrapper.stars>show ratings in stars</Wrapper.stars>
            <Wrapper.totalReviews>{this.props.allReviews.length} Reviews</Wrapper.totalReviews>
          </div>
        </Wrapper.greenBox>
        <Wrapper.breakdown>
          <Wrapper.ratingBreakdown>
            Rating Breakdown
          </Wrapper.ratingBreakdown>
            {this.state.ButtonClicked ? <div className="showing_reviews"> Showing reviews: </div> : null}
            {this.state.button5 ? <button name="button5" onClick={this.hideButtonClick}>5 STARS</button> : null}
            {this.state.button4 ? <button name="button4" onClick={this.hideButtonClick}>4 STARS</button> : null}
            {this.state.button3 ? <button name="button3" onClick={this.hideButtonClick}>3 STARS</button> : null}
            {this.state.button2 ? <button name="button2" onClick={this.hideButtonClick}>2 STARS</button> : null}
            {this.state.button1 ? <button name="button1" onClick={this.hideButtonClick}>1 STARS</button> : null}
          <Wrapper.buttons>
            <span>
              <button name="button5" onClick={this.showButtonClick}>5 STARS</button>
              <span className="barBox">
                <Wrapper.greyBar>
                  <span></span>
                </Wrapper.greyBar>
                <i>{this.state.fiveStar}</i>
              </span>
            </span>
          </Wrapper.buttons>
          <Wrapper.buttons>
            <span>
              <button name="button4" onClick={this.showButtonClick}>4 STARS</button>
              <span className="barBox">
                <Wrapper.greyBar>
                  <span></span>
                </Wrapper.greyBar>
                <i>{this.state.fourStar}</i>
              </span>
            </span>
          </Wrapper.buttons>
          <Wrapper.buttons>
            <span>
              <button name="button3" onClick={this.showButtonClick}>3 STARS</button>
              <span className="barBox">
                <Wrapper.greyBar>
                  <span></span>
                </Wrapper.greyBar>
                <i>{this.state.threeStar}</i>
              </span>
            </span>
          </Wrapper.buttons>
          <Wrapper.buttons>
            <span>
              <button name="button2" onClick={this.showButtonClick}>2 STARS</button>
              <span className="barBox">
                <Wrapper.greyBar>
                  <span></span>
                </Wrapper.greyBar>
                <i>{this.state.twoStar}</i>
              </span>
            </span>
          </Wrapper.buttons>
          <Wrapper.buttons>
            <span>
              <button name="button1" onClick={this.showButtonClick}>1 STARS</button>
              <span className="barBox">
                <Wrapper.greyBar>
                  <span></span>
                </Wrapper.greyBar>
                <i>{this.state.oneStar}</i>
              </span>
            </span>
          </Wrapper.buttons>
        </Wrapper.breakdown>
      </div>
    )
  }
}

export default RatingBreakdown;