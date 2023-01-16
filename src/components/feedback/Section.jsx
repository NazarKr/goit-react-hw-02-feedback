import React, { Component } from 'react';
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  optionKey = Object.keys(this.state);

  //   hendleGoodFeedback = () => {
  //     this.setState(prevState => ({
  //       good: prevState.good + 1,
  //     }));
  //   };

  //   hendleNeutalFeedback = () => {
  //     this.setState(prevState => ({
  //       neutral: prevState.neutral + 1,
  //     }));
  //   };

  //   hendleBadFeedback = () => {
  //     this.setState(prevState => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   };

  onLeaveFeedback = e => {
    if (e.target.innerText === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }

    if (e.target.innerText === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }

    if (e.target.innerText === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  totalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positiveFeedback = () => {
    const positive = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positive || '';
  };

  render() {
    return (
      <FeedbackDiv>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={this.optionKey}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback()}
          positivePercentage={this.positiveFeedback()}
        />
      </FeedbackDiv>
    );
  }
}

export default Section;
