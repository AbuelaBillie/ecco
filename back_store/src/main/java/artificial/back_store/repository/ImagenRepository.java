package artificial.back_store.repository;

import artificial.back_store.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ImagenRepository extends JpaRepository <Imagen,Long> {
    //TRAER IMAGENES POR PRODUCTO
    @Query(value = "SELECT * FROM imagenes i WHERE i.producto_id = ?1", nativeQuery = true)
    Collection<Imagen> imagenesPorProducto(Integer producto);
}
