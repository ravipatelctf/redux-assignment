const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  marks: Number,
  attendance: Number,
  grade: String,
},
{
    timestamps: true,
},
);

const Student = mongoose.model("Student", studentSchema, "students");

module.exports = { Student };