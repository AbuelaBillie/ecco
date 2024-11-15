package artificial.back_store.service.impl;

import artificial.back_store.model.Categoria;
import artificial.back_store.model.Producto;
import artificial.back_store.repository.CategoriaRepository;
import artificial.back_store.repository.ProductoRepository;
import artificial.back_store.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoriaService implements ICategoriaService {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    ProductoRepository productoRepository;

    // Método para obtener la ruta desde una categoría hasta su raíz
    public List<Map<String, Object>> obtenerRuta(Integer categoriaId) {
        List<Map<String, Object>> ruta = new ArrayList<>();
        obtenerRutaRecursiva(categoriaId, ruta);
        Collections.reverse(ruta);  // Invertimos la ruta para que sea desde la categoría hasta la raíz
        return ruta;
    }

    // Método recursivo que construye la ruta
    private void obtenerRutaRecursiva(Integer categoriaId, List<Map<String, Object>> ruta) {
        Optional<Categoria> categoriaOpt = categoriaRepository.findById(categoriaId);
        if (categoriaOpt.isPresent()) {
            Categoria categoria = categoriaOpt.get();

            // Crear un mapa con el id y nombre de la categoría
            Map<String, Object> categoriaRuta = new HashMap<>();
            categoriaRuta.put("id", categoria.getId());
            categoriaRuta.put("nombre", categoria.getNombre());

            // Añadimos el mapa a la ruta
            ruta.add(categoriaRuta);

            // Si tiene un padre (padre != id), seguimos la recursión
            if (categoria.getPadre() != null && !categoria.getPadre().equals(categoriaId)) {
                obtenerRutaRecursiva(categoria.getPadre(), ruta);
            }
        }
    }

    // Método para obtener todas las subcategorías de una categoría dada (incluyendo la misma categoría)
    public List<Integer> obtenerSubcategorias(Integer categoriaId) {
        List<Integer> categoriaIds = new ArrayList<>();
        obtenerSubcategoriasRecursivo(categoriaId, categoriaIds);
        return categoriaIds;
    }

    // Método recursivo que recoge las categorías (padre y todas sus subcategorías)
    private void obtenerSubcategoriasRecursivo(Integer categoriaId, List<Integer> categoriaIds) {
        // Añadimos la categoría actual a la lista
        categoriaIds.add(categoriaId);

        // Obtener las subcategorías de la categoría actual
        List<Categoria> subcategorias = categoriaRepository.findByPadre(categoriaId);

        // Recursión para cada subcategoría
        for (Categoria subcategoria : subcategorias) {
            // si el 'padre' de la subcategoría es igual a su 'id' significa que no tiene padre (es una raíz).
            if (subcategoria.getPadre() != subcategoria.getId()) {
                obtenerSubcategoriasRecursivo(subcategoria.getId(), categoriaIds);
            }
        }
    }

    //LISTAR PRODUCTOS POR CATEGORIA
    @Override
    public List<Producto> listarProductosPorCategoria(Integer categoriaId) {
        // Obtener todas las categorías que pertenecen a esta categoría y sus subcategorías
        List<Integer> categoriaIds = obtenerSubcategorias(categoriaId);

        // Buscar productos que estén en estas categorías
        return productoRepository.findByCategoriaIdIn(categoriaIds);
    }
    @Override
    public Collection<Categoria> categoriasDelHome() {
        return categoriaRepository.categoriasDelHome();
    }
}
