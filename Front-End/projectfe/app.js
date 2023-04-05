const express = require("express");
const patients = require("./mongo");
const doctors = require("./mongod");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await patients.findOne({ email: email });
    const checkp = await patients.findOne({ password: password });

    if (check && checkp) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/patient-reg", async (req, res) => {
  const { email, password, text, date } = req.body;
  const data = {
    email: email,
    password: password,
    text: text,
    date: date,
  };

  try {
    const check = await patients.findOne({ email: email });
    const checkp = await patients.findOne({ password: password });

    if (check && checkp) {
      res.json("exist");
    } else {
      res.json("notexist");
      await patients.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});


app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await doctors.findOne({ email: email });
    const checkp = await doctors.findOne({ password: password });

    if (check && checkp) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/doctor-reg", async (req, res) => {
  const { email, password, text, id } = req.body;
  const data = {
    email: email,
    password: password,
    text: text,
    id: id,
  };

  try {
    const check = await doctors.findOne({ email: email });
    const checkp = await doctors.findOne({ password: password });

    if (check && checkp) {
      res.json("exist");
    } else {
      res.json("notexist");
      await doctors.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("port connected");
});
