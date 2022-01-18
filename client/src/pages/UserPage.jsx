import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../components/avatar/Avatar';
import Portfolio from '../components/portfolio/Portfolio';
import { getAllPortfolioThunk } from '../store/actions/userAction';

function UserPage() {
  // userId используется для того, чтобы обновить ссылку в БД у конкретного юзера
  const userId = useSelector((state) => state.user.userData.id);

  // достаем все картинки из портфолио
  const userPortfolioData = useSelector((state) => state.user.userPortfolio);
  const [avatar, setAvatar] = useState({});
  const dispatch = useDispatch();

  // состояние для лоадера, можно заменить на состояние из редакса
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(getAllPortfolioThunk(userId));
    }
  }, [userId]);

  return (
    <div>
      <Avatar avatar={avatar} setAvatar={setAvatar} userId={userId} setUploading={setUploading} />
      <Portfolio
        images={userPortfolioData}
        userId={userId}
        setUploading={setUploading}
      />
    </div>
  );
}

export default UserPage;
