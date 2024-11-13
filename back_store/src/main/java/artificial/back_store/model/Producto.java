package artificial.back_store.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    @Column(columnDefinition = "TEXT")
    private String descripcion;
    private Long precio;
    private Integer stock;
    private Date fecha_carga;
    private Date fecha_modificacion;
    private Short estado;
    private Short home;
    private Short off;
    private Short envio_gratis;
    private String imagen_principal;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;


}