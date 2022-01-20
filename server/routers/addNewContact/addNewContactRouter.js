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
      return res.sendStatus(406);
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

router.delete('/', async (req, res) => {
  try {
    const { id } = req.params;
    // const { contact } = req.body;
    const deleteContact = await Contact.destroy(
      { returning: true, where: { id }, raw: true },
    );
    console.log(deleteContact, 'deleteContact ++==+++==');
    if (deleteContact === 1) {
      return res.json({ message: 'Картинка удалена успешно' });
    }
    return res.json({ message: 'Удалять нечего' });
  } catch (e) {
    res.json({ message: 'Ошибка сервера' });
  }
}); module.exports = router;
