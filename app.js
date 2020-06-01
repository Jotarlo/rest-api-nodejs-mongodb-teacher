/** Importing packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** App configuration */
let port = config.get("server-port");
let bodyParserJSON = bodyParser.json();
let bodyParserURLEncoded = bodyParser.urlencoded({extended: true});
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

/** REST api methods */

// Welcome
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// Teacher routes
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

// Course 
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);



/** App start */
app.listen(port, () => {
    console.log(`Server is running in port ${port}...`);
});

