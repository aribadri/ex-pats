import { useState } from 'react';
import styles from './userSpec.module.scss';

export default function UserSpec({ listForInput }) {
  const [selectValue, setSelectValue] = useState('');
  function selectValueHandler(e) {
    console.log(e.target.value);
    setSelectValue(e.target.value);
  }
  return (
    <div className={styles.divUserSpecContainer}>
      <p className={styles.titleSpec}>Специализации</p>
      <select
        className={styles.selectUserSpec}
        onChange={(e) => selectValueHandler(e)}
      >
        {listForInput.map((specialty) => (
          <option
            key={specialty.id}
            value={specialty.label}
          >
            {specialty.label}
          </option>
        ))}
      </select>
    </div>
  );
}
