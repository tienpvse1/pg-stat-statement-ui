import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { env } from '$env/dynamic/private';
import type { DB } from './db';

const dialect = new PostgresDialect({
	pool: new Pool({
		user: env.POSGTGRES_USER,
		password: env.POSTGRES_PASSWORD,
		port: +env.POSTGRES_PORT,
		database: env.POSTGRES_DB
	})
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
	dialect
});
