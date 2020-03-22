<template>
	<v-container>
		<v-card height="400" class="overflow-hidden">
			<v-navigation-drawer v-model="drawer" :color="color" :expand-on-hover="true" :mini-variant="miniVariant" :src="bg" absolute dark>
				<v-list dense nav class="py-0">
					<v-list-item two-line :class="miniVariant && 'px-0'">
						<!-- <v-list-item-avatar>
							<img src="https://randomuser.me/api/portraits/men/81.jpg" />
						</v-list-item-avatar> -->

						<v-list-item-content>
							<v-list-item-title>PFCSM-OPGG</v-list-item-title>
							<v-list-item-subtitle>All our professional tools</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>

					<v-divider></v-divider>

					<v-list-item v-for="item in menuItems" :key="item.title" link>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			drawer: true,
			menuItems: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard' },
				{ title: 'Photos', icon: 'mdi-image' },
				{ title: 'About', icon: 'mdi-help-box' }
			],
			color: 'primary',
			colors: ['primary', 'blue', 'success', 'red', 'teal'],
			right: true,
			miniVariant: false,
			expandOnHover: false,
			background: false
		};
	},
	computed: {}
};
</script>
