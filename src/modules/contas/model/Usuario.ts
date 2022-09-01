import { Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp } from 'typeorm';
import { v4 as uuid} from 'uuid';

@Entity("usuario")
class Usuario {
	@PrimaryColumn()
	id?: string;

	@Column()
	nome: string;

	@Column()
	senha: string;

	@Column()
	username: string;

	@Column()
	email: string;

	@CreateDateColumn()
	created_at: Timestamp;

	constructor(){
		if (!this.id){
			this.id = uuid();
		}
	}

}

export { Usuario }