import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

  export class AlterUserDeleteUsername1641923662930
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn("users", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        "users",
        new TableColumn({
          name: "username",
          type: "varchar",
        })
      );
    }
  }
