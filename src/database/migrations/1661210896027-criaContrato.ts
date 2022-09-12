import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criaContrato1661210896027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "contrato",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "inicio",
						type: "timestamp"
					},
					{
						name: "fim",
						type: "timestamp"
					},
					{
						name: "imovel_id",
						type: "uuid"
					},
					{
						name: "inquilino_id",
						type: "uuid"
					},
					{
						name: "vencimento_fatura",
						type: "int",
						default: "0"
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
				],
				foreignKeys: [
					{
						name: "FKContratoInquilino",
						referencedTableName: "inquilino",
						referencedColumnNames: ["id"],
						columnNames: ["inquilino_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					},
					{
						name: "FKContratoImovel",
						referencedTableName: "imovel",
						referencedColumnNames: ["id"],
						columnNames: ["imovel_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					}

				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("contrato","FKContratoInquilino")
		await queryRunner.dropForeignKey("contrato","FKContratoImovel")
		await queryRunner.dropTable("contrato")
    }

}
