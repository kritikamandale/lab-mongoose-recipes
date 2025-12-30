const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model");
const data = require("./data.json");

mongoose.connect("mongodb+srv://kritikamandale_db_user:I9PosQPG2jWEJ7fw@cluster0.6eccz9c.mongodb.net/recipie_app")
  .then(() => {
    console.log("Connected to DB");
    
    // Delete existing recipe if it exists
    return Recipe.deleteOne({title:"Asian Glazed Chicken Thighs"});
  })
  .then(() => {
    console.log("Cleared any existing recipe");

    return Recipe.create({
      title: "Asian Glazed Chicken Thighs",
      level: "intermidiate",
      ingrediants: [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs"
      ],
      cusine: "Asian",
      dishtype: "main_course",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Chef LePapu"
    });
  })
  .then(recipe => {
    console.log(`Recipe created: ${recipe.title}`);
    
    return Recipe.findOneAndUpdate(
      {title:"Asian Glazed Chicken Thighs"},
      {duration: 100},
      {new:true}
    );
  })
  .then((updatedRecipe) => {
    console.log("recipe duration updated successfully");
    
    return Recipe.findOneAndUpdate(
      {title:"Asian Glazed Chicken Thighs"},
      {dishtype: "soup"},
      {new:true}
    );
  })
  .then(() => {
    console.log("dishtype updated successfully");
    
    return Recipe.deleteOne({title:"Asian Glazed Chicken Thighs"});
  })
  .then(() => {
    console.log("recipe deleted successfully");
  })
.catch(err => console.error(err))
.finally(() => {
  mongoose.connection.close();
});