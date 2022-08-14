import { Request, Response } from 'express';
import { ListaImovelPorIdService } from './ListaImovelPorIdService';

class ListaImovelPorIdController {
	constructor(private listaImoveisPorIdService: ListaImovelPorIdService){}

	handle(request: Request, response: Response): Response {
		const {id} = request.params;

		try {
			const imovel = this.listaImoveisPorIdService.execute(id);

			return response.json(imovel);
		} catch(err){
			return response.status(404).json({erro: err.message});
		}
	}
}

export { ListaImovelPorIdController }