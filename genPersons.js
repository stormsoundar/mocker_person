const mongoose = require("mongoose");
const faker = require("faker");
const Persons = require("./model/personSchema");
const genPerson = require("./createPersons");

const run = async () => {
  await mongoose.connect("mongodb://localhost:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let pcount = await Persons.findOne().sort({ id: -1 });
  let i = pcount === null ? 1 : pcount.id + 1;
  console.log("i = " + i);

  for (var j = 0; j < 500; j++) {
    console.log("Person Count = " + i);
    await Persons.create(await genPerson(i++, {}));
  }
};

run();
