/* eslint-disable react/jsx-props-no-spreading */
function MyButton({ children, ...props }) {
  return (
    <button {...props} type="button">{children}</button>
  );
}
export default MyButton;
