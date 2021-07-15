var max = 0;
var win = window.open(
  "scroll_win.html",
  "",
  "width=395,height=100,scrollbars=yes"
);
win.document.write(
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit"
);


var scrollDown = setInterval(function(){

  win.window.scrollBy(0, 20);
  max += 20;
if(max == 100){
  win.close();
  clearInterval(scrollDown);
}

},1000)
