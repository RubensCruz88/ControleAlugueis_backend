import { v4 as uuid } from 'uuid';

class Contrato {
	id: string;
	inicio: Date;
	fim?: Date;
	imovel_id: string;
	inquilino_id: string;
	vencimento: number;
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

export { Contrato };