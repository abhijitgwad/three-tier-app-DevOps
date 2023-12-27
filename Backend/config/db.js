import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to the mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
