function mkPromise(link) {
  const myPromise = new Promise((res, rej) => {
    var xhlRequest = new XMLHttpRequest();
    xhlRequest.open("GET", link);
    xhlRequest.onreadystatechange = () => {
      if (xhlRequest.readyState === 4) {
        console.log("ready");
        if (xhlRequest.status === 200) {
          console.log("ok");
          res(xhlRequest);
        }
      }
    };
    xhlRequest.send();
  });

  return myPromise;
}
mkPromise("https://reqres.in/api/users")
  .then(consume)
  .then(logData)
  .catch(handelError);

function consume(res) {
  let info = res.responseText;
  let parsedInfo = JSON.parse(info);
  return parsedInfo;
}

function logData(res) {
  genHead(res);
  genData(res);
}
function handelError(response) {
  console.log(response);
}

function genHead(users) {
  var table = document.getElementsByTagName("table")[0];
  var tHead = table.createTHead();
  var tHeadRow = tHead.insertRow();
  for (var i in users["data"][0]) {
    var th = document.createElement("th");
    var txtNode = document.createTextNode(i);
    th.append(txtNode);
    tHeadRow.append(th);
  }
}

function genData(users) {
  var table = document.getElementsByTagName("table")[0];
  var userData = users["data"];
  for (var i = 0; i < userData.length; i++) {
    var tBodyRow = table.insertRow();
    for (var j in userData[i]) {
      var td = document.createElement("td");
      var txtNode = document.createTextNode(userData[i][j]);
      td.append(txtNode);
      tBodyRow.append(td);
    }
  }
}
