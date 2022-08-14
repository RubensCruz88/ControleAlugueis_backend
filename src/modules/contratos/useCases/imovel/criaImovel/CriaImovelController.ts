import { Request, Response } from 'express';
import { CriaImovelService } from './CriaImovelService';

class CriaImovelController {
	constructor(private criaImovelService: CriaImovelService){}

	handle(request: Request, response: Response): Response{
		const {nome, endereco, numero, valor , valor_iptu} = request.body;

		try {
			const imovel = this.criaImovelService.execute({
				nome,
				endereco,
				numero,
				valor,
				valor_iptu
			})
	
			return response.json(imovel);
		} catch(err){
			return response.status(400).json({erro: err.message});
		}
	}

}

export { CriaImovelController };