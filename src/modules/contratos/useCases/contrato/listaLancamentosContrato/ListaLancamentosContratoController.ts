import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListaLancamentosContratoService } from './ListaLancamentosContratoService';

class ListaLancamentosContratoController {
	async handle(request: Request, response: Response){
		const { id } = request.params;

		const listaLancamentosContratoService = container.resolve(ListaLancamentosContratoService);

		const contrato = await listaLancamentosContratoService.execute(id);

		return response.json(contrato);
	}

}

export { ListaLancamentosContratoController }