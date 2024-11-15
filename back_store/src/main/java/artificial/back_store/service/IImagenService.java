package artificial.back_store.service;

import artificial.back_store.model.Imagen;

import java.util.Collection;

public interface IImagenService {
    //TRAER IMAGENES POR PRODUCTO
    public Collection<Imagen> imagenesPorProducto(Integer id);

}

