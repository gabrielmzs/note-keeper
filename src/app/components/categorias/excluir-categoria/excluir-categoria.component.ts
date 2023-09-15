import { Component } from '@angular/core';
import { Categoria } from '../categoria/categoria';
import { CategoriaService } from '../categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotaService } from '../../notas/nota/nota.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent {

  categoria: Categoria

  constructor(private categoriaService: CategoriaService, private router: Router, private toastService: ToastrService, private route: ActivatedRoute, private notaService: NotaService) {
    this.categoria = new Categoria(0, "");
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);


    this.notaService.selecionarPorCategoria(id).subscribe((notas) => {
      if (notas.length > 0) this.MostrarMensagem();
    });

    this.categoriaService.selecionarPorId(id).subscribe((categoria) => {
      this.categoria = categoria;
    });
  }
  MostrarMensagem() {
    this.toastService.error('A categoria selecionada está sendo utilizada por uma nota.', 'Não é possível excluir!');
    this.router.navigate(['/categorias', 'listar']);
  }

  excluirCategoria() {

    this.categoriaService.excluir(this.categoria).subscribe((categoria) => {

      this.toastService.success('Categoria excluída com Sucesso!', 'Sucesso');
      this.router.navigate(['/categorias', 'listar']);
    });

  }
}
