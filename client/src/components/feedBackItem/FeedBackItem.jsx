/* eslint-disable react/no-array-index-key */
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

// import globalContext from '../../context/GlobalContext';

function FeedBackItem({ el, id }) {
  const [userFeedback, setUserFeedback] = useState([]);
  // const { profiList } = useContext(globalContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUse() {
      const data = await axios.get(`http://localhost:5000/api/users/${id}/feedback/${el.user_id_from}`);
      console.log(data);
      setUserFeedback(data.data);
    }
    getUse();
  }, []);

  const stars = Array(el.stars_count).fill(0);
  const params = {
    direction: '.swiper-pagination',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  };
  return (
    <div>
      {userFeedback
        ? (
          <>
            <div>
              &quot;
              {el.text_content}
              &quot;
            </div>
            <div>
              Оценка:
              {' '}
              {stars.map((star, i) => <FaStar size="1em" key={i + 1} color="orange" />)}
            </div>
            <div>
              Отзыв от пользователя:
              {' '}
              <Link to={`/users/${userFeedback.id}`}>{userFeedback.first_name}</Link>

            </div>

          </>
        ) : 'loading...'}
    </div>
  );
}

export default FeedBackItem;
