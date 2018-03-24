
// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // headline is a required string
  title: {
    type: String,
    required: true
  },
  // summary is not a required string
  summary: {
    type: String,
    required: false
  },
  // link is a required string
 link: {
    type: String,
    required: true
  },
 // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Articles = mongoose.model("Articles", ArticleSchema);

// Export the Article model
module.exports = Articles;

