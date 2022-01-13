import React, { useEffect, useRef } from 'react';
import './Dialog.css';
import useClickOutside from '../../hook/ClickOutsideHook';

// eslint-disable-next-line
const DialogOverlay = ({ children, onClick, id }) => {
  return (
    <div className="dialog" onClick={onClick}>
      <div className="overlay-conteiner" id={id}>{children}</div>
    </div>
  );
};
export default function Dialog({
  notClosable, id, children, onChange, value,
}) {
  const dialogOverlayRef = useRef(null);
  const close = () => onChange(false);

  const documentKeypressHandler = (e) => {
    if (e.keyCode === 27 && !notClosable) {
      close();
    }
  };
  useClickOutside({
    ref: dialogOverlayRef,
    callback: () => {
      onChange(false);
    },
  });
  useEffect(() => {
    document.addEventListener('keydown', documentKeypressHandler);
    return () => document.removeEventListener('keydown', documentKeypressHandler);
  }, []);

  return (
    <div>
      {value && (
        <DialogOverlay id={id} onClick={close}>
          <div ref={dialogOverlayRef} className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
            {/* {!props.notClosable ? <Close onClick={close} /> : null} */}
            {children}
          </div>
        </DialogOverlay>
      )}
    </div>
  );
}
