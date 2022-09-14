import { Lancamento } from '@modules/movimentacao/entities/Lancamento';
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Imovel } from './Imovel';

@Entity("contrato")
class Contrato {
	@PrimaryColumn()
	id: string;

	@Column()
	inicio: Date;

	@Column()
	fim?: Date;

	@Column()
	imovel_id: string;

	@Column()
	inquilino_id: string;

	@Column()
	vencimento_fatura: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany(type => Lancamento,lancamento => lancamento.contrato)
	lancamentos: Lancamento[]

	@ManyToOne(type => Imovel, imovel => imovel.contratos)
	@JoinColumn({name: "imovel_id"})
	imovel: Imovel;

	constructor(){
		if(!this.id){
			this.id = uuid();
		}
	}
}

export { Contrato };