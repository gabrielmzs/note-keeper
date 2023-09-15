import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota/nota';
import { Categoria } from '../../categorias/categoria/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota/nota.service';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filtrar-notas',
  templateUrl: './filtrar-notas.component.html',
  styleUrls: ['./filtrar-notas.component.css']
})
export class FiltrarNotasComponent implements OnInit {
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private route: ActivatedRoute, private notaService: NotaService, private categoriaService: CategoriaService, private router: Router, private toastService: ToastrService) {

  }




  ngOnInit(): void {
    // Inscreva-se nos parâmetros da rota para observar as mudanças
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('categoriaId') as string);
      console.log(id);


      this.CarregarCategorias();
      this.notaService.selecionarPorCategoria(id).subscribe((notas) => {
        this.notas = notas;
        console.log(notas)
        if (notas.length == 0) this.MostrarMensagem();
      });
    });
  }

  CarregarCategorias() {
    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  MostrarMensagem() {

    this.toastService.warning('Nenhuma nota cadastrada na categoria solicitada!', 'Lista Vazia');
    this.router.navigate(['/notas', 'listar']);


  }






}
