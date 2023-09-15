import { Component, Input } from '@angular/core';
import { Nota } from './nota';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { Categoria } from '../../categorias/categoria/categoria';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {
  categoria: Categoria;


  @Input() nota: Nota = {
    id: 0,
    titulo: '',
    conteudo: '',
    tema: "warning",
    categoriaId: 1,
  }

  constructor(private categoriaService: CategoriaService) {
    this.CarregarCategoria();
    this.categoria = new Categoria(
      0,
      '',
    );


  }

  CarregarCategoria() {
    this.categoriaService.selecionarPorId(this.nota.categoriaId).subscribe((categoria) => {
      this.categoria = categoria;
    });
  }



}
