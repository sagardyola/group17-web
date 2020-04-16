import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/shared/services/msg.service';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgBody;
  user;
  users = [];
  messages = [];
  constructor(
    public msgService: MsgService,
    public socketService: SocketService
  ) {
    this.msgBody = {
      text: '',
      senderId: '',
      receiverId: '',
      senderName: '',
      receiverName: '',
      time: ''
    }
  }

  ngOnInit(): void {
    this.runSocket();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.socketService.socket.emit('new-user', this.user.username); //pvt chat
  }

  sendMsg() {
    if (!this.msgBody.receiverId) {
      return this.msgService.showInfo('Please select user to continue');
    }
    this.users.forEach((user, i) => {
      if (user.name === this.user.username) {
        this.msgBody.senderId = user.id;
        this.msgBody.senderName = user.name;
      }
    })
    this.msgBody.senderName = this.user.username;
    this.msgBody.time = Date.now();
    this.socketService.socket.emit('new-msg', this.msgBody);
    this.msgBody.text = ''; //empty chat box
  }

  runSocket() {
    this.socketService.socket.on('reply-msg', (data) => {
      this.msgBody.receiverId = data.senderId;
      this.messages.push(data);
    });

    this.socketService.socket.on('reply-msg-own', (data) => {
      this.messages.push(data);
    });

    this.socketService.socket.on('users', (data) => {
      this.users = data;
    })
  }

  focusedIn(val) {
    console.log('val', val);
  }

  selectUser(user) {
    this.msgBody.receiverId = user.id;
    this.msgBody.receiverName = user.name;
  }

}
