import axios from 'axios';

// Upload image
const uploadAvatarHandler = async (
  e,
  setUploading,
  setAvatar,
  userId,
  multiple = false,
) => {
  const formData = new FormData();

  if (multiple) {
    const files = e;

    // загружаем в форму все добавленные элементы под именем imagesUp
    for (let i = 0; i < files.length; i += 1) {
      formData.append('imagesUp', files[i]);
    }
  } else {
    formData.append('imagesUp', e[0]);
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

    const { data } = await axios.post('http://localhost:5000/api/upload', formData, config);
    console.log(data, 'data ответ от бэка');
    setAvatar(data.data[0]);
    setUploading(false);
  } catch (error) {
    console.error(error, 'ошибка ');
    setUploading(false);
  }
};

export default uploadAvatarHandler;
