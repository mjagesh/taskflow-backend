const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');
const { getUsers } = require('../controllers/userController');
router.get('/', protect, getUsers);

router.get('/profile', protect, (req, res) => {
  res.json({
    message: "You accessed protected route",
    user: req.user
  });
});

module.exports = router;
