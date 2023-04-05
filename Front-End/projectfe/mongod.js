const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/NerveSeg-US")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });


  const newSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
  
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    }
  });

  const doctors = mongoose.model("doctors", newSchema);
  module.exports = doctors;