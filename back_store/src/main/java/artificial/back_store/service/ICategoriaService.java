package artificial.back_store.service;

import artificial.back_store.model.Categoria;

import java.util.Collection;

public interface ICategoriaService {
    //LISTAR CATEGORIAS DEL HOME
    public Collection<Categoria> categoriasDelHome();
}
