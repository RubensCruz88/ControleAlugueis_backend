import { Request, Response } from 'express';
import { CriaContratoService } from './CriaContratoService'

class CriaContratoController {
	constructor( private criaContratoService: CriaContratoService){}

	handle(request: Request, response: Response): Response {
		const contrato = request.body;

		try {
			const novoContrato = this.criaContratoService.execute(contrato);

			return response.json(novoContrato);
		} catch(err){
			return response.status(400).json({erro: err.message});
		}
	}

}

export { CriaContratoController }