require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB Connected");
  } catch (err) {
    console.error("DB conneciton failed:", err.message);
  }
};

connectDB();

app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes)

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`))