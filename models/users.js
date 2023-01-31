const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
    },
    age: Number,
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
