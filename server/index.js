// =============== INITIALIZE EXPRESS APP ===============
const express = require("express");
const app = express();

// =============== GLOBAL MIDDLEWARE ===============
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //TO ACCESS URL FORM ENCODED
app.use(express.static('upload')); // TO UPLOAD FOLDER
const cors = require("cors");
app.use(cors()); // ALLOW HTTP REQUESTS LOCAL HOSTS

// =============== REQUIRED MODULE ===============
const auth = require("./routes/Auth");
const jobs = require("./routes/Jobs");
const requests = require("./routes/Request");
const applicant = require("./routes/Applicant");
const qualifications = require("./routes/Qualifications");

// =============== RUN THE APP ===============
app.listen(4000, "localhost", () => {
    console.log("SERVER IS RUNNING");
})


// =============== API ROUTES [ ENDPOINTS ] ===============
app.use("/auth", auth);
app.use("/jobs", jobs);
app.use("/Requests", requests);
app.use("/Applicant", applicant);
app.use("/Qualifications", qualifications);