import styled from '@emotion/styled';

export const FeedbackDiv = styled.div`
  width: 360px;
  margin-top: 20px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 2.5px solid #e0e1e4;
  box-shadow: 0px 0px 20px -18px;
`;

export const ButtonFeedback = styled.button`
    width: fit-content;
    min-width: 100px;
    height: 40px;
    padding: 8px;
    margin: 6px;
    border-radius: 5px;
    border: 2.5px solid #e0e1e4;
    box-shadow: 0px 0px 20px -20px;
    cursor: pointer;
    background-color: white;
    transition: all 0.2s ease-in-out 0ms;
    user-select: none;
    font-family: 'Poppins', sans-serif;

&:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 0px 20px -18px;
  }

&:active {
    transform: scale(0.95);
  }
`;
