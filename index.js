require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const tripRoutes = require("./routes/tripRoutes");

const logger = require("./middlewares/logger");
const notFound = require("./middlewares/notFound");
const rateLimiter = require("./middlewares/rateLimiter");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(rateLimiter);

// Routes
app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/trips", tripRoutes);

// Not found 
app.use(notFound);

// Port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
