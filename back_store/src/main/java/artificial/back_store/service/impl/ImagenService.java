package artificial.back_store.service.impl;

import artificial.back_store.model.Imagen;
import artificial.back_store.repository.ImagenRepository;
import artificial.back_store.service.IImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ImagenService implements IImagenService {
    @Autowired
    ImagenRepository imagenRepository;

    //TRAER IMAGENES POR PRODUCTO
    @Override
    public Collection<Imagen> imagenesPorProducto(Integer id) {
        return imagenRepository.imagenesPorProducto(id);
    }
}
