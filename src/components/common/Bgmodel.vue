<template>
	<div class="bgmodel">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style>
	.bgmodel{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		background-color: rgba(0,0,0,0.3);
	}
</style>
