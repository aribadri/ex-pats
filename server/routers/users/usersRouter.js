/* eslint-disable max-len */
const router = require('express').Router();
const {
  User,
  Reviews,
  Specialty,
  Rating,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const profiArr = await User.findAll();
    const specialtiesiArr = await Specialty.findAll();
    // console.log(specialtiesiArr);

    return res.json({
      profiArr,
      specialtiesiArr,
    });
  } catch (error) {
    return res.json(error);
  }
});

router.get('/search/:id', async (req, res) => {
  try {
    console.log(req.headers.location);
    const profiArr = await User.findAll({ where: { specialty: req.params.id, user_country: req.headers.location } });
    return res.json(
      profiArr,
    );
  } catch (error) {
    return res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: Reviews,
    });
    return res.json(
      user,
    );
  } catch (error) {
    return res.json(error);
  }
});

router.post('/:id/feedback', async (req, res) => {
  try {
    console.log(req.body);

    const revew = await Reviews.create({
      user_id_from: req.body.feedback_from,
      user_id_to: req.body.feedback_to,
      text_content: req.body.text,
      stars_count: req.body.starCount,
    });
    // нужно создавать табл рейтинга сразу при регистрации
    return res.json(
      revew,
    );
  } catch (error) {
    return res.json(error);
  }
});

router.get('/:id/feedback/:param', async (req, res) => {
  try {
    console.log(req.params.id, 'params');
    const user = await User.findOne({
      where: {
        id: req.params.param,
      },
    });
    return res.json(
      user,
    );
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
