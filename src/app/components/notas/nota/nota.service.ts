import { Injectable } from "@angular/core";
import { Nota } from "./nota";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root',
})
export class NotaService {

    private API_URl = environment.API_URL + '/notas?_expand=categoria';
    private API_SelecionaPorID = environment.API_URL + '/notas/'
    constructor(private http: HttpClient) {

    }


    criar(nota: Nota) {
        return this.http.post<Nota>(this.API_URl, nota);
    }

    editar(nota: Nota) {

        return this.http.put<Nota>(this.API_SelecionaPorID + nota.id, nota);
    }

    excluir(nota: Nota) {

        return this.http.delete<Nota>(this.API_SelecionaPorID + nota.id + "?_expand=categoria");
    }

    selecionarPorId(id: number): Observable<Nota> {
        return this.http.get<Nota>(this.API_SelecionaPorID + id + "?_expand=categoria");
    }

    selecionarTodos(): Observable<Nota[]> {
        return this.http.get<Nota[]>(this.API_URl);
    }

    selecionarPorCategoria(id: number) {
        return this.http.get<Nota[]>(environment.API_URL + "/categorias/" + id + "/notas/?_expand=categoria");
    }
}