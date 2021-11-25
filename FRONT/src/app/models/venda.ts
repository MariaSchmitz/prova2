import { ItemVenda } from 'src/app/models/item-venda';
import { FormaPagamento } from './forma-pagamento';

export interface Venda {
    cliente: string;
    formaPagamentoId: number;
    formaPagamento?: FormaPagamento;
    itemVenda?: ItemVenda [];
}