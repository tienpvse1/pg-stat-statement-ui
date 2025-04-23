<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import { onDestroy, onMount } from 'svelte';

	let chartRef: HTMLDivElement;
	let options: ApexOptions = {
		series: [
			{
				name: 'Desktops',
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}
		],
		chart: {
			height: 350,
			type: 'area',
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},

		fill: {
			gradient: {
				shade: 'light'
			}
		},
		colors: ['hsl(220.9 39.3% 11%)'],
		stroke: {
			curve: 'straight',
			width: 3
		},
		title: {
			text: 'Product Trends by Month',
			align: 'left'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			}
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
		}
	};

	let chart: ApexCharts;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		if (!chartRef) return;
		chart = new ApexCharts(chartRef, options);
		chart.render();
	});

	onDestroy(() => {
		if (!chart) return;
		chart.render();
	});
</script>

<div bind:this={chartRef}></div>
