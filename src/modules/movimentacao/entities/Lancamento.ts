import { Contrato } from "@modules/contratos/entities/Contrato";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("lancamento")
class Lancamento {
	@PrimaryColumn()
	id: string;

	@Column()
	periodo: string;

	@ManyToOne( type => Contrato,contrato => contrato.lancamentos)
	@JoinColumn({name: "contrato_id"})
	contrato: Contrato

	@Column()
	contrato_id: string;

	@Column()
	valor_bruto: number;

	@Column()
	iptu: number;

	@Column()
	abono: number;

	@Column()
	multa: number;

	@Column()
	reembolso: number;

	@Column()
	valor_liquido: number;

	@Column()
	valor_pago: number;

	@Column()
	data_pagamento: Date;

	@Column()
	observacao: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date

	constructor(){
		if(!this.id){
			this.id = uuid();
		}
	}
}

export { Lancamento }