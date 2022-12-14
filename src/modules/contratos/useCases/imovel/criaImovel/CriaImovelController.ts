import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CriaImovelService } from './CriaImovelService';

class CriaImovelController {
	async handle(request: Request, response: Response): Promise<Response>{
		const { nome, endereco, numero, valor_aluguel, valor_iptu} = request.body;

		const criaImovelService = container.resolve(CriaImovelService);

		const imovelCriado = await criaImovelService.execute({ nome, endereco, numero, valor_aluguel, valor_iptu});

		return response.json(imovelCriado);
	}

}

export { CriaImovelController };