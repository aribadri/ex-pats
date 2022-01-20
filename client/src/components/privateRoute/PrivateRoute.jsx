import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.user.userData.id);
  const loading = useSelector((state) => state.user.loading);
  // if (loading) {
  // return <div>loading</div>;
  // }
  return (isAuth ? children : <Navigate to="/" />);
}
