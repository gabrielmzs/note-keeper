import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota/nota';
import { NotaService } from '../nota/nota.service';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { Categoria } from '../../categorias/categoria/categoria';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private route: ActivatedRoute, private notaService: NotaService, private categoriaService: CategoriaService) {

  }



  ngOnInit(): void {

    this.CarregarCategorias();

    this.notaService.selecionarTodos().subscribe((notas) => {
      this.notas = notas;
    });
  }

  CarregarCategorias() {
    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }



}

