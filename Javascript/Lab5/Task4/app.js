
function Box(width,length,volume,material,storingType){
    var content = [];
    this.wid = width;
    this.len= length;
    this.vol = volume;
    this.mat = material;
    this.stored = storingType;
    //first implementation for number of books incremented on adding decremented on deleting
    this.numOfBooks = 0;
    //another implementation for number of books

    this.bookNum = function(){
        return content.length;
    }

    this.addBook = function(book){
        if(book.constructor === Book){
            content.push(book);
            this.numOfBooks++;
        }else{
            throw "please enter a valid book as an object"
        }

    }
    this.deleteBookByName= function(name){
        for(var i = 0; i < content.length; i++){

            if(content[i].title === name){
                content.splice(i,1);
                this.numOfBooks--;

            }

        }
    }
    this.deleteBookByType= function(typ){
        for(var i = 0; i < content.length; i++){

            if(content[i].type === typ){
                content.splice(i,1);
                this.numOfBooks--;
            }

        }
    }
    this.getContent = function(){
        return content;
    }


}

Box.prototype.toString = function (){
    return "Box width is : " + this.wid + " ,Length is : " + this.len + " and it's stored " + this.stored;
}


Box.prototype.valueOf = function(){
    return this.numOfBooks;
}

function Book(title,numChaps,author,numPages,pub,numCopies,type){
    this.title = title;
    this.numOfChapters = numChaps;
    this.author = author;
    this.numOfPages = numPages;
    this.publisher = pub;
    this.numOfCopies = numCopies;
    this.type = type;
}

var book1= new Book("good",4,"mahmoud",500,"nada",1000,"comedy");
var book2= new Book("very good",4,"mahmoud",500,"nada",1000,"fiction");
var book3= new Book("excellent",4,"mahmoud",500,"nada",1000,"story");
var book4= new Book("bad",4,"mahmoud",500,"nada",1000,"science");

var box1 = new Box(100,100,10000,"wood","vertically");
box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box1.addBook(book4);





//valueOf example from MDN returning the same result as my 
// valueOf implementation not sure what seems to be the problem
function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);