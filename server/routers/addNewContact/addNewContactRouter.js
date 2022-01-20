const router = require('express').Router({ mergeParams: true });
const { Contact } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.params;
    const { contact } = req.body;
    const candidateContact = await Contact.findOne(
      { where: { user_contact: contact, user_id: id } },
    );

    if (candidateContact) {
      return res.sendStatus(400);
    }

    const contactUser = await Contact.create(
      { user_contact: contact, user_id: id },
      { raw: true },
    );
    res.json(contactUser);
  } catch (e) {
    res.json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
