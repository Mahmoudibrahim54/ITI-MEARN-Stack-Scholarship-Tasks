userData = new URLSearchParams(window.location.href);
document.write(
  '<h3 style="color:red;display:inline;" >Welcome : </h3><h3 style="display:inline;">' +
    userData.get("user-name") +
    "</h3><br>"
);
document.write(
  '<h3 style="color:red;display:inline;" >Your password is : </h3><h3 style="display:inline;">' +
    userData.get("user-pass") +
    "</h3><br>"
);
document.write(
  '<h3 style="color:red;display:inline;" >Your email is : </h3><h3 style="display:inline;">' +
    userData.get("user-email") +
    "</h3><br>"
);
document.write(
  '<h3 style="color:red;display:inline;" >Your job is : </h3><h3 style="display:inline;">' +
    userData.get("user-job") +
    "</h3><br>"
);
document.write(
  '<h3 style="color:red;display:inline;" >Your gender is : </h3><h3 style="display:inline;">' +
    userData.get("gender") +
    "</h3><br>"
);
document.write(
  '<h3 style="color:red;display:inline;" >Your Mobile Number is : </h3><h3 style="display:inline;">' +
    userData.get("user-phone") +
    "</h3><br>"
);
document.write(
  '<h3 style="color:red;display:inline;" >Your Address is: </h3><h3 style="display:inline;">' +
    userData.get("user-address") +
    "</h3><br>"
);
