const app = require("./app");
const config = require("./config/config");
const connectDB = require("./config/db");

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`🚀 Server running on port ${config.port}`);
  });
});
