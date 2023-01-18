import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const setDataSourceConfig = (): DataSourceOptions => {
  // const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  // const migrationsPath: string = path.join(
  //   __dirname,
  //   "./migrations/**.{js,ts}"
  // );

  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [path.join(__dirname, "./entities/**.{js,ts}")],
      migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, "./entities/**.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
  };
};

export const AppDataSource = new DataSource(setDataSourceConfig());
