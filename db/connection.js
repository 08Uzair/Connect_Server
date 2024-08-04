import mongoose from "mongoose";
const URI =
  "mongodb+srv://uzerqureshi965:server02@cluster0.ffflz6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const dataBaseConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DATA BASE IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
