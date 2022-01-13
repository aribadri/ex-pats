import { useEffect } from 'react';

export default function useClickOutside({ ref, callback }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const el = ref.current;
      const path = event.path || (event.composedPath && event.composedPath());
      // eslint-disable-next-line
      for (const pathEl of path) {
        if (pathEl === el) return;
      }
      callback();
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
