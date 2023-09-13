require("express-async-errors");
require("dotenv/config");
const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError");
const migrations = require("./database/sqlite/migrations");
const uploadConfig = require("./configs/upload");
const cors = require("cors");

migrations();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "Error",
      message: error.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
