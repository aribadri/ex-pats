// import React from 'react';
import ReactIdSwiper from 'react-id-swiper';
import { useRef, useState } from 'react';
import CardWork from '../../components/cardWork/CardWork';
/* eslint-disable react/jsx-props-no-spreading */

function Slider({ setModal }) {
  const items = [
    {
      title: 'Заголовок 1',
      text: 'текст',
      id: 1,
    },
    {
      title: 'Заголовок 2',
      text: 'текст',
      id: 2,
    },
    {
      title: 'Заголовок 3',
      text: 'текст',
      id: 3,
    },
    {
      title: 'Заголовок 4',
      text: 'текст',
      id: 4,
    },
    {
      title: 'Заголовок 5',
      text: 'текст',
      id: 5,
    },
    {
      title: 'Заголовок 6',
      text: 'текст',
      id: 6,
    },
    {
      title: 'Заголовок 7',
      text: 'текст',
      id: 7,
    },
    {
      title: 'Заголовок 8',
      text: 'текст',
      id: 8,
    },
    {
      title: 'Заголовок 8',
      text: 'текст',
      id: 9,
    }, {
      title: 'Заголовок 8',
      text: 'текст',
      id: 10,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiper = useRef(null);
  const swiperOptions = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    mousewheel: true,
    observer: true,
    observeParents: true,
    // loop: false,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    on: { slideChange: (index) => { setCurrentIndex(index); } },
    paginationClickable: true,
    // direction: 'horizontal',
    // mousewheel: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    renderPrevButton: () => <button type="button" className="swiper-button-prev">Prev</button>,
    renderNextButton: () => <button type="button" className="swiper-button-next">Next</button>,
  };
  console.log(currentIndex);
  return (
    <div>
      <ReactIdSwiper {...swiperOptions} ref={swiper}>
        {
                items.map((el) => <CardWork key={el.id + 1} el={el} setModal={setModal} />)
              }
      </ReactIdSwiper>
    </div>
  );
}

export default Slider;
