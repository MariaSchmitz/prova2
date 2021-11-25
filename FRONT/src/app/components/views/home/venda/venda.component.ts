import { Venda } from './../../../../models/venda';
import { FormaPagamentoService } from './../../../../services/formaPagamento.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormaPagamento } from "src/app/models/forma-pagamento";
import { VendaService } from 'src/app/services/venda.service';
import { ItemService } from 'src/app/services/item.service';
import { ItemVenda } from 'src/app/models/item-venda';


@Component({
    selector: "app-venda",
    templateUrl: "./venda.component.html",
    styleUrls: ["./venda.component.css"],
})
export class VendaComponent implements OnInit {
    itens: ItemVenda[] = [];
    nome!: string;
    formasPagamentos!: FormaPagamento[];
    formaPagamentoId!: number;

    constructor(
        private router: Router,
        private vendaService: VendaService,
        private formaPagamentoService: FormaPagamentoService,
        private itemService: ItemService
    ) {}

    ngOnInit(): void {

        let carrinhoId = localStorage.getItem("carrinhoId")! || "";
        console.log(carrinhoId);
        this.itemService.getByCartId(carrinhoId).subscribe((itens) => {
            this.itens = itens;
            console.log(this.itens);
        });

        this.formaPagamentoService.list().subscribe((formaPagamento) => {
            this.formasPagamentos = formaPagamento;
        });
    }

    cadastrar(): void {
        let venda: Venda = {
            cliente: this.nome,
            formaPagamentoId: this.formaPagamentoId,
        };
        venda.itemVenda = this.itens;
        console.log(venda);
        this.vendaService.create(venda).subscribe((venda) => {
            console.log(venda);
            this.router.navigate([""]);
        });
    }
}
