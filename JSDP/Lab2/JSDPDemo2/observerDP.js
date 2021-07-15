// //
// function handlerbtn() {
//     //get testDiv
//     //innerTextValue
//     //alert
//     testDiv.innerText = "new Div Testing with BTn";
//     alert("Hi");
//     testDiv.style.backgroundColor = "red";

// }

// //select btn
// //new event handler
// // btn1.onclick=function(){
// //     document.body.style.backgroundColor="yellow";
// //     document.title="Welcome";
// // }
// // btn1.addEventListener("click", function () {
// //     document.body.style.backgroundColor = "yellow";
// //     document.title = "Welcome";
// // });

// //fuction 
// function EventListeners() {
//     this.Events = [];
//     this.Subscribe = function (evt) {
//         this.Events.push(evt);
//     }
//     this.unsubscribe = function (targetevent) {
//         this.Events = this.Events.filter(item => {
//             if (item != targetevent) {
//                 return item
//             }

//         })
//     }
//     this.FireEvents = function (MSG) {
//         console.log("MyEventMsG", MSG);
//         this.Events.forEach(evt => {
//             evt.call();
//         });
//     }

// }
// function observer1() {
//     console.log("Firing event 1");
// }
// function observer2() {
//     console.log("Firing Event2");
// }

// let myEvent = new EventListeners();
// myEvent.Subscribe(observer1);
// myEvent.Subscribe(observer2);
// myEvent.unsubscribe(observer1);
// myEvent.FireEvents("Handler");

//Followers
//follow
//unfollow
//twittes//addpost
//sendMessage
//remove
class TwitterActions {
    constructor() {
        this.Followers = [];
        this.MyTwittes = [];
    }
    Follow(twitterAccout) {
        this.Followers.push(twitterAccout);

    }
    UnFollow(targetTwitterAccunt) {
        this.Followers = this.Followers.filter(account => {
            if (targetTwitterAccunt != account) {
                return account;
            }
        })

    }
    addTwittes(Twitte) {
        this.MyTwittes.push(Twitte);
        this.Followers.forEach(follower => {
            follower.notify(Twitte, this);
        });

    }

}
class TwitterAccount extends TwitterActions {
    constructor(_Name, _Age) {
        super();
        this.Name = _Name;
        this.Age = _Age;
    }
    notify(twittes, owner) {
        console.log(owner.Name ,"Twittes this ",twittes);
    }
}
let MyAccount = new TwitterAccount("Nadia", 29);
let AhmedAccount = new TwitterAccount("Ahmed", 30);
let MarwaAccount = new TwitterAccount("Marwa", 27);
let EmanAccount = new TwitterAccount("Eman", 23);
MyAccount.Follow(AhmedAccount);
MyAccount.Follow(EmanAccount);
MyAccount.addTwittes("My first Twitte from JS");