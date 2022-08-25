import { DataSource } from 'typeorm';

const dataSource = new DataSource({
	type: "postgres",
	port: 5432,
	host: "localhost",
	username: "docker",
	password: "docker",
	database: "alugueis",
	entities: [
		"src/modules/contratos/model/Imovel.ts",
		"src/modules/contratos/model/Inquilino.ts",
		"src/modules/contratos/model/Contrato.ts",
	],
	migrations: [
		"src/database/migrations/1661210835895-criaImovel.ts",
		"src/database/migrations/1661210855625-criaInquilino.ts",
		"src/database/migrations/1661210896027-criaContrato.ts"
	]
});

export function createConnection(host = "database_alugueis"): Promise<DataSource> {
	return dataSource.setOptions({host}).initialize()
}

export { dataSource };