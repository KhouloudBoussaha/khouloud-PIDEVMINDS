import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from 'src/app/models/chat-message';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  messageInput: string = '';
  userId: string="";
  messageList: any[] = [];
  selectedMessage: any;
  constructor(private chatService: ChatService,
    private route: ActivatedRoute
    ){

  }
  

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["userId"];
    

    this.chatService.joinRoom("ABC");
    this.lisenerMessage();
    
  }

  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      user: this.userId
    }as ChatMessage
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }
  
  lisenerMessage() {
    
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any)=> ({
        ...item,
        message_side: item.user === this.userId ? 'sender': 'receiver'
      }))
    });
  }
  selectMessage(message: any) {
    this.selectedMessage = message;
  }
  reactToMessage(messageId: string, reaction: string): void {
    /*
    this.chatService.reactToMessage(messageId, reaction).subscribe(() => {
    }, (error: any) => {
      console.error('Erreur lors de la réaction au message:', error);
    });*/}
}