import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableUserAndHabit1672273740072 implements MigrationInterface {
    name = 'createTableUserAndHabit1672273740072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "photo" character varying, "activity" character varying(50) NOT NULL, "email" character varying(80) NOT NULL, "password" character varying(20) NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "habitsId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "habits" ("id" SERIAL NOT NULL, "tittle" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'Pendente', "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_b3ec33c2d7af69d09fcf4af7e39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d91733c0d34dd56c84b8033058b" FOREIGN KEY ("habitsId") REFERENCES "habits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d91733c0d34dd56c84b8033058b"`);
        await queryRunner.query(`DROP TABLE "habits"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
