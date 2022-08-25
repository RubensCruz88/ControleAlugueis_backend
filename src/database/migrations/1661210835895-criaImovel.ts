import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criaImovel1661210835895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
			name: "imovel",
			columns: [
				{
					name: "id",
					type: "uuid",
					isPrimary: true
				},
				{
					name: "nome",
					type: "varchar",
					length: "50"
				},
				{
					name: "endereco",
					type: "varchar",
					length: "120"
				},
				{
					name: "numero",
					type: "int"
				},
				{
					name: "valor_aluguel",
					type: "float",
					default: 0
				},
				{
					name: "valor_iptu",
					type: "float",
					default: 0
				},
				{
					name: "created_at",
					type: "timestamp",
					default: "now()"
				},
				{
					name: "updated_at",
					type: "timestamp",
					isNullable: true
				}
			]
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("imovel");
    }

}
