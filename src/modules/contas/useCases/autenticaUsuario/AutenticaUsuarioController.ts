import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AutenticaUsuarioService } from './AutenticaUsuarioService';

class AutenticaUsuarioController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {username, senha} = request.body;

		const autenticaUsuarioService = container.resolve(AutenticaUsuarioService);

		const token = await autenticaUsuarioService.execute({username, senha});

		return response.json(token);
	}

}

export { AutenticaUsuarioController }