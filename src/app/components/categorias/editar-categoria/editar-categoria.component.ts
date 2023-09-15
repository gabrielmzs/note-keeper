import { Component } from '@angular/core';
import { Categoria } from '../categoria/categoria';
import { CategoriaService } from '../categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  categoria: Categoria;

  constructor(private categoriaService: CategoriaService, private toastService: ToastrService, private router: Router, private route: ActivatedRoute,) {
    this.categoria = new Categoria(
      0,
      ''
    )
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.categoriaService.selecionarPorId(id).subscribe((categoria) => {
      this.categoria = categoria;
    });
  }

  editarCategoria() {

    this.categoriaService.editar(this.categoria).subscribe((categoria) => {

      this.toastService.success('Categoria editada com Sucesso!', 'Sucesso');
      this.router.navigate(['/categorias', 'listar']);

    });

  }
}
