import { Contrato } from '../model/Contrato';

interface ICriaContratoDTO {
	inicio: Date;
	fim: Date;
	imovel_id: string;
	inquilino_id: string;
	vencimento: number;
}

class ContratoRepository {
	private contratos: Contrato[];

	private static INSTANCE: ContratoRepository;

	private constructor(){
		this.contratos = [];
	};

	public static getInstance(): ContratoRepository {
		if (!ContratoRepository.INSTANCE) {
			ContratoRepository.INSTANCE = new ContratoRepository();
		}

		return ContratoRepository.INSTANCE;
	};

	criar({inicio, fim, imovel_id, inquilino_id, vencimento}){
		const contrato = new Contrato();

		Object.assign(contrato,{
			inicio: new Date(inicio), 
			fim: new Date (fim), 
			imovel_id, 
			inquilino_id, 
			vencimento
		});

		this.contratos.push(contrato);

		return contrato;
	};

	listar(): Contrato[] {
		return this.contratos;
	};

	buscaPorId(id: string): Contrato | undefined {
		const contrato = this.contratos.find(contrato => contrato.id === id);

		return contrato;
	};

}

export { ContratoRepository }