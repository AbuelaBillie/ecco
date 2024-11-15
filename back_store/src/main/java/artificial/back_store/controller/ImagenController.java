package artificial.back_store.controller;

import artificial.back_store.model.Imagen;
import artificial.back_store.service.impl.ImagenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequiredArgsConstructor
@RestController
@RequestMapping("/img")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ImagenController {
    @Autowired
    ImagenService imagenService;

    @GetMapping()
    public ResponseEntity<Collection<Imagen>> imagenesPorProducto(@RequestParam Integer prod) {
        Collection<Imagen> imagenes = imagenService.imagenesPorProducto(prod);
        return ResponseEntity.ok(imagenes);
    }
}
