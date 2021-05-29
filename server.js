const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/user");

// Connecting to Database
const connectDB = require("./Models/connection");
connectDB();

const app = express();

app.use(cors());

app.use(
    express.json({
        extended: false,
    })
);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use("/api", userRoute);

const Port = process.env.Port || 5000;

app.listen(Port, () => console.log("Server Started"));
