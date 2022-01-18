const router = require('express').Router();
const {
  User,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const profiArr = await User.findAll();
    return res.json(
      profiArr,
    );
  } catch (error) {
    return res.json(error);
  }
});

router.get('/search/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const profiArr = await User.findAll();
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
    });
    return res.json(
      user,
    );
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
