const db = require("../data/config.js");

module.exports = {
  find
//   findById,
//   add,
//   update,
//   remove,
//   findSteps,
//   addStep
};

function find() {
  return db.select('*')
  .from('schemes');
}

// function findById(id) {
//   return db("schemes")
//     .where("id", id)
//     .first();
// }

// function findSteps(id) {
//   return db("schemes as s")
//     .where({ scheme_id: id })
//     .join("steps as st", "s.id", "st.scheme_id")
//     .select("s.scheme_name", "st.step_number", "st.instructions")
//     .where({ "s.id": id })
//     .orderBy("step_number", "asc");
// }

// function add(schemeData) {
//   return db("schemes")
//     .insert(schemeData)
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

// function addStep({ instructions, step_number }, scheme_id) {
//   return db("steps")
//   .insert({ instructions, step_number, scheme_id });
// }

// function update(changes, id) {
//   return db("schemes")
//     .where({ id: id })
//     .update(changes);
// }

// function remove(id) {
//   return db("schemes")
//     .where({ id: id })
//     .del();
// }
