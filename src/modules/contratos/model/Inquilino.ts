import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("inquilino")
class Inquilino {
	@PrimaryColumn()
	id: string;

	@Column()
	cpf: string;

	@Column()
	nome: string;

	@Column()
	telefone: string;

	@Column()
	email: string;

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

export { Inquilino };