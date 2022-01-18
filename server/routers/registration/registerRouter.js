const router = require('express').Router();
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { User } = require('../../db/models');
const UserDto = require('../../dtos/userDtos');

router.post('/', async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ message: 'Ошибка при регистрации', errors });
    }
    const {
      first_name, last_name, email,
      password, latitude, longitude,
      user_city, user_country,
    } = req.body;
    console.log(req.body, 'req body register');
    const candidateFirstName = await User.findOne({ where: { first_name } });
    const candidateLastName = await User.findOne({ where: { last_name } });
    const candidateEmail = await User.findOne({ where: { email } });

    if (candidateFirstName) {
      return res.json({ message: 'Пользователь с таким именем уже существует' });
    }

    if (candidateLastName) {
      return res.json({ message: 'Пользователь с такой фамилией уже существует' });
    }

    if (candidateEmail) {
      return res.json({ message: 'Пользователь с такой почтой уже существует' });
    }

    const hashPassword = await bcrypt.hash(password, 7);

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashPassword,
      latitude,
      longitude,
      user_city,
      user_country,
    });

    const userDto = new UserDto(newUser);

    // создаем сессию
    req.session.user = userDto;

    return res.json({ message: 'Регистрация прошла успешно', user: userDto });
  } catch (error) {
    return res.json({ message: 'Регистрация прошла не удачно, попробуйте позже' });
  }
});

module.exports = router;
