import mongoose from "mongoose";

const myschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  marked: Boolean,
});

export default mongoose.model("list", myschema);
