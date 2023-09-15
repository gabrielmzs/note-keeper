import { Component } from '@angular/core';
import { Nota } from '../nota/nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota/nota.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {

  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toastService: ToastrService) {

    this.nota = new Nota("", "", 'warning', 1, 1);

  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.notaService.selecionarPorId(id).subscribe((nota) => {
      this.nota = nota;
    });
  }

  excluirNota() {

    this.notaService.excluir(this.nota).subscribe((nota) => {

      this.toastService.success('Nota excluída com Sucesso!', 'Sucesso');
      this.router.navigate(['/notas', 'listar']);
    });

  }
}
