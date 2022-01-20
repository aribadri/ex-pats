import React from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import uploadPortfolioHandler from '../../upload/uploadPortfolioHandler';
import styles from './portfolio.module.scss';
import * as actions from '../../store/actions/userAction';

export default function Portfolio({
  images, setUploading, userId,
}) {
  // макс размер загружаемого фото
  const maxSize = 5242880;
  const dispatch = useDispatch();

  async function deleteImgHandler(e) {
    const deleteImg = await axios.delete(`http://localhost:5000/api/portfolio/${e.target.id}`);
    // console.log(deleteImg, 'ответ бэка на удаленный имг');
    dispatch(actions.deleteImgPortfolioSuccess(Number(e.target.id)));
  }

  return (
    <div className={styles.divPortfolioContainer}>
      <p className={styles.portfolioTitle}>Мои работы</p>

      <Dropzone
        onDrop={(e) => uploadPortfolioHandler(e, setUploading, userId, dispatch)}
        accept="image/png, image/jpeg, image/jpg, image/pjpeg, image/svg+xml"
        maxSize={maxSize}
      >
        {({
          getRootProps, getInputProps, isDragActive, isDragReject, fileRejections,
        }) => (
          <div className={styles.divUploadsPortfolioContainer} {...getRootProps()}>
            <input {...getInputProps()} />
            <h4>
              {!isDragActive && 'Перетащи фото сюда или нажми, чтобы загрузить'}
              {isDragActive && !isDragReject && 'Брось'}
              {isDragReject && 'Тип файла не принят, извини!'}
              {fileRejections.length > 0 && (<span>Файл слишком большой, (5мб. макс)</span>)}
            </h4>
          </div>
        )}
      </Dropzone>

      {images && (
        <div className={styles.divAllPortfolioImgContainer}>
          {images.map((image, i) => (
            <div className={styles.divPortfolioImgContainer} key={image.id}>
              <img className={styles.imgUpload} src={`http://localhost:5000${image.link_photo}`} alt={image.path} id={image.id} />
              <div
                className={styles.divDeleteImg}
                onClick={(e) => deleteImgHandler(e)}
                id={image.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
