import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListaInquilinosService } from './listaInquilinosService';

class ListaInquilinoController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listaInquilinoService = container.resolve(ListaInquilinosService);

		const inquilinos = await listaInquilinoService.execute();

		return response.json(inquilinos);
	}

}

export { ListaInquilinoController }