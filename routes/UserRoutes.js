const {
  addToLikedMovies,
  getLikedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.post("/liked", getLikedMovies);

module.exports = router;
