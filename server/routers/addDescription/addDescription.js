const router = require('express').Router({ mergeParams: true });
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    if (Number(id)) {
      const descriptionUser = await User.update(
        { description },
        { returning: true, where: { id }, raw: true },
      );
      if (descriptionUser[1][0].status_service === true
        || descriptionUser[1][0].status_service === false) {
        res.json({ descriptionUser: descriptionUser[1][0].description });
      }
    }
  } catch (e) {
    res.json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
