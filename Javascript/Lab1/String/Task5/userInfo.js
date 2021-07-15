var uName;
var isValidName = true;
do {
  uName = prompt("please enter your name");
  isValidName = true;
  regName= /^[a-zA-z]{1,}$/gm
  if (!regName.test(uName)){
    isValidName = false;
    alert("please enter a vaild name, only characters allowed");
  }
} while (!isValidName);





var uPhone;
var isValidPhone = true;
do {
  uPhone = prompt("please enter your phone number");
  isValidPhone = true;
  if (!isFinite(uPhone) || uPhone.length != 8) {
    isValidPhone = false;
    alert("please enter a valid phone number");
  }
} while (!isValidPhone);





var uMobile;
var isValidMobile = true;
do {
  uMobile = prompt("please enter your mobile number");
  isValidMobile = true
  pPattern = /^(010|012|011|015)[0-9]{8}$/;
  if (!pPattern.test(uMobile)) {
    isValidMobile = false;
    alert("please enter a valid maobile number");
  }
} while (!isValidMobile);






var uEmail;
var isValidEmail = true;

do {
  uEmail = prompt("please enter your email");
  isValidEmail = true;
  var ePattern = /^[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9]+(.com)$/gm;

  if (!ePattern.test(uEmail)) {
    isValidEmail = false;
    alert("please enter a valid  Email");
  }
} while (!isValidEmail);

var tColor;
var isValidColor;
var todayDate = new Date();

do {
  var tColor = prompt("please enter a color to display information red, green or blue");
  var isValidColor= true;
  switch (tColor) {
    case "red":
        document.write(
            '<h1 style="color:red;display:inline;">' +
              "Welcome dear guest : </h1>" +
            '"<h1 style="display:inline">' +
              uName +
              '</h1><br>'
          );
          document.write(
            '<h1 style="color:red;display:inline;">' +
              "your phone number is : </h1>" +
              '<h1 style="display:inline">' +
              uPhone +
              '</h1><br>'
          );
          document.write(
            '<h1 style="color:red;display:inline;">' +
              'your mobile number is : </h1>' +
              '<h1 style="display:inline">'+
              uMobile +
              '</h1><br>'
          );
          document.write(
            '<h1 style="color:red;display:inline;">' +
              "your Email address is : </h1>" +
              '<h1 style="display:inline">' +
              uEmail +
              '</h1><br><br><br><br><br>'
          );
          document.write(
            '<h1 style="color:blue;display:inline;"> Today is : </h1>' +
              '<h1 style="display:inline" >' +
              todayDate +
              '</h1><br>');
      break;

    case "green":
        document.write(
            '<h1 style="color:green;display:inline;">' +
              "Welcome dear guest : </h1>" +
            '"<h1 style="display:inline">' +
              uName +
              '</h1><br>'
          );
          document.write(
            '<h1 style="color:green;display:inline;">' +
              "your phone number is : </h1>" +
              '<h1 style="display:inline">' +
              uPhone +
              '</h1><br>'
          );
          document.write(
            '<h1 style="color:green;display:inline;">' +
              'your mobile number is : </h1>' +
              '<h1 style="display:inline">'+
              uMobile +
              '</h1><br>'
          );
          document.write(
            '<h1 style="color:green;display:inline;">' +
              "your Email address is : </h1>" +
              '<h1 style="display:inline">' +
              uEmail +
              '</h1><br><br><br><br><br>'
          );
          document.write(
            '<h1 style="color:blue;display:inline;"> Today is : </h1>' +
              '<h1 style="display:inline" >' +
              todayDate +
              '</h1><br>');
      break;

    case "blue":
      document.write(
        '<h1 style="color:blue;display:inline;">' +
          "Welcome dear guest : </h1>" +
        '"<h1 style="display:inline">' +
          uName +
          '</h1><br>'
      );
      document.write(
        '<h1 style="color:blue;display:inline;">' +
          "your phone number is : </h1>" +
          '<h1 style="display:inline">' +
          uPhone +
          '</h1><br>'
      );
      document.write(
        '<h1 style="color:blue;display:inline;">' +
          'your mobile number is : </h1>' +
          '<h1 style="display:inline">'+
          uMobile +
          '</h1><br>'
      );
      document.write(
        '<h1 style="color:blue;display:inline;">' +
          "your Email address is : </h1>" +
          '<h1 style="Welcome dear guest :">' +
          uEmail +
          '</h1><br><br><br><br><br>'
      );
      document.write(
        '<h1 style="color:blue;display:inline;"> Today is : </h1>' +
          '<h1 style="display:inline" >' +
          todayDate +
          '</h1><br>'
      );
      break;
    default:
      isValidColor = false;
      alert("please enter a valid color blue, green or red ");
      break;
  }
} while (!isValidColor);
