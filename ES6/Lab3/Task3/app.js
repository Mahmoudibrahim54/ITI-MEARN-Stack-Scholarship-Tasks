var table = document.getElementsByTagName("table")[0];
function fetchJson(link){
    fetch(link)
    .then(getData)
    .then(parseData)
    .then(logData)
    .catch(handelError);
}

function getData(response){
    if(response.status === 200){
        return response;
    }else{
        throw "Something went Wrong"
    }

}
function parseData(response){
    return response.json();
}

function logData(response){
    genHead(response);
    genData(response);

}
function handelError(response){
    console.log(response);

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


fetchJson("https://reqres.in/api/users%E2%80%9D");