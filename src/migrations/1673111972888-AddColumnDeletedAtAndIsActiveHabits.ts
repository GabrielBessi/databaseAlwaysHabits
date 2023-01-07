import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnDeletedAtAndIsActiveHabits1673111972888 implements MigrationInterface {
    name = 'AddColumnDeletedAtAndIsActiveHabits1673111972888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "habits" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "habits" DROP COLUMN "isActive"`);
    }

}
