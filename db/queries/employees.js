const { Query } = require("../models");

const getAllEmployees = () => {
  return Query("SELECT * FROM employees");
};

// in question mark, each paramater goes in//
// const getOneEmployee = (id, name) => {
//   return Query("SELECT * FROM employees WHERE id = ? AND name =?", [id, name]);
// };

const getOneEmployee = (id) => {
  return Query("SELECT * FROM employees WHERE EmployeeID = ?", [id]);
};

const removeOneEmployee = (id) => {
  return Query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
};

const updateOneEmployee = (id, body) => {
  return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [body, id]);
};

const insertOneEmployee = (body) => {
  return Query("INSERT INTO employees VALUE ?", [body]);
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  removeOneEmployee,
  updateOneEmployee,
  insertOneEmployee,
};
