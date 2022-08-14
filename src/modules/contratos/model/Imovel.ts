import { v4 as uuid } from 'uuid';

class Imovel {
	id: string;
	nome: string;
	endereco: string;
	numero: number;
	valor?: number;
	valor_iptu?: number;
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

export { Imovel };