
function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(logResponseBody)
}

var sendObj = {
    method: "GET"
};

fetch("http://localhost:3000/handle-sum?counter=100", sendObj).then(callbackFn);