import { Repository } from 'typeorm';
import { Imovel } from '../entities/Imovel';
import { dataSource } from '@database/dataSource'

interface ICriaImovelDTO {
	nome: string;
	endereco: string;
	numero: number;
	valor_aluguel?: number;
	valor_iptu?: number;
}

interface IImovelRepository {
	criar({nome, endereco, numero, valor_aluguel, valor_iptu}: ICriaImovelDTO): Promise<Imovel>
	listaImoveis(): Promise<Imovel[]>
	buscaPorId(id: string): Promise<Imovel> | undefined
	buscaPorNome(nome: string): Promise<Imovel> | undefined
	excluir(id: string): Promise<void> 
}

class ImovelRepository implements IImovelRepository{
	private repositorio: Repository<Imovel>;

	constructor(){
		this.repositorio = dataSource.getRepository(Imovel)
	}

	async criar({nome, endereco, numero, valor_aluguel, valor_iptu}: ICriaImovelDTO): Promise<Imovel> {
		const novoImovel = this.repositorio.create({nome, endereco, numero, valor_aluguel, valor_iptu})

		await this.repositorio.save(novoImovel);

		return novoImovel;
	}

	async listaImoveis(): Promise<Imovel[]> {
		const imoveis = await this.repositorio.find();

		return imoveis;
	}

	async buscaPorId(id: string): Promise<Imovel> | undefined {
		const retornoImovel = await this.repositorio.findOneBy({id});

		return retornoImovel;
	}

	async buscaPorNome(nome: string): Promise<Imovel> | undefined {
		const imovel = await this.repositorio.findOneBy({nome});

		return imovel;
	}

	async excluir(id: string): Promise<void> {
		await this.repositorio.delete({id});
		
	}

	async listaContratos(id: string): Promise<Imovel>{
		const contratos = await this.repositorio
			.createQueryBuilder("imovel")
			.leftJoinAndSelect("imovel.contratos","contratos")
			.where("imovel.id = :id",{id})
			.getOne();

		return contratos;
	}
	
}

export {ImovelRepository, IImovelRepository};
