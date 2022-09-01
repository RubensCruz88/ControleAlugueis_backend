import { query } from "express"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criaUsuarios1661981985724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "usuario",
				columns: [
					{
						name: "id",
						type: "uuid"
					},
					{
						name: "nome",
						type: "varchar"
					},
					{
						name: "senha",
						type: "varchar"
					},
					{
						name: "username",
						type: "varchar",
						isUnique: true
					},
					{
						name: "email",
						type: "varchar"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
	await queryRunner.dropTable("usuario");
    }

}
