import { Request, Response } from 'express';
import { ExcluiInquilinoService } from './ExcluiInquilinoService'

class ExcluiInquilinoController {
	constructor( private excluiInquilinoService: ExcluiInquilinoService){}

	handle(request: Request, response: Response): Response {
		const { id } = request.params;

		try {
			this.excluiInquilinoService.execute(id);

			return response.send();
		} catch(err) {
			return response.status(400).json({erro: err.message});
		}
	}

}

export { ExcluiInquilinoController }