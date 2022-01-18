import React from 'react';

function StartChating() {
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

  return (
    <div style={styles.container}>
      <div>
        Начать чат:

      </div>
      <textarea
        placeholder="Напишите сообщение..."
        style={styles.textarea}
      />

      <button
        type="button"
        style={styles.button}
      >
        Отправить
      </button>
    </div>
  );
}
// value={messageValue} onChange={(e) => setMessageValue(e.target.value)}
// onClick={onSendMessage}
export default StartChating;
