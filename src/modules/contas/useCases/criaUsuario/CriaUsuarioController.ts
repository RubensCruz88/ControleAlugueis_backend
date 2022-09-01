import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CriaUsuarioService } from './CriaUsuarioService'

class CriaUsuarioController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {nome, email, senha, username} = request.body;

		const criaUsuarioService = container.resolve(CriaUsuarioService);

		const usuario = await criaUsuarioService.execute({nome, email, senha, username});

		return response.json(usuario);
	}

}

export { CriaUsuarioController }
