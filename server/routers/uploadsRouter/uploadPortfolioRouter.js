const multer = require('multer');
const path = require('path');
const router = require('express').Router();
const { Portfolio } = require('../../db/models');

// функция конвертирует и получить читабельный размер файла
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

// указываем куда сохраняем и меняем имя файла
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadFolder = req.headers.folder;
    cb(null, `public/${uploadFolder || ''}`);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${
        file.originalname.split('.')[0]
      }-x-pat${path.extname(file.originalname)}`
        .toLowerCase()
        .replace(/_/g, '-')
        .replace(' ', '-'),
    );
  },
});

// проверяем тип файла
function checkFileType(file, cb) {
  // тип файла
  const filetypes = /jpg|jpeg|png|svg+xml|svg|webp|pjpeg/;
  // расширение
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  // если расширение и mimetype не подходят, выводим ошибку
  if (!extname && !mimetype) {
    return cb(new Error('Ты можешь загрузить только картинки!'), false);
  }

  return cb(null, true);
}

// загрузка
const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    checkFileType(file, cb);
  },
  // макс кол-во загружаеммых файлов
}).array('imagesUp', 10);

router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    console.log(req.body, 'body upload file');
    if (err) {
      console.log(err.message);

      res.status(400).json({
        status: 'Не удалось загрузить',
        message: err,
      });
    } else {
      const { files } = req;

      if (!files) {
        res.status(400);
        throw new Error('Пожалуйста, загрузи файл');
      }

      const userId = req.headers.userid;
      try {
        const arrayData = files.map(async (file) => {
          let portfolioData = await Portfolio.create({ link_photo: `${file.path.replace('public', '')}`, user_id: userId }, { raw: true });

          portfolioData.dataValues.size = formatBytes(file.size);
          return portfolioData;
        });
        Promise.all(arrayData)
          .then((data) => {
            res.json({
              status: 'success',
              message: 'Файл успешно загружен',
              data,
            });
          });
      } catch (error) {
        return res.json({ message: 'Ошибка сервера, попробуйте позже' });
      }
    }
  });
});

module.exports = router;
