package artificial.back_store.controller;

import artificial.back_store.model.Categoria;
import artificial.back_store.service.impl.CategoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cat")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @GetMapping("/ruta")
    public ResponseEntity<List<Map<String, Object>>> obtenerRuta(@RequestParam Integer id) {
        List<Map<String, Object>> ruta = categoriaService.obtenerRuta(id);
        return ResponseEntity.ok(ruta);
    }

    @GetMapping("/home")
    public Collection<Categoria> categoriasDelHome() {
        return categoriaService.categoriasDelHome();
    }
}
