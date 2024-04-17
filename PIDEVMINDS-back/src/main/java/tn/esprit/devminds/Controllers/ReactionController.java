package tn.esprit.devminds.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Services.ReactionService;

@RestController
@RequestMapping("/api/reactions")
public class ReactionController {

    @Autowired
    private ReactionService reactionService;

    @PostMapping("/{messageId}")
    public ResponseEntity<Void> reactToMessage(@PathVariable String messageId, @RequestBody String reaction) {
        reactionService.reactToMessage(messageId, reaction);
        return ResponseEntity.ok().build();
    }
}

