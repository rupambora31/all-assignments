const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function middleware1(req, res, next) {
  console.log("from the middleware" + req.headers.counter);
  next();
}

//app.use(middleware1);

function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.post("/handle-sum", (req, res) => {
  console.log(req.body);
  var counter = req.body.counter;

  if (counter < 100000) {
    var calculatedSum = calculateSum(counter);
    console.log(calculatedSum);
    var answer = "The sum is " + calculatedSum;
    res.send(answer);
  } else {
    res.status(411).send("You have send very big number!");
  }
});

app.post("/createUser", (req, res) => {
  res.send("Hello Universe!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
