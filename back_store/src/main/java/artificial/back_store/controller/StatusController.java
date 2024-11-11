package artificial.back_store.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/status")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class StatusController {
    @GetMapping()
    public String status() {
        return "OK";
    }
}
