package artificial.back_store.service.impl;

import artificial.back_store.model.Producto;
import artificial.back_store.repository.ProductoRepository;
import artificial.back_store.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class ProductoService implements IProductoService {

    @Autowired
    ProductoRepository productoRepository;

    //TRAER PRODUCTOS DEL HOME
    @Override
    public Collection<Producto> productosDelHome() {
        return productoRepository.productosDelHome();
    }

    //TRAER PRODUCTO POR ID
    @Override
    public Optional<Producto> productoPorID(Integer id) {
        return productoRepository.findById(id);
    }

    //TRAER TODOS LOS PRODUCTOS ACTIVOS
    @Override
    public Collection<Producto> todosLosProductosActivos() {
        return productoRepository.todosLosProductosActivos();
    }

}
