import { Imovel } from '../model/Imovel';

interface ICriaImovelDTO {
	nome: string;
	endereco: string;
	numero: number;
	valor: number;
	valor_iptu?: number;
}

class ImovelRepository {
	private imovel: Imovel[];

	private static INSTANCE: ImovelRepository;

	private constructor(){
		this.imovel = [];
	}

	public static getInstance(): ImovelRepository {
		if (!ImovelRepository.INSTANCE) {
			ImovelRepository.INSTANCE = new ImovelRepository();
		}

		return ImovelRepository.INSTANCE;
	}

	criar({nome, endereco, numero, valor, valor_iptu}: ICriaImovelDTO): Imovel {
		const imovel = new Imovel();

		Object.assign(imovel,{
			nome,
			endereco,
			numero,
			valor,
			valor_iptu
		})

		this.imovel.push(imovel);

		return imovel;
	}

	listaImoveis(): Imovel[]{
		const imoveis = this.imovel

		return imoveis;
	}

	consultaPorId(id: string): Imovel | undefined {
		const retornoImovel = this.imovel.find(imovel => imovel.id === id);

		return retornoImovel;
	}

	buscaPorNome(nome: string): Imovel | undefined {
		const imovel = this.imovel.find(imovel => imovel.nome === nome);

		return imovel;
	}

	excluir(id: string): void {
		const indiceImovel = this.imovel.findIndex(imovel => imovel.id === id);
		
		this.imovel.splice(indiceImovel,1)
	}
	
}

export {ImovelRepository};
