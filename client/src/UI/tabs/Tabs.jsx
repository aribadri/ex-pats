/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import { useState } from 'react';
import MyButton from '../button/MyButton';
import TabContent from './TabContent';
import './Tabs.css';

function Tabs({ items }) {
  const [active, setActive] = useState(1);
  const openTab = (e) => setActive(+e.target.dataset.index);
  return (
    <div className="form-auth-container">
      <div className="tab">
        {items.map((n, i) => (
          <MyButton
            key={i + 1}
            className={`tablinks ${i === active ? 'active' : ''}`}
            onClick={openTab}
            data-index={i}
          >
            {n.title}
          </MyButton>
        ))}
      </div>
      {items[active] && <TabContent {...items[active]} />}
    </div>
  );
}

export default Tabs;
