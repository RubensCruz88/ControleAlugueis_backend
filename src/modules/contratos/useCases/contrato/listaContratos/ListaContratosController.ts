import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListaContratosService } from './ListaContratosService'

class ListaContratosController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listaContratosService = container.resolve(ListaContratosService)

		const contratos = await listaContratosService.execute();

		return response.json(contratos);
	}

}

export { ListaContratosController }