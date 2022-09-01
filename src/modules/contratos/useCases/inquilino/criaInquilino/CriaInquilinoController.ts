import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CriaInquilinoService } from './CriaInquilinoService';

class CriaInquilinoController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {cpf, nome, telefone, email} = request.body;

		const criaInquilinoService = container.resolve(CriaInquilinoService);

		const inquilino = await criaInquilinoService.execute({
			cpf,
			nome,
			telefone,
			email
		});

		return response.json(inquilino);

	}

}

export { CriaInquilinoController }