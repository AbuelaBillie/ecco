package artificial.back_store.service.impl;

import artificial.back_store.model.Categoria;
import artificial.back_store.repository.CategoriaRepository;
import artificial.back_store.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoriaService implements ICategoriaService {

    @Autowired
    CategoriaRepository categoriaRepository;

    // Método para obtener la ruta desde una categoría hasta su raíz
    public List<String> obtenerRuta(Integer categoriaId) {
        List<String> ruta = new ArrayList<>();
        obtenerRutaRecursiva(categoriaId, ruta);
        Collections.reverse(ruta);  // Invertimos la ruta para que sea desde la categoría hasta la raíz
        return ruta;
    }

    // Método recursivo que construye la ruta
    private void obtenerRutaRecursiva(Integer categoriaId, List<String> ruta) {
        Optional<Categoria> categoriaOpt = categoriaRepository.findById(categoriaId);
        if (categoriaOpt.isPresent()) {
            Categoria categoria = categoriaOpt.get();
            ruta.add(categoria.getNombre());  // Añadimos el nombre de la categoría actual

            // Si tiene un padre (padre != id), seguimos la recursión
            if (categoria.getPadre() != null && !categoria.getPadre().equals(categoriaId)) {
                obtenerRutaRecursiva(categoria.getPadre(), ruta);
            }
        }
    }

    @Override
    public Collection<Categoria> categoriasDelHome() {
        return categoriaRepository.categoriasDelHome();
    }
}
