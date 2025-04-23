<script lang="ts">
	import { ArrowUpDown, MoreHorizontal } from 'lucide-svelte/icons';

	import { buttonVariants } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Table from '$lib/components/ui/table';
	import { data } from './fake-data';
	import { cn } from '$lib/utils';

	type Props = {
		data: typeof data;
	};

	type SortKey = keyof Props['data'][0];
	type SortDirection = 'asc' | 'desc';

	let sorting = $state<SortKey>('mean_time');
	let sortDirection = $state<SortDirection>('desc');

	const handleSort = (column: SortKey) => {
		if (sorting === column) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sorting = column;
			sortDirection = 'desc';
		}
	};
</script>

<div class="w-full">
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[40px]">
					<Checkbox />
				</Table.Head>
				<Table.Head class="max-w-[400px]">Query</Table.Head>
				<Table.Head class="w-[100px]">
					<button class="flex cursor-pointer items-center" onclick={() => handleSort('calls')}>
						Calls
						<ArrowUpDown class="ml-2 h-4 w-4" />
					</button>
				</Table.Head>
				<Table.Head class="w-[100px]">
					<button class="flex cursor-pointer items-center" onclick={() => handleSort('mean_time')}>
						Avg Time
						<ArrowUpDown class="ml-2 h-4 w-4" />
					</button>
				</Table.Head>
				<Table.Head class="w-[100px]">
					<button class="flex cursor-pointer items-center" onclick={() => handleSort('max_time')}>
						Max Time
						<ArrowUpDown class="ml-2 h-4 w-4" />
					</button>
				</Table.Head>
				<Table.Head class="w-[100px]">
					<button class="flex cursor-pointer items-center" onclick={() => handleSort('rows')}>
						Rows
						<ArrowUpDown class="ml-2 h-4 w-4" />
					</button>
				</Table.Head>
				<Table.Head class="w-[80px]"></Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data as query (query.id)}
				<Table.Row>
					<Table.Cell>
						<Checkbox />
					</Table.Cell>
					<Table.Cell class="max-w-[400px] truncate font-mono text-xs">{query.query}</Table.Cell>
					<Table.Cell>{query.calls.toLocaleString()}</Table.Cell>
					<Table.Cell>{query.mean_time.toFixed(2)}ms</Table.Cell>
					<Table.Cell>{query.max_time.toFixed(2)}ms</Table.Cell>
					<Table.Cell>{query.rows.toLocaleString()}</Table.Cell>
					<Table.Cell>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger
								class={cn(buttonVariants({ variant: 'ghost', class: 'h-8 w-8 p-0' }))}
							>
								<span class="sr-only">Open menu</span>
								<MoreHorizontal class="h-4 w-4" />
							</DropdownMenu.Trigger>
							<DropdownMenu.Content align="end">
								<DropdownMenu.Label>Actions</DropdownMenu.Label>
								<DropdownMenu.Item>View Details</DropdownMenu.Item>
								<DropdownMenu.Item>View Execution Plan</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.Item>Add to Watchlist</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
