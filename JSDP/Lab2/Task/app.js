class IFacebook {
  constructor(_name) {
    this.friends = [];
    this.messages = [];
    this.posts = [];

    this.name = _name;
  }

  addFriends() {}
  removeFriend() {}
  sendMessageToAllFriends() {}
  postsNotification() {}
  commentsNotification() {}
  messageNotification() {}
}
class FacebookAccount extends IFacebook {
  constructor(name) {
    super(name);
  }
  addFriends(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
    this.messages.push({ friend: friend.name, msgs: [] });
    friend.messages.push({ friend: this.name, msgs: [] });


  }
  removeFriend(friend) {
    let deleteIndex = this.friends.indexOf(friend);
    this.friends.slice(deleteIndex);
  }

  sendMessageToAllFriends(msg) {
    this.friends.forEach((friend) => {
      friend.messageNotification(this, msg);
      friend.recieveMessage(this, msg);
    });
  }
  sendPrivateMessage(user, msg) {
    user.recieveMessage(this, msg);
    user.messageNotification(this,msg);
  }

  messageNotification(user, msg) {
    console.log(`hello ${this.name}, ${user.name} sent you ${msg}`);
  }
  recieveMessage(user, msg) {
    let userIndex = this.findMessagerByName(user.name)
    console.log(userIndex);
    this.messages[userIndex].msgs.push(msg);
  }
  addPost(post) {
    this.posts.push(post);
    this.friends.forEach((friend) => {
      friend.postsNotification(this, post);
    });
  }
  postsNotification(user, post) {
    console.log(`${user.name} added new post ${post.title}`);
  }
  addComment(user,postId, comment) {
    let postIndex = user.findPostbyID(postId);
    console.log("postIndex" + postIndex)
    this.posts[postIndex].comments.push(comment);
    this.friends.forEach((friend) => {
      friend.commentsNotification(this, postIndex, comment);
    });
  }
  commentsNotification(user, postIndex, comment) {
    console.log(
      `${user.name} added new comment ${comment} on the post ${this.posts[postIndex]}`
    );
  }
  findPostbyID(id){
      for(let i = 0 ; i < this.posts.length;i++){
          if(this.posts[i].id === id){
              return i;
          }
      }
  }
  findMessagerByName(name){
    for(let i = 0 ; i < this.messages.length;i++){
        if(this.messages[i].friend === name){
            return i;
        }
    }

  }
}
// messages = [{ name: "ahmed", msgs: [] }];
// posts = [{ id: 1, title: "hello", body: "this is a post", comments: [] }];


let MyAccount = new FacebookAccount("Mahmoud");

let Acc1 = new FacebookAccount("Mohamed");
let Acc2 = new FacebookAccount("Ali");
let Acc3 = new FacebookAccount("Ibrahim");
let Acc4 = new FacebookAccount("Gamal");

MyAccount.addFriends(Acc1);
MyAccount.addFriends(Acc2);
MyAccount.addFriends(Acc3);
MyAccount.addFriends(Acc4);


MyAccount.sendMessageToAllFriends("Hello");

MyAccount.addPost({ id: 1, title: "hello", body: "this is a post", comments: [] });
MyAccount.addComment(MyAccount,1,"great")
MyAccount.sendPrivateMessage(Acc1,"greeting");



