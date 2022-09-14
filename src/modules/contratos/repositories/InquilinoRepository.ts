import { Repository } from 'typeorm';
import { Inquilino } from '../entities/Inquilino';
import { dataSource } from '@database/dataSource'

interface ICriaInquilinoDTO {
	cpf: string;
	nome: string;
	telefone: string;
	email: string;
}

class InquilinoRepository {
	private repositorio: Repository<Inquilino>;

	constructor(){
		this.repositorio = dataSource.getRepository(Inquilino);
	}

	async criar({cpf, nome, telefone, email}: ICriaInquilinoDTO): Promise<Inquilino> {
		const inquilino = this.repositorio.create({cpf, nome, telefone, email});

		await this.repositorio.save(inquilino);

		return inquilino;
	};

	async listar(): Promise<Inquilino[]> {
		return await this.repositorio.find();
	};

	 async buscaPorId(id: string): Promise<Inquilino> | undefined {
		const inquilino = await this.repositorio.findOneBy({id});

		return inquilino;
	};

	async buscaPorCPF(cpf: string): Promise<Inquilino> | undefined {
		const inquilino = await this.repositorio.findOneBy({cpf});

		return inquilino;
	};

	async excluir(id: string): Promise<void> {
		await this.repositorio.delete({id});

	}


}

export { InquilinoRepository };