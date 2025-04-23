<script lang="ts">
	import { ArrowUpDown, MoreHorizontal } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Table from '$lib/components/ui/table';
	type Props = {
		showAll?: boolean;
		data: {
			id: string;
			query: string;
			response_time: number;
			returned_row: number;
			timestamp: string;
		}[];
	};
	// type SortKey = keyof Props['data'][0];
	// type SortDirection = 'desc' | 'asc';

	let { data, showAll }: Props = $props();

	const displayData = showAll ? data : data.slice(0, 3);
	// function handleSort(column: SortKey) {
	// 	if (sorting === column) {
	// 		sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
	// 	} else {
	// 		sorting = column;
	// 		sortDirection = 'desc';
	// 	}
	// }
</script>

{#if showAll}
	<div class="w-full">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[40px]">
						<Checkbox />
					</Table.Head>
					<Table.Head class="max-w-[400px]">Query</Table.Head>
					<Table.Head class="w-[100px]">
						<button class="flex cursor-pointer items-center">
							Response Time
							<ArrowUpDown class="ml-2 h-4 w-4" />
						</button>
					</Table.Head>
					<Table.Head class="w-[100px]">
						<button class="flex cursor-pointer items-center">
							Returned Rows
							<ArrowUpDown class="ml-2 h-4 w-4" />
						</button>
					</Table.Head>
					<Table.Head class="w-[100px]">
						<button class="flex cursor-pointer items-center">
							Timestamps
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
						<Table.Cell>{query.response_time.toFixed(2)}ms</Table.Cell>
						<Table.Cell>{query.returned_row.toFixed(2)}</Table.Cell>
						<Table.Cell>{query.timestamp}</Table.Cell>
						<Table.Cell>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button variant="ghost" class="h-8 w-8 p-0">
										<span class="sr-only">Open menu</span>
										<MoreHorizontal class="h-4 w-4" />
									</Button>
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
{:else}
	<div class="w-full">
		{#each displayData as query (query.id)}
			<div class="flex items-center justify-between border-b py-2 last:border-0">
				<div class="max-w-[200px] truncate font-mono text-xs">{query.query}</div>

				<div class="font-medium">{query.returned_row.toLocaleString()}</div>
			</div>
		{/each}
	</div>
{/if}
