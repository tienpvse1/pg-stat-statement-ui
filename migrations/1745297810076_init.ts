import { sql, type Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	sql`CREATE EXTENSION pg_stat_statements;`.execute(db);
}

export async function down(db: Kysely<any>): Promise<void> {
	sql`DROP EXTENSION pg_stat_statements;`.execute(db);
}
