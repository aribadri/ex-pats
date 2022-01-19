const router = require('express').Router({ mergeParams: true });
const { User } = require('../../db/models');

router.put('/', async (req, res) => {
  try {
    const { id } = req.params;
    const { status_service } = req.body;
    if (Number(id)) {
      const statusService = await User.update(
        { status_service },
        { returning: true, where: { id }, raw: true },
      );
      if (statusService[1][0].status_service === true
        || statusService[1][0].status_service === false) {
        res.json({ status_service: statusService[1][0].status_service });
      }
    }
  } catch (e) {
    console.log(e);
    res.json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
