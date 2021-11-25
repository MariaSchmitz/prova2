import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormaPagamento } from "../models/forma-pagamento";

@Injectable({
    providedIn: "root",
})
export class FormaPagamentoService {
    private baseUrl = "http://localhost:5000/api/formapagamento";

    constructor(private http: HttpClient) {}

    list(): Observable<FormaPagamento[]> {
        return this.http.get<FormaPagamento[]>(`${this.baseUrl}/list`);
    }
}
