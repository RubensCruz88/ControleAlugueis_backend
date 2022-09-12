import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListaContratosAtivosService } from './ListaContratosAtivosService';

class ListaContratosAtivosController {
	async handle(request: Request, response: Response){
		const listaContratosAtivosService = container.resolve(ListaContratosAtivosService);

		const contratos = await listaContratosAtivosService.execute();

		return response.json(contratos);
	}

}

export { ListaContratosAtivosController }