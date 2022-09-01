import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { UsuarioRepository } from '../../repositories/UsuarioRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IRequest {
	username: string;
	senha: string;
}

interface IResponse {
	usuario: {
		nome: string;
		email: string;
	},
	token: string
}

@injectable()
class AutenticaUsuarioService {
	constructor(
		@inject("UsuarioRepository")
		private usuarioRepositorio: UsuarioRepository
	){}

	async execute({username, senha}: IRequest): Promise<IResponse>{
		const usuario = await this.usuarioRepositorio.buscaPorUsername(username);

		if(!usuario){
			throw new AppError("Email ou senha inválida");
		}

		const validaSenha = await compare(senha,usuario.senha);

		if(!validaSenha){
			throw new AppError("Email ou senha inválida");
		}

		const token = sign({},"29b5a2f496880fa1f5f9ef734032c13d",{
			subject: usuario.id,
			expiresIn: "1d"
		})

		const retornoToken: IResponse = {
			token,
			usuario: {
				nome: usuario.nome,
				email: usuario.email
			}
		}

		return retornoToken;
		
	}

}

export { AutenticaUsuarioService }