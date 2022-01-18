const router = require('express').Router();
const { Portfolio } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, 'id --');
    console.log(req.params, ' req params');
    console.log(req.query, 'query');
    console.log(req.body, 'req body ');

    const getAllPortfolio = await Portfolio.findAll({ where: { user_id: id } });
    console.log(getAllPortfolio);
    return res.json(getAllPortfolio);
  } catch (error) {
    return res.json({ message: 'Ошибка сервера, попробуйте позже' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteImgPortfolio = await Portfolio.destroy(
      { returning: true, where: { id }, raw: true },
    );
    if (deleteImgPortfolio === 1) {
      return res.json({ message: 'Картинка удалена успешно' });
    }
    return res.json({ message: 'Удалять нечего' });
  } catch (error) {
    return res.json({ message: 'Ошибка сервера, попробуйте позже' });
  }
});

module.exports = router;
