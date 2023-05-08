import React from 'react';
import MainFeedReviewForm from './mainFeedReviewForm';

const formOneStyle = {
  backgroundColor: '#C86C6C',
  border: '1px solid black',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  marginBottom: '20px'
}
const formTwoStyle = {
  backgroundColor: '#A7B999',
  border: '1px solid black',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  marginBottom: '20px'
}
const formThreeStyle = {
  backgroundColor: '#B195B1',
  border: '1px solid black',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  marginBottom: '20px'
}

const LiveReview = () => {
  return (
    <div>
      <div style={formOneStyle}><MainFeedReviewForm/></div>
      <div style={formTwoStyle}><MainFeedReviewForm/></div>
      <div style={formThreeStyle}><MainFeedReviewForm/></div>
    </div>
  );
};

export default LiveReview;