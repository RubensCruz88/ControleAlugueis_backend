import { DataSource } from 'typeorm';
import { Usuario } from '@modules/contas/entities/Usuario';
import { Imovel } from '@modules/contratos/entities/Imovel';
import { Inquilino } from '@modules/contratos/entities/Inquilino';
import { Contrato } from '@modules/contratos/entities/Contrato';
import { Lancamento } from '@modules/movimentacao/entities/Lancamento';

const dataSource = new DataSource({
	type: "postgres",
	port: 5432,
	host: "localhost",
	username: "docker",
	password: "docker",
	database: "alugueis",
	entities: [
		Usuario,
		Imovel,
		Inquilino,
		Contrato,
		Lancamento
	],
	migrations: [
		"src/database/migrations/1661210835895-criaImovel.ts",
		"src/database/migrations/1661210855625-criaInquilino.ts",
		"src/database/migrations/1661210896027-criaContrato.ts",
		"src/database/migrations/1661981985724-criaUsuarios.ts",
		"src/database/migrations/1662947435996-CriaLancamento.ts"
	],
	logging: ["error"]
});

export function createConnection(host = "database_alugueis"): Promise<DataSource> {
	return dataSource.setOptions({host}).initialize()
}

export { dataSource };