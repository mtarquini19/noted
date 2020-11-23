// require express
const express = require("express");

// define PORT to be used
const port = process.env.PORT || 3000;

// initialize express
const app = express();

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// require routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listen to specified port
app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`)
})