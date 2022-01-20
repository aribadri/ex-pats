/* eslint-disable dot-notation */
/* eslint-disable max-len */
import '../components/scrolllabel/Scrolllabel.css';
import './SpesialistPage.css';
// import 'swiper/css/swiper.css';
// import Swiper from 'swiper';
import { useState, useEffect } from 'react';

// import ReactIdSwiper from 'react-id-swiper';
// import Scrollable from '../components/scrolllabel/Scrolllabel';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
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
import FeedBackList from '../components/feedBackList/FeedBackList';
import Loader from '../UI/loader/Loader';
import StartChating from '../components/startChating/StartChating';
import NewLoader from '../UI/newLoader/NewLoader';

// import CardWork from '../components/cardWork/CardWork';
// import Slider from '../UI/slider/Slider';

// eslint-disable-next-line

// eslint-disable-next-line
export const SpecialistPage = ({ visible, setModal, visibleWorkCard, setmodalWorkCard, visibleStartChat, setStartChat }) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
      const data = await axios.get(`http://localhost:5000/api/users/${id}`);
      console.log(data.data);
      setUser(data.data);
    }
    getUser();
  }, [id]);
  const { Reviews } = user;
  const userId = useSelector((state) => state.user.userData.id);
  const params = {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  };
  return (
    <div className="wrap-profi">
      {!Reviews ? <NewLoader style={{ fontSize: '64px' }} />
        : (
          <div className="container-profi">
            <div className="profi-info">
              <div className="profi-picture"><PictureProfi user={user} /></div>
              <div className="profi-data">
                <div className="fio">
                  <div className="first-name-profi"><FirstNameProfi user={user} /></div>
                  <div className="last-name-profi"><LastNameProfi user={user} /></div>
                </div>
                <div className="country-profi"><CountryProfi user={user} /></div>
                <div className="rating"><RatingProfi user={user} /></div>
                <div className="specialization-header">Специализация</div>
                <div className="specialization"><Specialization user={user} /></div>
              </div>
            </div>
            <div className="about">
              <About user={user} />
            </div>
            <FeedBackList user={Reviews} />
            <div className="portfolio">
              <div className="header-portfolio">Мои работы</div>
              <div className="wrapper-pogo" />
            </div>
            <div className="contact-conteiner">
              <div className="header-contacts">Контакты</div>
              <Contacts />
            </div>
            <MyModal visible={visibleWorkCard} setModal={setmodalWorkCard} />
            <MyModal visible={visible} setModal={setModal}>
              <FeedBackCreate id={id} setModal={setModal} />
            </MyModal>
            <MyModal visible={visibleStartChat} setModal={setStartChat} className="modal-open" style={{ width: '100px' }}>
              <StartChating />
            </MyModal>
            {userId
              && (
                <div className="button-message">
                  <Link to={`/users/${id}/chat`}><MyButton className="button-chat">Написать сообщение</MyButton></Link>
                  <MyButton className="button-feedback" onClick={() => setModal(true)}>Написать отзыв</MyButton>
                </div>
              )}

          </div>
        )}
    </div>
  );
};
