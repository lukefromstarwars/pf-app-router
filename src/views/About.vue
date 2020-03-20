<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>loaded id: {{ id }}</p>
		<p>loaded from id: {{ from }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id
		};
	},
	watch: {
		$route(to, from) {
			this.id = to.params.id;
			this.from = from.params.id;
		}
	}
};
</script>
