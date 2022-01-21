import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './userSpec.module.scss';
import * as actions from '../../store/actions/userAction';

export default function UserSpec({ listForInput, userId, userData }) {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(userData.specialty);

  return (
    <div className={styles.divUserSpecContainer}>
      <p className={styles.titleSpec}>Специализации</p>
      <select
        className={styles.selectUserSpec}
        onChange={(e) => dispatch(
          actions.editSpecialtyThunk({ id: userId, specialty: e.target.value }),
        )}
        defaultValue={selectValue}
      >
        {listForInput.map((specialty) => (
          <option
            key={specialty.id}
          >
            {specialty.label}
          </option>
        ))}
      </select>
    </div>
  );
}
