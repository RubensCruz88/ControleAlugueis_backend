import { Request, Response } from 'express';
import { ListaImoveisService } from './ListaImoveisService';

class ListaImoveisController {
	constructor( private listaImoveisService: ListaImoveisService){}

	handle(request: Request, response: Response): Response {
		const imoveis = this.listaImoveisService.execute();

		return response.json(imoveis);
	}
}

export { ListaImoveisController };