import React, { Component } from 'react';
import { FeedbackDiv } from './feedback.styled';
import FeedbackOptions from './ButtonsComponents';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

interface FeedbackState {
  good: number;
  neutral: number;
  bad: number;
}

class Feedback extends Component<{}, FeedbackState> {
  state: FeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  optionKey: string[] = Object.keys(this.state);

  onLeaveFeedback = (name: keyof FeedbackState) => {
    this.setState((prevState: FeedbackState) => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  totalFeedback = (): number => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positiveFeedback = (): number | null => {
    const { good, neutral, bad } = this.state;
    const positive = Math.round((good * 100) / (good + neutral + bad));
    return isNaN(positive) ? null : positive;
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

        {this.totalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </FeedbackDiv>
    );
  }
}

export default Feedback;
