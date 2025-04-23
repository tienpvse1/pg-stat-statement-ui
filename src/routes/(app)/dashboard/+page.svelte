<script lang="ts">
	import FrequentQueriesTable from './(components)/frequent-queries-table.svelte';

	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Clock, Database, Filter, RefreshCw, Search } from 'lucide-svelte';
	import StatisticOverview from './(components)/statistic-overview.svelte';

	import * as Tabs from '$lib/components/ui/tabs';
	import AllQueriesTable from './(components)/all-queries-table.svelte';
	import SlowQueriesTable from './(components)/slow-queries-table.svelte';
	import PerformanceChart from './(components)/performance-chart.svelte';
	const frequentQueries = [
		{
			id: '1',
			query: 'SELECT * FROM public.user LIMIT 10',
			response_time: 23,
			returned_row: 10,
			timestamp: '2025-04-23 14:53:02 SGT'
		},
		{
			id: '2',
			query: 'INSERT INTO public.order(name, code) VALUES ($1, $2) RETURNING *',

			response_time: 7,
			returned_row: 1,
			timestamp: '2025-04-23 14:53:02 SGT'
		}
	];
</script>

<div class="flex min-h-screen w-full flex-col">
	<div class="border-b">
		<div class="container mx-auto flex h-16 items-center px-4">
			<a href="/" class="flex items-center gap-2 font-semibold">
				<Database class="h-6 w-6" />
				<span class="hidden sm:inline-block">Query Statistics</span>
			</a>
			<div class="ml-auto flex items-center gap-2">
				<Button variant="outline" size="sm" class="h-8 gap-1">
					<RefreshCw class="h-3.5 w-3.5" />
					<span class="hidden sm:inline-block">Refresh</span>
				</Button>
				<Button variant="outline" size="sm" class="h-8 gap-1">
					<Clock class="h-3.5 w-3.5" />
					<span class="hidden sm:inline-block">Last 24 hours</span>
				</Button>
			</div>
		</div>
	</div>
	<div class="container mx-auto flex-1 space-y-4 p-4 pt-6 md:p-8">
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-bold tracking-tight">Database Query Statistics</h1>
			<div class="flex items-center gap-2">
				<Button variant="outline" size="sm" class="h-8 gap-1">
					<Filter class="h-3.5 w-3.5" />
					<span class="hidden sm:inline-block">Filter</span>
				</Button>
			</div>
		</div>

		<StatisticOverview />

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Card.Root class="col-span-2">
				<Card.Header>
					<Card.Title>Query Execution Time</Card.Title>
					<Card.Description>Average execution time over the last 24 hours</Card.Description>
				</Card.Header>
				<Card.Content class="px-2">
					<PerformanceChart />
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Card.Title>Top Queries</Card.Title>
					<Card.Description>Most frequently executed queries</Card.Description>
				</Card.Header>
				<Card.Content>
					<FrequentQueriesTable data={frequentQueries} />
				</Card.Content>
			</Card.Root>
		</div>

		<div class="space-y-4">
			<div class="flex items-center gap-2">
				<h2 class="text-xl font-semibold tracking-tight">Query Analysis</h2>
				<div class="ml-auto flex items-center gap-2">
					<div class="relative w-full">
						<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search queries..."
							class="w-full pl-8 md:w-64 lg:w-80"
						/>
					</div>
				</div>
			</div>

			<Tabs.Root value="all">
				<Tabs.List>
					<Tabs.Trigger value="all">All Queries</Tabs.Trigger>
					<Tabs.Trigger value="slow">Slow Queries</Tabs.Trigger>
					<Tabs.Trigger value="frequent">Frequent Queries</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="all" class="mt-2 rounded-md border">
					<AllQueriesTable />
				</Tabs.Content>
				<Tabs.Content value="slow" class="mt-2 rounded-md border">
					<SlowQueriesTable />
				</Tabs.Content>
				<Tabs.Content value="frequent" class="mt-2 rounded-md border">
					<FrequentQueriesTable showAll data={frequentQueries} />
				</Tabs.Content>
			</Tabs.Root>
		</div>
	</div>
</div>
