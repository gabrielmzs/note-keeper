import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota/nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota/nota.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { Categoria } from '../../categorias/categoria/categoria';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  categorias: Categoria[] = [];
  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toastService: ToastrService, private categoriaService: CategoriaService) {

    this.CarregarCategorias();
    this.nota = new Nota("", "", 'warning', 0, 0);

  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.notaService.selecionarPorId(id).subscribe((nota) => {
      this.nota = nota;
    });

  }
  CarregarCategorias() {
    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }


  editarNota() {

    this.notaService.editar(this.nota).subscribe((nota) => {

      this.toastService.success('Nota Editada com Sucesso!', 'Sucesso');
      this.router.navigate(['/notas', 'listar']);
    });

  }

}
