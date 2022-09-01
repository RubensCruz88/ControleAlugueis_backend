import { NextFunction, Request, Response} from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UsuarioRepository } from '../modules/contas/repositories/UsuarioRepository';

interface IPayLoad{
	sub: string;
}

export async function verificaAutenticacao(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if(!authHeader){
		throw new AppError("Token não informado",401);
	}

	const [, token] = authHeader.split(" ");

	try {
		const {sub: user_id} = verify(token,"29b5a2f496880fa1f5f9ef734032c13d") as IPayLoad;

		const usuarioRepositorio = new UsuarioRepository();
		const usuario = await usuarioRepositorio.buscaPorID(user_id);

		if(!usuario){
			throw new AppError("Usuário não existe");
		}

		request.usuario = {
			id: user_id,
			username: usuario.username
		};

		next();

	} catch(err) {
		throw new AppError("Token inválido");
	}

}
