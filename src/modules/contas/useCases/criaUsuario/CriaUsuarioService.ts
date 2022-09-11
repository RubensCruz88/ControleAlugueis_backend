import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { Usuario } from '../../entities/Usuario';
import { UsuarioRepository } from '../../repositories/UsuarioRepository';
import { hash } from 'bcryptjs'

interface ICriaUsuarioDTO {
	nome: string;
	senha: string;
	username: string;
	email: string;
}

@injectable()
class CriaUsuarioService {
	constructor(
		@inject("UsuarioRepository")
		private usuarioRepository: UsuarioRepository
	){}

	async execute({ nome, email, senha, username}: ICriaUsuarioDTO): Promise<Usuario>{
		const senhaHash = await hash(senha,7);
		const usuarioExiste = await this.usuarioRepository.buscaPorUsername(username);

		if(usuarioExiste){
			throw new AppError("usuario já existe");
		}

		const novoUsuario = await this.usuarioRepository.create({
			nome, 
			email,
			senha: senhaHash,
			username
		});

		return novoUsuario;	
	}

}

export { CriaUsuarioService }