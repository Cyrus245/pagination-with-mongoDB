const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/paginationDB").then((res) => {
  console.log("db connected");
});
const User = require("./models/users");

const students = [
  {
    name: "cyrus",
    age: 19,
  },
  {
    name: "synthiya",
    age: 20,
  },
  {
    name: "powshi",
    age: 21,
  },
  {
    name: "maria",
    age: 22,
  },
  {
    name: "Ariana",
    age: 25,
  },
  {
    name: "Demi",
    age: 19,
  },
  {
    name: "Mariah",
    age: 20,
  },
  {
    name: "Dua Lipa",
    age: 21,
  },
  {
    name: "jimi hendrix",
    age: 22,
  },
  {
    name: "Shafayat Qazi",
    age: 25,
  },
  {
    name: "Madisson",
    age: 25,
  },
  {
    name: "Harry",
    age: 19,
  },
  {
    name: "James",
    age: 20,
  },
  {
    name: "Gordon",
    age: 21,
  },
  {
    name: "Ramsey",
    age: 22,
  },
  {
    name: "Tommy",
    age: 25,
  },
  {
    name: "Brown",
    age: 19,
  },
  {
    name: "Wayne",
    age: 20,
  },
  {
    name: "colt",
    age: 21,
  },
  {
    name: "Steel",
    age: 22,
  },
  {
    name: "Angela",
    age: 25,
  },
];

User.insertMany(students).then((results) => {
  console.log(results);
});
