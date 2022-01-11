import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="App-header">
        <Link to="/">Xpat</Link>
        <button type="button">Login/Registration</button>
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
