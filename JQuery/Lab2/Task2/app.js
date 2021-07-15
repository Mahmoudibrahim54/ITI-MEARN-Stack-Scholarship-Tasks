$(function () {
  var drop = true;
  $("#about").click(function () {
    $(".drop-down-menu").remove();
    $(".display-container").remove();
    var displayContainer = $("<div></div>");
    displayContainer.addClass("display-container");
    $("body").append(displayContainer);
    var aboutContent = $(
      "<p>This is About Section</p><p>Lorem ipsum dolor sit amet, " +
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" +
        "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
        "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
        "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat" +
        "cupidatat non proident," +
        "sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    );
    aboutContent.addClass("about-content");
    $(".display-container").prepend(aboutContent);
  });

  $("#gallery").click(function () {
    $(".drop-down-menu").remove();
    $(".display-container").remove();
    var displayContainer = $("<div></div>");
    displayContainer.addClass("display-container");
    $("body").append(displayContainer);
    var galleryContent = $("<div></div>");
    var leftArrow = $('<i class="fas fa-chevron-left"></i>');
    leftArrow.addClass("left-arrow");
    var rightArrow = $('<i class="fas fa-chevron-right"></i>');
    rightArrow.addClass("right-arrow");
    var imgName = 0;
    var slides = $('<img src="images/0.png">');
    slides.addClass("img-content");
    leftArrow.click(function () {
      if (imgName > 1) {
        imgName--;
        console.log(stringImg);
        stringImg = imgName.toString();
        slides.attr("src", "images/" + stringImg + ".jpg");
      }
    });
    rightArrow.click(function () {
      if (imgName < 6) {
        imgName++;
        stringImg = imgName.toString();
        console.log(stringImg);
        slides.attr("src", "images/" + stringImg + ".jpg");
      }
    });
    galleryContent.append(leftArrow);
    galleryContent.append(rightArrow);
    galleryContent.append(slides);
    $(".display-container").append(galleryContent);
  });

  $("#services").click(function () {
    if (drop) {
      $(".display-container").remove();
      var list = $("<ul></ul>");
      list.addClass("drop-down-menu");
      var items = $("<li>Item #1</li><li>Item #2</li><li>Item #3</li>");
      list.append(items);
      $(".buttons-container").append(list);
      drop = false;
      console.log("here");
    } else {
      $(".drop-down-menu").remove();
      drop = true;
    }
  });
  $("#complain").click(function complainFun() {
    $(".drop-down-menu").remove();
    $(".display-container").remove();
    var displayContainer = $("<div></div>");
    displayContainer.addClass("display-container");
    $("body").append(displayContainer);
    $(".display-container").empty();
    var form = $(
      '<form method="GET"><lable>Name:</lable><input type="text" id="name" placeholder="Name"><br>' +
        '<lable>Email:</lable><input type="email" id="email" placeholder="Email"><br>' +
        '<lable>Phone:</lable><input type="tel" id="phone" placeholder="Phone"><br>' +
        '<lable>Complain:</lable><br><textarea id="complain-msg" rows="8" cols="30"></textarea><br>' +
        '<input type="submit" value="send">' +
        "</form>"
    );
    $(".display-container").append(form);
    $("form").submit(function (evt) {
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var complain = $("#complain-msg").val();
      var shortComp = complain.slice(0, 15);
      if (complain.length > 15) {
        shortComp += "...";
      }
      evt.preventDefault();
      console.log(name + "****" + email + "****" + phone);
      $(".display-container").empty();
      var complainView = $(
        "<div><span>Your Complain is:</span>" +
          "<span><strong>" +
          shortComp +
          "</strong></span><br>" +
          "<span>Your Name is:</span>" +
          "<span><strong>" +
          name +
          "</strong></span><br>" +
          "<span>Your Email is:</span>" +
          "<span><strong>" +
          email +
          "</strong></span><br>" +
          "<span>Your Phone is:</span>" +
          "<span><strong>" +
          phone +
          '</strong></span><br><input type="button" value="Return to Edit" id="return"></div>'
      );
      complainView.css({
        "text-align": "center",
        padding: "20px",
        "line-height": "4",
      });
      $(".display-container").append(complainView);
      $("#return").click(complainFun);
    });
  });
});
