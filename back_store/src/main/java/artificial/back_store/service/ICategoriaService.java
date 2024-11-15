package artificial.back_store.service;

import artificial.back_store.model.Categoria;
import artificial.back_store.model.Producto;

import java.util.Collection;
import java.util.List;

public interface ICategoriaService {
    //LISTAR CATEGORIAS DEL HOME
    public Collection<Categoria> categoriasDelHome();

    //LISTAR PRODUCTOS POR CATEGORIA
    public List<Producto> listarProductosPorCategoria(Integer categoriaId);
}
