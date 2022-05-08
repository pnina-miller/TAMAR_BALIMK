const jwt = require("jsonwebtoken");
const Animal = require("../models/animal");

module.exports = {
  getAll: async (req, res) => {
    try {
      let result = await Animal.find();
      return res.status(200).json({ result: result });
    } catch (error) {
      console.log("error on getAll animals: ", error);
      return res.status(500).json({ error: error });
    }
  },

  create: async (req, res) => {
    try {
      const { name, species } = req.body;
      const previousAnimal = await Animal.findOne({ name, species });
      if (!previousAnimal) {
        const newAnimal = new Animal({ name, species });
        newAnimal
          .save()
          .then((result) => {
            return res.status(200).json({ newAnimal: newAnimal });
          })
          .catch((error) => {
            console.log('error on create animal: ', error);
            return res.status(500).json({ error: error });
          });
      } else {
        return res.status(400).json({ error: "animal already exist" });
      }
    } catch (error) {
      console.log("error on create animal: ", error);
      return res.status(500).json({ error: error });
    }
  },

  delete: async (req, res) => {
    const condition = req.body;
    try {
      let result = await Animal.findOneAndDelete(condition);
      return res.status(200).json({ result: result });
    } catch (error) {
      console.log("error on delete animals: ", error);
      return res.status(500).json({ error: error });
    }
  },
};
