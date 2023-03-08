const express = require("express");
const {
  getAllData,
  viewTask,
  editTask,
  createTasks,
  deleteTask,
} = require("../controller/tasks");
const router = express.Router();

router.route("/").get(getAllData).post(createTasks);
router.route("/:id").get(viewTask).patch(editTask).delete(deleteTask);

module.exports = router;
