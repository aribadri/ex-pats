const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const UserDto = require('../../dtos/userDtos');

router.post('/', async (req, res) => {
  try {
    const {
      email, password, latitude, longitude,
    } = req.body;
    console.log(req.body, 'req.body login');
    const user = await User.findOne({ where: { email } });
    console.log(user, 'login user ');
    if (!user) {
      return res.json({ message: 'Пользователь не найден' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ message: 'Введен неверный пароль' });
    }

    // проверка на пустые значения
    if ((longitude !== '' && latitude !== '')
    || (longitude !== ' ' && latitude !== ' ')) {
      const locationToUpdate = {
        longitude,
        latitude,
      };

      // обновляем локацию
      const updateLocation = await User.update(
        locationToUpdate,
        { returning: true, where: { id: user.dataValues.id }, raw: true },
      );
      console.log(updateLocation, 'обновленная локация');

      // если локация не изменилась
      if (updateLocation[0] === 0) {
        const userDto = new UserDto(user);
        console.log(userDto, 'userDto data');
        // создаем сессию
        req.session.user = userDto;
        return res.json({ message: 'Авторизация прошла успешно, локация не изменилась', user: userDto });
      }

      // изменили локацию и отправили на клиент новые данные
      const userDto = new UserDto(updateLocation[1][0]);
      req.session.user = userDto;
      return res.json({ message: 'Авторизация прошла успешно', user: userDto });
    }

    const userDto = new UserDto(user);

    // создаем сессию
    req.session.user = userDto;

    return res.json({ message: 'Авторизация прошла успешно, локация не изменилась', user: userDto });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
