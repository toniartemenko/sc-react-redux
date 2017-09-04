import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/stream'

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: "Some other tracks"
  }
];

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);