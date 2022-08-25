import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criaInquilino1661210855625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "inquilino",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "cpf",
						type: "varchar",
						length: "11"
					},
					{
						name: "nome",
						type: "varchar",
						length: "50"
					},
					{
						name: "telefone",
						type: "varchar",
						length: "11"
					},
					{
						name: "email",
						type: "varchar",
						length: "100"
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
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("inquilino");
    }

}
