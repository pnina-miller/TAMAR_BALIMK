const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, unique: true, required: true },
  species: { type: String, required: true },
});

module.exports = mongoose.model("animal", animalSchema);
