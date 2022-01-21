import React from 'react';

function CardWork({ el, setModal }) {
  console.log(el, '123');
  return (
    <div className="item" onClick={() => setModal(true)}>

      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  );
}

export default CardWork;
