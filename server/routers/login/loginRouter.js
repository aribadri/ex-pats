const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const UserDto = require('../../dtos/userDtos');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.json({ message: 'Пользователь не найден' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ message: 'Введен неверный пароль' });
    }

    // создаем сессию
    req.session.name = user.dataValues.id;

    const userDto = new UserDto(user);

    return res.json({ message: 'Авторизация прошла успешно', user: userDto });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
