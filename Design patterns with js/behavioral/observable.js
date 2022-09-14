class Youtube {
  constructor(channelName) {
    this.channelName = channelName;
    this.videoTitle = "";
    this.subscribers = [];
  }

  newVideo(videoTitle) {
    this.videoTitle = videoTitle;
    this.notifications();
  }

  notifications() {
    if (this.subscribers.length != 0) {
      this.subscribers.forEach((subscriber) => {
        subscriber.notify(this.channelName, this.videoTitle);
      });
    }
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  unSubscripe(user) {
    this.subscribers = this.subscribers.filter((subscriper) => {
      return subscriper != user;
    });
  }
}

class User {
  constructor(userName) {
    this.userName = userName;
  }

  notify(channelName, videoTitle) {
    return console.log(
      `hello ${this.userName}, ${channelName} channel has uploaded a new video '${videoTitle}'`
    );
  }
}

let firstUser = new User("Yasser");
let secUser = new User("Esraa");
let thirdUser = new User("Asmaa");
let myChannel = new Youtube("Gamers");

myChannel.subscribe(firstUser);
myChannel.subscribe(secUser);
myChannel.subscribe(thirdUser);
myChannel.unSubscripe(thirdUser);

myChannel.newVideo("fifa 2023 tutorials");
// console.log(myChannel);
