import { Request, Response } from 'express';
import { ExcluiImovelService } from '../excluiImovel/excluiImovelService';

class ExcluiImovelController {
	constructor( private excluiImovelService: ExcluiImovelService){}

	handle(request: Request, response: Response): Response {
		const { id } = request.params;

		try {
			this.excluiImovelService.execute(id);

			return response.send();
		}catch(erro){
			return response.status(404).json({erro: erro.message});
		}
	}

}

export { ExcluiImovelController }