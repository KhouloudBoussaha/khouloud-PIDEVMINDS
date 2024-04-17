package tn.esprit.devminds.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.devminds.Entities.ChatMessage;
import tn.esprit.devminds.Repositories.ChatMessageRepository;

@CrossOrigin(origins = "*")
@Controller
public class WebSocketController {

    ChatMessageRepository chatMessageRepository;
    @Autowired
    public WebSocketController(ChatMessageRepository chatMessageRepository) {
        this.chatMessageRepository = chatMessageRepository;
    }
    @MessageMapping("/chat/{roomId}")
    @SendTo("/topic/{roomId}")
    public ChatMessage chat(@DestinationVariable String roomId, ChatMessage message) {
        System.out.println(message);
        chatMessageRepository.save(message);
        return new ChatMessage(message.getMessage(), message.getUser(), message.getEmojis(), message.getReactions());
    }
}
