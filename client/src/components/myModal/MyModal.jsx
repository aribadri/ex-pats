/* eslint-disable jsx-a11y/no-static-element-interactions */
import classes from './MyModal.module.css';

function MyModal({ visible, setModal, children }) {
  const rootClasses = [classes.myModal];
  console.log(1);
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
