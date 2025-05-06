import { db } from '$lib/server/db/index.js';

export async function load() {
	const data = await db.selectFrom('pg_stat_statements').selectAll().limit(5).execute();

	return { data };
}
