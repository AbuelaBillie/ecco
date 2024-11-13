package artificial.back_store.service;

import artificial.back_store.model.Producto;

import java.util.Collection;
import java.util.Optional;

public interface IProductoService {

    //TRAER PRODUCTOS DEL HOME
    public Collection<Producto> productosDelHome();

    //TRAER PRODUCTO POR ID
    public Optional<Producto> productoPorID(Integer id);

    //TRAER TODOS LOS PRODUCTOS ACTIVOS
    public Collection<Producto> todosLosProductosActivos();

    //TRAER TODAS LAS OFERTAS ACTIVAS
    public Collection<Producto> todasLasOfertasActivas();
}
