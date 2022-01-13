/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef } from 'react';

function Scrolllable({ children, _class }) {
  const ref = useRef();
  const [move, setMove] = useState({ isScrolling: false, clientX: 0, scrollX: 0 });
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({ left: el.scrollLeft + e.deltaY * 4, behavior: 'smooth' });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.addEventListener('wheel', onWheel);
    }
  }, []);
  const onMouseMove = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    const { clientX, scrollX, isScrolling } = move;
    if (isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;
      setMove({ ...move, scrollX: scrollX + e.clientX - clientX, clientX: e.clientX });
    }
  };
  const onMouseDown = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    setMove({ ...move, isScrolling: true, clientX: e.clientX });
  };
  const onMouseUp = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    setMove({ ...move, isScrolling: false });
  };
  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  });
  return (
    <div
      ref={ref}
      className={_class}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {React.Children.map(children, (child) => React.Children.only(child))}
    </div>
  );
}
export default Scrolllable;
