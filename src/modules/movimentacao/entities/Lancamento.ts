import { v4 as uuid } from 'uuid';

class Lancamento {
	id: string;
	contrato_id: string;
	valor_bruto: number;
	valor_iptu: number;
	abono: number;
	multa: number;
	reembolso: number;
	valor_liquido: number;
	valor_pago: number;
	data_pagamento: Date;
	observacao: string;
	created_at: Date;
	updated_at: Date;

	constructor(){
		if(!this.id){
			this.id = uuid();
		}

		if(!this.created_at){
			this.created_at = new Date();
		}

		if(!this.updated_at){
			this.updated_at = new Date();
		}
	}

}

export { Lancamento };