import { Repository, Timestamp } from 'typeorm';
import { Usuario } from '../model/Usuario';
import { dataSource } from '../../../database/dataSource';

interface ICriaUsuarioDTO {
	nome: string;
	senha: string;
	username: string;
	email: string;
}

class UsuarioRepository {
	private repositorio: Repository<Usuario>

	constructor(){
		this.repositorio = dataSource.getRepository(Usuario);
	}

	async create({nome, email, senha, username}: ICriaUsuarioDTO): Promise<Usuario> {
		const usuario = this.repositorio.create({
			nome,
			senha,
			username,
			email
		})

		await this.repositorio.save(usuario);

		return usuario;
	}

	async buscaPorUsername(username: string): Promise<Usuario> {
		const usuario = await this.repositorio.findOneBy({username});

		return usuario;
	}

	async buscaPorID(id: string): Promise<Usuario> {
		const usuario = await this.repositorio.findOneBy({id});

		return usuario;
	}
}

export { UsuarioRepository }