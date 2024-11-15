package artificial.back_store.repository;

import artificial.back_store.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

    //LISTAR CATEGORIAS DEL HOME
    @Query(value = "SELECT * FROM categorias c WHERE c.home = 1", nativeQuery = true)
    Collection<Categoria> categoriasDelHome();

    //LISTAR SUBCATEGORIAS POR ID PADRE
    List<Categoria> findByPadre(Integer id);
}
