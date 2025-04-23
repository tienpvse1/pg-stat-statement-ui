<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		value: string;
		summaryText: string;
		icon: Snippet<[{ className: string }]>;
	};

	let { title, value, summaryText, icon }: Props = $props();
</script>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
		<Card.Title class="text-sm font-medium">{title}</Card.Title>
		{@render icon({ className: 'h-4 w-4 text-muted-foreground' })}
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">{value}</div>
		<p class="text-xs text-muted-foreground">{summaryText}</p>
	</Card.Content>
</Card.Root>
