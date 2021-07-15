var win = window.open("messagewin.html", "", "width=495px,height=180px");
var message =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. fNemo enim ipsam voluptatem quia voluptas sit";
  count=0;
var messInterval = setInterval(()=>{

    if(count < message.length - 1){
        win.document.body.append(message.charAt(count));
    }
    else if(count === message.length + 50){
        clearInterval(messInterval);
        win.close();
    }
    count++;
},100);


  