/* eslint-disable react/jsx-props-no-spreading */
// import { Gapped } from '@skbkontur/react-ui';

function MyButton({ children, ...props }) {
  return (
    <button {...props} type="button">{children}</button>

  );
}
export default MyButton;
