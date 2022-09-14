import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaLancamento1662947435996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "lancamento",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "periodo",
						type: "varchar",
						length: "6"
					},
					{
						name: "contrato_id",
						type: "uuid",
					},
					{
						name: "valor_bruto",
						type: "float",
						default: 0
					},
					{
						name: "iptu",
						type: "float",
						default: 0
					},
					{
						name: "abono",
						type: "float",
						default: 0
					},
					{
						name: "multa",
						type: "float",
						default: 0
					},
					{
						name: "reembolso",
						type: "float",
						default: 0
					},
					{
						name: "valor_liquido",
						type: "float"
					},
					{
						name: "valor_pago",
						type: "float"
					},
					{
						name: "data_pagamento",
						type: "timestamp"
					},
					{
						name: "observacao",
						type: "varchar"
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
						name: "FKLancamentoContrato",
						referencedTableName: "contrato",
						referencedColumnNames: ["id"],
						columnNames: ["contrato_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("lancamento","FKLancamentoContrato");
		await queryRunner.dropTable("lancamento");
    }

}
