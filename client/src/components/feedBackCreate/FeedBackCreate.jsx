import { useState } from 'react';
// import './App.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',

};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: '50%',
    height: 30,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBA5A',

  },

};
// eslint-disable-next-line react/function-component-definition
const FeedBackCreate = ({ id, setModal }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [inputValue, setInputValue] = useState('');
  const stars = Array(5).fill(0);

  const userId = useSelector((state) => state.user.userData.id);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    // setHoverValue(undefined);
  };
  async function sendFeedback() {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios.post(`http://localhost:5000/api/users/${id}/feedback`, {
      starCount: currentValue,
      feedback_to: id,
      feedback_from: userId,
      text: inputValue,
    }, { headers, withCredentials: true })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    setModal(false);
  }

  return (
    <div style={styles.container}>
      <h2> Оцените услугу </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => (
          <FaStar
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
              marginRight: 10,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
      <textarea
        placeholder="Введите текст..."
        style={styles.textarea}
        value={inputValue}
        maxLength="600"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        type="button"
        style={styles.button}
        onClick={sendFeedback}
      >
        Отправить
      </button>

    </div>
  );
};
export default FeedBackCreate;
