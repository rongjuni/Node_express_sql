const express = require("express");
const { getAllEmployees, getOneEmployee } = require("../db/queries/employees");

const router = express.Router();

router.get("/api/employees/id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    if (id) {
      let data = await getOneEmployee(id);
    } else {
      let data = await getOneEmployee(id);
    }
    let data = await employees.getAllEmployees();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
