import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoInitial1633320163347 implements MigrationInterface {
    name = 'TodoInitial1633320163347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test_db\`.\`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`changed\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`test_db\`.\`todo\``);
    }

}
