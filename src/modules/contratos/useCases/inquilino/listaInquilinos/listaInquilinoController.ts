import { Request, Response } from 'express';
import { ListaInquilinosService } from './listaInquilinosService';

class ListaInquilinoController {
	constructor( private listaInquilinoService: ListaInquilinosService){}

	handle(request: Request, response: Response): Response {
		const inquilino = this.listaInquilinoService.execute();

		return response.json(inquilino);
	}

}

export { ListaInquilinoController }