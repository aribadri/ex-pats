const router = require('express').Router({ mergeParams: true });
const { User } = require('../../db/models');

router.put('/', async (req, res) => {
  try {
    const { id } = req.params;
    const { specialty } = req.body;
    console.log(req.body, 'req body');
    if (Number(id)) {
      const statusSpecialty = await User.update(
        { specialty },
        { returning: true, where: { id }, raw: true },
      );
      if (statusSpecialty[1][0].status_service === true
        || statusSpecialty[1][0].status_service === false) {
        res.json({ specialty: statusSpecialty[1][0].specialty });
      }
    }
  } catch (e) {
    console.log(e);
    res.json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
