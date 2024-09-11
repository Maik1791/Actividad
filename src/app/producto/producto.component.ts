import { Component } from "@angular/core";
import { ProductoService } from "../producto.service";

@Component({
  selector: "app-producto",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.css"],
})
export class ProductoComponent {
  
    producto = {
      nombre: '',
      descripcion: '',
      precio: 0,
      categoria: '',
      imagen: null as File | null
    };
     
    
      
    constructor(private productoService: ProductoService) {}
    agregarProducto() {
      
        this.productoService.agregarProducto({ ...this.producto });
    
        // Limpiar el formulario
        this.producto = {
          nombre: "",
          descripcion: "",
          precio: 0,
          categoria: "",
          imagen: null
        };
      }
  
  
  
    onFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.producto.imagen = input.files[0];
      }
    }
  

}
  