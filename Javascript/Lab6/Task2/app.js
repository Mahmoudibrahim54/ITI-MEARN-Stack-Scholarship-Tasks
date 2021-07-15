function XHLObject(path) {
    var xhlRequest = new XMLHttpRequest();
    var info;
    this.mkReqeust = function () {
      xhlRequest.onreadystatechange = getFileData;
      xhlRequest.open("GET", path, false);
      xhlRequest.send("");
    };
    var getFileData = function () {
      if (xhlRequest.readyState === 4) {
        console.log(xhlRequest.readyState)
        if (xhlRequest.status === 200) {
          info = xhlRequest.responseText;
        }
      }
    };
    this.getJsonData = function () {
      return info;
    };
  }



  function genHead(users){
      var tHead = table.createTHead();
      var tHeadRow = tHead.insertRow();
      for(var i  in users["data"][0]){
       var th = document.createElement("th");
       var txtNode = document.createTextNode(i);
       th.append(txtNode);
       tHeadRow.append(th);
      }
  }

  function genData(users){
    var userData = users["data"];
    for(var i = 0 ; i < userData.length; i++){
        var tBodyRow = table.insertRow();
        for(var j in userData[i]){
            var td = document.createElement("td");
            var txtNode = document.createTextNode(userData[i][j]);
            td.append(txtNode);
            tBodyRow.append(td);

        }

  }
}


// Test Code
var xhlReq = new XHLObject('https://reqres.in/api/users');
xhlReq.mkReqeust();
var jsonData = xhlReq.getJsonData();
var users = JSON.parse(jsonData);
var table = document.getElementsByTagName("table")[0];
genHead(users);
genData(users);


