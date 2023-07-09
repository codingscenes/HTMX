const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sentenceArray = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "The sun always shines after the storm.",
  "Actions speak louder than words.",
  "Life is what happens when you're busy making other plans.",
];
function getRandomSentence(sentences) {
  var randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/click", (req, res, next) => {
  res.send("<h1>You just clicked me!</h1>");
});

app.use("/trigger_delay", (req, res, next) => {
  const q = req.query.q || "";
  //   console.log(req.params, req.query, req.body);
  let response = "Database corrupted!";
  if (q.toLowerCase().trim() == "rohit") {
    response = "<h1> Rohit is here</h1>";
  }
  if (q.toLowerCase().trim() == "mohit") {
    response = "<h1> Mohit is here</h1>";
  }
  res.send(response);
});

app.get("/news", (req, res, next) => {
  res.send(`${getRandomSentence(sentenceArray)}`);
});

app.use("/validate", (req, res, next) => {
  const reqBody = req.body || "";
  const title = reqBody.title;
  console.log(reqBody);
  //   console.log(req.params, req.query, req.body);
  let response = "Database corrupted!";
  if (title.toLowerCase().trim() == "rohit") {
    response = "Rohit";
  }
  if (title.toLowerCase().trim() == "mohit") {
    response = "Mohit";
  }
  res.send(response);
});

app.listen(8000, () => {
  console.log("Runnin server on 8000");
});
