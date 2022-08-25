import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

	@CreateDateColumn()
	updated_at: Date;

	constructor(){
		if(!this.id){
			this.id = uuid();
		}

		if(!this.created_at){
			this.created_at = new Date();
		}

	}
}

export { Contrato };