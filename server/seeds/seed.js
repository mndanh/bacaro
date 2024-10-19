const db = require("../config/connection")
const User = require("../models/User");
const bcrypt = require("bcrypt");


/*
  To seed data:

  1. Import your model
  2. Create an array of data with the variable name seedData
  3. Uncomment the code above and replace MODEL with your imported model

*/

const users = [
  {
    email: "john.doe@example.com",
    fname: "John",
    lname: "Doe",
    password: "password123"
  },
  {
    email: "jane.smith@example.com",
    fname: "Jane",
    lname: "Smith",
    password: "password123"
  },
  {
    email: "alice.jones@example.com",
    fname: "Alice",
    lname: "Jones",
    password: "password123"
  },
  {
    email: "michael.brown@example.com",
    fname: "Michael",
    lname: "Brown",
    password: "password123"
  },
  {
    email: "sarah.white@example.com",
    fname: "Sarah",
    lname: "White",
    password: "password123"
  },
  {
    email: "david.clark@example.com",
    fname: "David",
    lname: "Clark",
    password: "password123"
  },
  {
    email: "emily.taylor@example.com",
    fname: "Emily",
    lname: "Taylor",
    password: "password123"
  },
  {
    email: "daniel.martin@example.com",
    fname: "Daniel",
    lname: "Martin",
    password: "password123"
  },
  {
    email: "laura.wilson@example.com",
    fname: "Laura",
    lname: "Wilson",
    password: "password123"
  },
  {
    email: "robert.moore@example.com",
    fname: "Robert",
    lname: "Moore",
    password: "password123"
  },
  {
    email: "chris.hall@example.com",
    fname: "Chris",
    lname: "Hall",
    password: "password123"
  },
  {
    email: "amy.allen@example.com",
    fname: "Amy",
    lname: "Allen",
    password: "password123"
  },
  {
    email: "steven.thomas@example.com",
    fname: "Steven",
    lname: "Thomas",
    password: "password123"
  },
  {
    email: "karen.jackson@example.com",
    fname: "Karen",
    lname: "Jackson",
    password: "password123"
  },
  {
    email: "brian.lee@example.com",
    fname: "Brian",
    lname: "Lee",
    password: "password123"
  },
  {
    email: "megan.scott@example.com",
    fname: "Megan",
    lname: "Scott",
    password: "password123"
  },
  {
    email: "josh.wright@example.com",
    fname: "Josh",
    lname: "Wright",
    password: "password123"
  },
  {
    email: "nicole.evans@example.com",
    fname: "Nicole",
    lname: "Evans",
    password: "password123"
  },
  {
    email: "ryan.walker@example.com",
    fname: "Ryan",
    lname: "Walker",
    password: "password123"
  },
  {
    email: "olivia.green@example.com",
    fname: "Olivia",
    lname: "Green",
    password: "password123"
  }
];

db.once('open', async () => {
  await User.insertMany(users)
  console.log("seeding complete")
  process.exit(0)
});

// const hashedUsers = await User.all(
//   users.map(async (user) => {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     return { ...user, password: hashedPassword };
//   })
// );

// const insertedUsers = await User.insertMany(hashedUsers);
// const userIds = insertedUsers.map((user) => user._id);
