const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const UserDto = require('../../dtos/userDtos');

router.get('/', async (req, res) => {
  try {
    if (req.session.user) {
      // проверяем инфу о юзере, могла обновиться и отправляем актуальные данные
      const userCheckData = await User.findOne({ where: { id: req.session.user.id }, raw: true });

      const userDto = new UserDto(userCheckData);

      // создаем сессию c обновлёнными данными
      req.session.user = userDto;

      return res.json(req.session.user);
    }
    return res.json({});
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
