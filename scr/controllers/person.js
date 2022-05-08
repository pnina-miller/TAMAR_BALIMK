const jwt = require("jsonwebtoken");
const Person = require("../models/person");

module.exports = {
  getAll: async (req, res) => {
    try {
      let result = await Person.find();
      return res.status(200).json({ result: result });
    } catch (error) {
      console.log("error on getAll persons: ", error);
      return res.status(500).json({ error: error });
    }
  },

  create: async (req, res) => {
    try {
      const { firstName, lastName, phoneNumber, city, country } = req.body;
      const previousPerson = await Person.findOne({
          firstName,
          lastName,
          phoneNumber,
          city,
          country,
        })
      if (!previousPerson) {
        const newPerson = new Person({
          firstName,
          lastName,
          phoneNumber,
          city,
          country,
        });
        newPerson.save();
        return res.status(200).json({ newPerson: newPerson });
      } else {
        return res.status(400).json({ error: "person already exist" });
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  delete: async (req, res) =>{
    const condition=req.body;
    try {
      let result = await Person.findOneAndDelete(condition);
      return res.status(200).json({ result: result });
    } catch (error) {
      console.log("error on delete persons: ", error);
      return res.status(500).json({ error: error });
    }
  }
};
