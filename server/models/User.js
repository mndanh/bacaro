const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
},{
  timestamps: true
},
);

userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = model('User', userSchema);
module.exports = User;
