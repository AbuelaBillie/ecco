package artificial.back_store.controller;

import artificial.back_store.model.Producto;
import artificial.back_store.service.impl.CategoriaService;
import artificial.back_store.service.impl.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/prod")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ProductoController {
    @Autowired
    ProductoService productoService;


    @GetMapping("/home")
    public Collection<Producto> productosDelHome() {
        return productoService.productosDelHome();
    }

    @GetMapping("/id")
    public Optional<Producto> productoPorID(@RequestParam Integer id) {
        return productoService.productoPorID(id);
    }

    @GetMapping("/all-active")
    public Collection<Producto> todosLosProductosActivos() {
        return productoService.todosLosProductosActivos();
    }

    @GetMapping("/all-off-active")
    public Collection<Producto> todasLasOfertasActivas() {
        return productoService.todasLasOfertasActivas();
    }

}
