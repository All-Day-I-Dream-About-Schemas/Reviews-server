import React, { Component } from 'react';
import RatingBreakdown from './RatingBreakDown.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      fiveStars: [],
      fourStars: [],
      threeStars: [],
      twoStars: [],
      oneStar: [],
    }
  }

  render() {
    return (
      <div>
        <h5>Ratings and Reviews</h5>
        <div>
          <RatingBreakdown />
        </div>
        <div>
          <Ratings />
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    );
  }
}

export default App;