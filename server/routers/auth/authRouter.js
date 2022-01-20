const router = require('express').Router();
const { User, Contact } = require('../../db/models');
const UserDto = require('../../dtos/userDtos');

router.get('/', async (req, res) => {
  try {
    if (req.session.user) {
      // проверяем инфу о юзере, могла обновиться и отправляем актуальные данные
      const userCheckData = await User.findOne({ where: { id: req.session.user.id }, raw: true });
      const userContactData = await Contact.findAll(
        { where: { user_id: req.session.user.id }, raw: true },
      );
      console.log(userCheckData, 'user auth');
      const userDto = new UserDto(userCheckData);

      // создаем сессию c обновлёнными данными
      req.session.user = { id: userCheckData.id, email: userCheckData.email };

      return res.json({ userDto, userContactData });
    }
    return res.json({ message: 'пользователь не авторизован' });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
