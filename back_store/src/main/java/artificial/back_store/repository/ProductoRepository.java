package artificial.back_store.repository;

import artificial.back_store.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Integer> {

    //TRAER PRODUCTOS DEL HOME
    @Query(value = "SELECT * FROM productos p WHERE p.estado = 1 AND p.home = 1", nativeQuery = true)
    Collection<Producto> productosDelHome();

    //TRAER TODOS LOS PRODUCTOS ACTIVOS
    @Query(value = "SELECT * FROM productos p WHERE p.estado = 1", nativeQuery = true)
    Collection<Producto> todosLosProductosActivos();

    //TRAER TODAS LAS OFERTAS ACTIVAS
    @Query(value = "SELECT * FROM productos p WHERE p.estado = 1 AND p.off > 0", nativeQuery = true)
    Collection<Producto> todasLasOfertasActivas();

}
