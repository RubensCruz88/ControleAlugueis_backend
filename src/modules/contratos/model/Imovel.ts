import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

	@CreateDateColumn()
	updated_at: Date;

	constructor(){
		if(!this.id){
			this.id = uuid();
		}
	}
}

export { Imovel };