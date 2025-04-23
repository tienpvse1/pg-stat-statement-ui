<script lang="ts">
	import StatisticCard from './statistic-card.svelte';
	import Database from 'lucide-svelte/icons/database';
	import Clock from 'lucide-svelte/icons/clock';
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	<StatisticCard title="Total Queries" value="24,389" summaryText="+12% from last period">
		{#snippet icon({ className })}
			<Database class={className} />
		{/snippet}
	</StatisticCard>

	<StatisticCard title="Avg. Execution Time" value="42.3ms" summaryText="-8% from last period">
		{#snippet icon({ className })}
			<Clock class={className} />
		{/snippet}
	</StatisticCard>

	<StatisticCard title="Slow Queries" value="128" summaryText="+2% from last period">
		{#snippet icon({ className })}
			<Clock class={className} />
		{/snippet}
	</StatisticCard>

	<StatisticCard title="Cache Hit Ratio" value="94.2%" summaryText="+1.2% from last period">
		{#snippet icon({ className })}
			<Clock class={className} />
		{/snippet}
	</StatisticCard>
</div>
