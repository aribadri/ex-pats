const router = require('express').Router();
const {
  User,
} = require('../../db/models');

router.get('/:id', async (req, res) => {
  // console.log(req.query.profiSelected.label);
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

module.exports = router;
