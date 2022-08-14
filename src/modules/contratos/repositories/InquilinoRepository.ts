import { Inquilino } from '../model/Inquilino';

interface ICriaInquilinoDTO {
	cpf: string;
	nome: string;
	telefone: string;
	email: string;
}

class InquilinoRepository {
	private inquilinos: Inquilino[];

	private static INSTANCE: InquilinoRepository;

	private constructor(){
		this.inquilinos = [];
	}

	public static getInstance(): InquilinoRepository {
		if (!InquilinoRepository.INSTANCE) {
			InquilinoRepository.INSTANCE = new InquilinoRepository();
		}

		return InquilinoRepository.INSTANCE;
	}

	criar({cpf, nome, telefone, email}: ICriaInquilinoDTO): Inquilino {
		const inquilino = new Inquilino();

		Object.assign(inquilino,{
			cpf, 
			nome, 
			telefone, 
			email
		});

		this.inquilinos.push(inquilino);

		return inquilino;
	};

	listar(): Inquilino[] {
		return this.inquilinos;
	};

	buscaPorId(id: string): Inquilino | undefined {
		const inquilino = this.inquilinos.find(inquilino => inquilino.id === id);

		return inquilino;
	};

	buscaPorCPF(cpf: string): Inquilino | undefined {
		const inquilino = this.inquilinos.find(inquilino => inquilino.cpf === cpf);

		return inquilino;
	};

	excluir(id: string): void {
		const indiceInquilino = this.inquilinos.findIndex(inquilino => inquilino.id === id);

		this.inquilinos.splice(indiceInquilino,1);
	}


}

export { InquilinoRepository };