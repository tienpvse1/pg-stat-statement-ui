import { PostgresDialect } from 'kysely';
import { defineConfig } from 'kysely-ctl';
import { Pool } from 'pg';

const dialect = new PostgresDialect({
	pool: new Pool({
		user: process.env.POSGTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		port: +process.env.POSTGRES_PORT!,
		database: process.env.POSTGRES_DB
	})
});

export default defineConfig({
	migrations: {
		migrationFolder: 'migrations'
	},
	dialect
});
