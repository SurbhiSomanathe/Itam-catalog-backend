// require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const cors=require("cors");
const dotenv = require("dotenv");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// app.use('/api',(request,response) => {
//     response.send("Hola US")
// })


