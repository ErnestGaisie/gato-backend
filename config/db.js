import mongoose from "mongoose";
// import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@gato.ipvpf.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    );
    console.log(`MONGODB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
