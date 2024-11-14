package artificial.back_store.controller;

import artificial.back_store.model.Categoria;
import artificial.back_store.service.impl.CategoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cat")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @GetMapping("/ruta")
    public ResponseEntity<List<String>> obtenerRuta(@RequestParam Integer id) {
        List<String> ruta = categoriaService.obtenerRuta(id);
        return ResponseEntity.ok(ruta);
    }

    @GetMapping("/home")
    public Collection<Categoria> categoriasDelHome() {
        return categoriaService.categoriasDelHome();
    }
}
