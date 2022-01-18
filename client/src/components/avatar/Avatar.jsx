import { useSelector } from 'react-redux';
import Dropzone from 'react-dropzone';
import uploadAvatarHandler from '../../upload/uploadAvatarHandler';
import styles from './avatar.module.scss';

export default function Avatar({
  avatar, setAvatar, userId, setUploading,
}) {
  // достаем ссылку на аву из Стора, в Стор ссылка попадает из БД при обновлении страницы
  const userAvatarLink = useSelector((state) => state.user.userData.avatar_link);

  // макс размер загружаемого фото
  const maxSize = 5242880;
  return (
    <div>
      {avatar.path ? (
        <div className={styles.divImgContainer}>
          <img className={styles.imgUpload} src={`http://localhost:5000${avatar.path}`} alt={avatar.name} title={avatar.name} />
        </div>
      ) : <img className={styles.imgUpload} src={`http://localhost:5000${userAvatarLink}`} alt="defaultAva" />}

      <Dropzone
        onDrop={(e) => uploadAvatarHandler(e, setUploading, setAvatar, userId)}
        accept="image/png, image/jpeg, image/jpg, image/pjpeg, image/svg+xml"
        maxSize={maxSize}
      >
        {({
          getRootProps, getInputProps, isDragActive, isDragReject, fileRejections,
        }) => (
          <div className={styles.divUploadsAvatarContainer} {...getRootProps()}>
            <input {...getInputProps()} />
            <h4>
              {!isDragActive && 'Изменить аватарку'}
              {isDragActive && !isDragReject && 'Отпусти'}
              {isDragReject && 'Тип файла не принят, извини!'}
              {fileRejections.length > 0 && (<span>Файл слишком большой, (5мб. макс)</span>)}
            </h4>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
