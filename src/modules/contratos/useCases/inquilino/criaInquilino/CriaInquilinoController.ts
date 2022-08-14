import { Request, Response } from 'express';
import { CriaInquilinoService } from './CriaInquilinoService';

class CriaInquilinoController {
	constructor( private criaInquilinoService: CriaInquilinoService){}

	handle(request: Request, response: Response): Response {
		const {cpf, nome, telefone, email} = request.body;

		try {
			const inquilino = this.criaInquilinoService.execute({
				cpf,
				nome,
				telefone,
				email
			});
	
			return response.json(inquilino);
		} catch(err) {
			return response.status(400).json({erro: err.message});
		}

	}

}

export { CriaInquilinoController }