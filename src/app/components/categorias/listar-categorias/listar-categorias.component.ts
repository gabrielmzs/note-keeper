import { Component } from '@angular/core';
import { Categoria } from '../categoria/categoria';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '../../notas/nota/nota.service';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent {

  categorias: Categoria[] = [];

  constructor(private route: ActivatedRoute, private notaService: NotaService, private categoriaService: CategoriaService) {

  }


  ngOnInit(): void {

    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }



}
