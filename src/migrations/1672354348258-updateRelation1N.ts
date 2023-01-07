import { MigrationInterface, QueryRunner } from "typeorm";

export class updateRelation1N1672354348258 implements MigrationInterface {
    name = 'updateRelation1N1672354348258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d91733c0d34dd56c84b8033058b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "habitsId"`);
        await queryRunner.query(`ALTER TABLE "habits" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "habits" ADD CONSTRAINT "FK_356d1f144ceadad6942fa17af64" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" DROP CONSTRAINT "FK_356d1f144ceadad6942fa17af64"`);
        await queryRunner.query(`ALTER TABLE "habits" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "habitsId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d91733c0d34dd56c84b8033058b" FOREIGN KEY ("habitsId") REFERENCES "habits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
