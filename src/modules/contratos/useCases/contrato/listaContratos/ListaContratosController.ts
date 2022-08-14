import { Request, Response } from 'express';
import { ListaContratosService } from './ListaContratosService'

class ListaContratosController {
	constructor( private listaContratosService: ListaContratosService){}

	handle(request: Request, response: Response): Response {
		const contratos = this.listaContratosService.execute();

		return response.json(contratos);
	}

}

export { ListaContratosController }