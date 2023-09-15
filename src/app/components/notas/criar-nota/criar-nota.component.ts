import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota/nota.service';
import { Router } from '@angular/router';
import { Nota } from '../nota/nota';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { Categoria } from '../../categorias/categoria/categoria';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})
export class CriarNotaComponent implements OnInit {
  categorias: Categoria[] = [];
  nota: Nota;

  ngOnInit(): void {
    this.CarregarCategorias();
  }
  constructor(private notaService: NotaService, private router: Router, private toastService: ToastrService, private categoriaService: CategoriaService) {

    this.CarregarCategorias();

    this.nota = new Nota(
      '',
      '',
      'success',
      0,
      1
    );
    console.log(this.categorias);
  }
  MostrarMensagem() {
    this.toastService.error('Cadastre uma categoria antes de cadastrar uma nota.', 'Nenhuma categoria Cadastrada!');
    this.router.navigate(['/notas', 'listar']);
  }


  CarregarCategorias() {
    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;

      if (this.categorias.length == 0) this.MostrarMensagem();
    });
  }


  criarNota() {

    this.notaService.criar(this.nota).subscribe((nota) => {

      console.log(nota);
      this.toastService.success('Nota criada com Sucesso!', 'Sucesso');
      this.router.navigate(['/notas', 'listar']);

    });

  }
}

