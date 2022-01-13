/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useLocation } from 'react-router-dom';

function LogiForm() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Name:
          <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default LogiForm;
