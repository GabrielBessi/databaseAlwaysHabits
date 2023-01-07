import { MigrationInterface, QueryRunner } from "typeorm";

export class updateColumnDateHabit1672352261620 implements MigrationInterface {
    name = 'updateColumnDateHabit1672352261620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "habits" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "habits" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
