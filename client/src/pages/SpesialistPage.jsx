import '../components/scrolllabel/Scrolllabel.css';
import './SpesialistPage.css';
// import 'swiper/css/swiper.css';
// import Swiper from 'swiper';
// import { useState, useRef } from 'react';
// import ReactIdSwiper from 'react-id-swiper';
// import Scrollable from '../components/scrolllabel/Scrolllabel';

import About from '../components/about/About';
// import Dialog from '../components/dialog/Dialog';
import Contacts from '../components/contacts/Contacts';
import PictureProfi from '../components/pictureProfi/PictureProfi';
import FirstNameProfi from '../components/firstNameProfi/FirstNameProfi';
import LastNameProfi from '../components/lastNameProfi/LastNameProfi';
import Specialization from '../components/specialization/Specialization';
import RatingProfi from '../components/ratingProfi/RatingProfi';
import CountryProfi from '../components/countryProfi/CountryProfi';
import MyButton from '../UI/button/MyButton';
import MyModal from '../components/myModal/MyModal';
import FeedBackCreate from '../components/feedBackCreate/FeedBackCreate';
import StartChating from '../components/startChating/StartChating';
// import CardWork from '../components/cardWork/CardWork';
// import Slider from '../UI/slider/Slider';

// eslint-disable-next-line

// eslint-disable-next-line
export const SpecialistPage = ({ visible, setModal, visibleWorkCard, setmodalWorkCard, visibleStartChat, setStartChat }) => {
  return (
    <div className="wrap-profi">
      <div className="container-profi">
        <div className="profi-info">
          <div className="profi-picture"><PictureProfi /></div>
          <div className="profi-data">
            <div className="fio">
              <div className="first-name-profi"><FirstNameProfi /></div>
              <div className="last-name-profi"><LastNameProfi /></div>
            </div>
            <div className="country-profi"><CountryProfi /></div>
            <div className="rating"><RatingProfi /></div>
            <div className="specialization-header">Специализация</div>
            <div className="specialization"><Specialization /></div>
          </div>
        </div>
        {/* style={{ border: '1px solid black', width: '100px' }} */}
        <div style={{
          background: '#C4C4C4', width: '100%', height: '39px', marginTop: '9px',
        }}
        />
        <div className="about">
          <About />
        </div>

        <div className="portfolio">
          <div className="header-portfolio">Мои работы</div>
          <div className="wrapper-pogo">
            {/* <Slider setModal={setmodalWorkCard} /> */}
            {/* <div>
              <button onClick={goPrev} type="button" className="swiper-button-prev">Prev</button>
              <button onClick={goNext} type="button" className="swiper-button-next">Next</button>
            </div> */}
          </div>
          {/* <Scrollable _class="items">

          </Scrollable> */}
        </div>
        <div className="contact-conteiner">
          <div className="header-contacts">Контакты</div>
          <Contacts />
        </div>
        {/* <CardWork /> */}
        <MyModal visible={visibleWorkCard} setModal={setmodalWorkCard} />
        <MyModal visible={visible} setModal={setModal}>
          <FeedBackCreate />
        </MyModal>
        <MyModal visible={visibleStartChat} setModal={setStartChat} className="modal-open" style={{ width: '100px' }}>
          <StartChating />
        </MyModal>
        <div className="button-message">

          <MyButton className="button-chat" onClick={() => setStartChat(true)}>Написать сообщение</MyButton>
          <MyButton className="button-feedback" onClick={() => setModal(true)}>Написать отзыв</MyButton>
        </div>
        {/* <div className="feedback"> */}
        {/* <div className="header-feedback">Отзывы</div> */}
        {/* <Scrollable _class="items">
            {
              feedBack.map((el) => (
                <div key={el.id} className="feedBack">
                  <h2>{el.name_feed}</h2>
                  <p>{el.text}</p>
                </div>
              ))
            }
          </Scrollable> */}
        {/* Контакты
          <Contacts /> */}
        {/* </div> */}

      </div>
    </div>
  );
};
