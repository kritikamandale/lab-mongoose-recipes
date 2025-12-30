const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title:{
  type: String,
  required: true,
  unique : true
},
level:{
  type: String,
  enum :["easy", "intermidiate", "pro"]
},
ingrediants:[String],
cusine:{
  type:String,
  required: true
},
dishtype:{
  type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other"
    ]
},
image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Recipe", recipeSchema);

