const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

//1+2+3+4+....+n
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.get("/handle-sum", (req, res) => {
  var counter = req.query.counter;
  var calculatedSum = calculateSum(counter);
  var answerObj = {
    sum: calculatedSum,
  };
  res.send(answerObj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
