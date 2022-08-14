import { Request, Response } from 'express';
import { BuscaPorCpfService } from './BuscaPorCPFService'

class BuscaPorCpfController {
	constructor( private buscaPorCpfService: BuscaPorCpfService){}

	handle(request: Request, response: Response): Response {
		const { cpf } = request.params;

		const inquilino = this.buscaPorCpfService.execute(cpf);

		return response.json(inquilino);
	}

}

export { BuscaPorCpfController }