const app = require("./src/app");
const connect = require("./src/db/db");

const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0', () => {
  console.log("SERVER IS RUNNING ON PORT NO :", PORT);
  connect();
});
