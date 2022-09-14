import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Contrato } from './Contrato';

@Entity("imovel")
class Imovel {
	@PrimaryColumn()
	id: string;

	@Column()
	nome: string;

	@Column()
	endereco: string;

	@Column()
	numero: number;

	@Column()
	valor_aluguel: number;

	@Column()
	valor_iptu: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany(type => Contrato, contrato => contrato.imovel)
	contratos: Contrato[];

	constructor(){
		if(!this.id){
			this.id = uuid();
		}
	}
}

export { Imovel };