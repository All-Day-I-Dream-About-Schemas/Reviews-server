import React, { Component } from 'react';

class RatingBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleCLick = this.handleClick.bind();
  }

  handleClick(e) {
    e.target.name
  }

  render() {
    return (
      <div>
        <div>
          <div>4.7</div>
          <div>4.7 stars</div>
          <div>7801 Reviews (number of Reviews)</div>
        </div>
        <div>
          <div>
            Rating Breakdown
          </div>
          <div>
            <button name="five" onClick={this.handleClick}>5 STARS</button>
            <div>bar 6033</div>
          </div>
          <div>
            <button name="four" onClick={this.handleClick}>4 STARS</button>
            <div>bar 1299</div>
          </div>
          <div>
            <button name="three" onClick={this.handleClick}>3 STARS</button>
            <div>bar 274</div>
          </div>
          <div>
            <button name="two" onClick={this.handleClick}>2 STARS</button>
            <div>bar 86</div>
          </div>
          <div>
            <button name="one" onClick={this.handleClick}>1 STARS</button>
            <div>bar 109</div>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown;