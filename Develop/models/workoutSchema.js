const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day:{ 
  type: Date,
  default: Date.now,
},
exercises: [
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: Number,
    },
    duration:{
      type: String,
      required: Number,
    },
    reps:{
      type: String,
      required: Number,
    },
    sets:{
      type: String,
      required: Number,
    },
    distance:{
      type: String,
      required: Number,
    }
  }
]
});







const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
