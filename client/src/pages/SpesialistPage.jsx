import '../components/Scrolllabel.css';
import { useState } from 'react';
import Scrollable from '../components/Scrolllabel';
import About from '../components/About';
import Dialog from '../components/dialog/Dialog';
import Contacts from '../components/Contacts';
// eslint-disable-next-line
const Card = ({ el }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="item" onClick={() => setVisible(true)}>
      <Dialog onChange={setVisible} id={el.id} value={visible}>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
      </Dialog>
      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  );
};

function SpecialistPage() {
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
  ];
  const feedBack = [
    {
      name_feed: 'John',
      text: 'говно',
      id: 1,
    },
    {
      name_feed: 'Fred',
      text: 'жопа',
      id: 2,
    },
    {
      name_feed: 'Will',
      text: 'срань',
      id: 3,
    },
    {
      name_feed: 'David',
      text: 'ублюдок',
      id: 4,
    },
    {
      name_feed: 'Mixal',
      text: 'дебил',
      id: 5,
    },
    {
      name_feed: 'Alex',
      text: 'идиот',
      id: 6,
    },
    {
      name_feed: 'Jamshut',
      text: 'неместный',
      id: 7,
    },
    {
      name_feed: 'Igor',
      text: 'игор',
      id: 8,
    },
  ];
  return (
    <div className="container-spec">
      <div style={{ border: '1px solid black', width: '100px' }}>
        <About />
      </div>

      <div className="portfolio">
        Мои работы:
        <Scrollable _class="items">
          {
            items.map((el) => (
              <Card key={el.id} el={el} />
            ))
          }
        </Scrollable>
      </div>
      <div className="portfolio">
        Отзывы:
        <Scrollable _class="items">
          {
            feedBack.map((el) => (
              <div key={el.id} className="feedBack">
                <h2>{el.name_feed}</h2>
                <p>{el.text}</p>
              </div>
            ))
          }
        </Scrollable>
        Контакты
        <Contacts />
      </div>

    </div>
  );
}

export default SpecialistPage;
