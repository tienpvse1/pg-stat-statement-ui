export const data = [
	{
		id: '3',
		query:
			'SELECT p.*, c.name AS category FROM products p JOIN categories c ON p.category_id = c.id WHERE p.active = true',
		calls: 3542,
		total_time: 42504,
		mean_time: 12.0,
		max_time: 45.2,
		min_time: 5.8,
		stddev_time: 4.5,
		rows: 28336,
		shared_blks_hit: 10626,
		shared_blks_read: 3542
	},
	{
		id: '6',
		query:
			'SELECT o.*, u.email FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = $1 ORDER BY o.created_at DESC LIMIT 100',
		calls: 1987,
		total_time: 29805,
		mean_time: 15.0,
		max_time: 52.3,
		min_time: 8.2,
		stddev_time: 5.8,
		rows: 198700,
		shared_blks_hit: 5961,
		shared_blks_read: 1987
	},
	{
		id: '8',
		query:
			'SELECT * FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id IN (SELECT id FROM orders WHERE user_id = $1)',
		calls: 1245,
		total_time: 24900,
		mean_time: 20.0,
		max_time: 78.5,
		min_time: 12.3,
		stddev_time: 8.2,
		rows: 12450,
		shared_blks_hit: 3735,
		shared_blks_read: 1245
	},
	{
		id: '9',
		query: 'SELECT * FROM analytics_events WHERE created_at BETWEEN $1 AND $2 GROUP BY event_type',
		calls: 987,
		total_time: 29610,
		mean_time: 30.0,
		max_time: 125.8,
		min_time: 18.4,
		stddev_time: 15.3,
		rows: 9870,
		shared_blks_hit: 2961,
		shared_blks_read: 987
	},
	{
		id: '10',
		query:
			'SELECT u.*, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id ORDER BY order_count DESC',
		calls: 854,
		total_time: 42700,
		mean_time: 50.0,
		max_time: 187.2,
		min_time: 32.1,
		stddev_time: 22.5,
		rows: 8540,
		shared_blks_hit: 2562,
		shared_blks_read: 854
	}
];
