/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

// import globalContext from '../../context/GlobalContext';

function FeedBackItem({ el, id, user }) {
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

  return (
    <div>
      {userFeedback
        ? (
          <div className="feedBack-container-item">
            <div className="text-header-content-feedback">
              <div className="text-feedback">
                {(' ')}
                {' '}
              </div>
              {' '}
              <img src={`http://localhost:5000${userFeedback.avatar_link}`} alt="" className="avatar-feedback" />
              <Link to={`/users/${userFeedback.id}`} className="link-name-feedback">{userFeedback.first_name}</Link>
            </div>
            <div className="text-value-content-feedback">
              Оценка:
              {' '}
              {stars.map((star, i) => <FaStar size="1em" key={i + 1} color="orange" />)}
            </div>
            <div className="text-content-feedback">
              &quot;
              {el.text_content}
              &quot;
            </div>

          </div>
        ) : 'loading...'}
    </div>
  );
}

export default FeedBackItem;

{ /* <div id="reviews">
            <div className="comment">
              <div className="comment_bubble">
                <div className="feedBack-container-item">
                  <div className="text-header-content-feedback">
                    <div className="text-feedback">Отзыв:</div>
                    {' '}
                    <Link to={`/users/${userFeedback.id}`} className="link-name-feedback">{userFeedback.first_name}</Link>
                    <img src={`http://localhost:5000${userFeedback.avatar_link}`} alt="" className="avatar-feedback" />
                  </div>
                  <div className="text-value-content-feedback">
                    Оценка:
                    {' '}
                    {stars.map((star, i) => <FaStar size="1em" key={i + 1} color="orange" />)}
                  </div>
                  <div className="text-content-feedback">
                    &quot;
                    {el.text_content}
                    &quot;
                  </div>

                </div>
              </div>
            </div>
          </div> */ }
