const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const membershipSchema = new Schema({
  person: { type: Schema.Types.ObjectId, ref: "person", required: true},
  animal: { type: Schema.Types.ObjectId, ref: "animal", unique: true, required: true},
});

module.exports = mongoose.model("membership", membershipSchema);
