import React, { Component } from 'react';
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics';
import Section from './Section'
import Notification from './Notification'

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  optionKey = Object.keys(this.state);

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 }
    })
  }

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.optionKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.totalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedback()}
            />
          </Section>
        )}

        {this.totalFeedback() === 0 &&
          <Notification message="There is no feedback" />}
      </FeedbackDiv>
    );
  }
}

export default Feedback;
