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


//1+2+3+4+....+n
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

//1*2*3*4*.....*n
function calculateMult(counter) {
  var ans = 1;
  for (var i = 1; i <= counter; i++) {
    ans *= i;
  }
  return ans;
}


app.post("/handle-sum", (req, res) => {
  var counter = req.body.counter;

  var calculatedSum = calculateSum(counter);
  var calculatedMult = calculateMult(counter); 
  
  var answerObj = {
    sum: calculatedSum,
    multiplication: calculatedMult,
  };

  res.send(answerObj);
});

app.post("/createUser", (req, res) => {
  res.send("Hello Universe!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
