function XHLObject(fileName) {
  var xhlRequest = new XMLHttpRequest();
  var info;
  this.mkReqeust = function () {
    xhlRequest.onreadystatechange = getFileData;
    xhlRequest.open("GET", fileName, false);
    xhlRequest.send();
  };
  var getFileData = function () {
    if (xhlRequest.readyState === 4) {
      if (xhlRequest.statusText === "OK") {
        info = xhlRequest.responseText;
      }
    }
  };
  this.getData = function () {
    return info;
  };
}

function mkPage(jsonObj) {
  var myData = JSON.parse(jsonObj);
  var firstElement = document.getElementsByTagName("select")[0];
  var secondElement = document.getElementsByTagName("select")[1];
  var band;

  
    for (var i in myData) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      firstElement.append(option);
    }
    firstElement.addEventListener("change", function () {
      band = myData[this.value];
      console.log(band);
      for (var i = 0; i < band.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = band[i]["name"];
        secondElement.append(option);
      }
    });

    secondElement.addEventListener("change", function () {
      var Artist = band[this.value];
      location.href = Artist.value;
    });
}

// run the code
var xhlReq = new XHLObject("rockbands.json");
xhlReq.mkReqeust();
var data = xhlReq.getData();
mkPage(data);
