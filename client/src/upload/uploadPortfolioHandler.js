import axios from 'axios';
import { addPortfolioImgSuccess } from '../store/actions/userAction';

const uploadPortfolioHandler = async (
  e,
  setUploading,
  userId,
  dispatch,
  multiple = true,
) => {
  const formData = new FormData();
  if (multiple) {
    const files = e;

    // загружаем в форму все добавленные элементы под именем imagesUp
    for (let i = 0; i < files.length; i += 1) {
      formData.append('imagesUp', files[i]);
    }
  } else {
    formData.append('imagesUp', e.target.files[0]);
  }

  // индикатор загрузки пошел
  setUploading(true);

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Folder: 'uploads',
        userid: `${userId}`,
      },
    };

    const { data } = await axios.post('http://localhost:5000/api/upload/portfolio', formData, config);
    // multiple ? setImages(prevImages.concat(data.data)) : setImages(data.data[0]);
    dispatch(addPortfolioImgSuccess(data.data));
    setUploading(false);
  } catch (error) {
    console.error(error, 'ошибка ');
    setUploading(false);
  }
};

export default uploadPortfolioHandler;
