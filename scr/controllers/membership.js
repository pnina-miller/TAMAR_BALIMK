const jwt = require("jsonwebtoken");
const Membership = require("../models/membership");
const Person = require("../models/person");
const Animal = require("../models/animal");

module.exports = {
  getAll: async (req, res) => {
    try {
      let result = await Membership.find().populate('animal person');
      return res.status(200).json({ result: result });
    } catch (error) {
      console.log("error on getAll Memberships: ", error);
      return res.status(500).json({ error: error });
    }
  },

  create: async (req, res) => {
    try {
      const { person, animal } = req.body;
      const oPerson = await Person.findById(person);
      const oAnimal = await Animal.findOne({ animal });
      if (!oPerson) {
        return res.status(400).json({ error: "person not found" });
      }
      if (!oAnimal) {
        return res.status(400).json({ error: "animal not found" });
      }
      const memberedAnimal = await Membership.findOne({ animal });
      if (!memberedAnimal) {
        const newMembership = new Membership({
          animal: animal,
          person: person,
        });
        await newMembership.save();
        return res.status(200).json({ newMembership: newMembership });
      } else {
        return res.status(400).json({ error: "animal already has owner" });
      }
    } catch (error) {
      console.log("error on create Membership: ", error);
      return res.status(500).json({ error: error });
    }
  },

  delete: async (req, res) => {
    const condition = req.body;
    try {
      let result = await Membership.findOneAndDelete(condition);
      return res.status(200).json({ result: result });
    } catch (error) {
      console.log("error on delete Memberships: ", error);
      return res.status(500).json({ error: error });
    }
  },
};
