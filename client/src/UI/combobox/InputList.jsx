/* eslint-disable no-promise-executor-return */
/* eslint-disable max-len */
import { ComboBox, Tooltip } from '@skbkontur/react-ui';
import { useState } from 'react';

function InputList({ arr }) {
  const delay = (time) => (args) => new Promise((resolve) => setTimeout(resolve, time, args));

  const getItems = (query) => Promise.resolve(arr
    .filter((x) => x.label.toLowerCase().includes(query.toLowerCase()) || x.value.toString(10) === query)
    .map(({ label, ...rest }) => {
      const start = label.toLowerCase().indexOf(query.toLowerCase());
      const end = start + query.length;

      return {
        ...rest,
        label,
        highlightedLabel:
            start >= 0 ? (
              <span>
                {label.substring(0, start)}
                <strong
                  style={{
                    fontSize: '1.1em',
                  }}
                >
                  {label.substring(start, end)}
                </strong>
                {label.substring(end)}
              </span>
            ) : null,
      };
    })).then(delay(500));

  const [selected, setSelected] = useState('');
  const [error, setError] = useState(false);

  const handleValueChange = (value) => {
    setSelected(value);
    setError(false);
  };

  const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };

  const handleFocus = () => setError(false);

  const renderItem = (item) => {
    if (item.highlightedLabel) {
      return item.highlightedLabel;
    }

    return item.label;
  };
  return (

    <Tooltip closeButton={false} render={() => 'Необходимо выбрать ваш регион!'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Выберете ваш регион"
        value={selected}
        renderItem={renderItem}
      />
    </Tooltip>
  );
}

export default InputList;
