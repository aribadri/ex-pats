import React from 'react';
import './NewLoader.css';

export default function NewLoader({ ...props }) {
  return (
    <div {...props} className="disappear">
      <span>l</span>
      {' '}
      <span>o</span>
      {' '}
      <span>a</span>
      {' '}
      <span>d</span>
      {' '}
      <span>i</span>
      {' '}
      <span>n</span>
      {' '}
      <span>g</span>
      {' '}
      <span>.</span>
      {' '}
      <span>.</span>
      {' '}
      <span>.</span>
    </div>

  );
}
