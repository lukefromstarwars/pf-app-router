<template>
	<div id="app">
		<div id="nav">
			<ul>
				<router-link to="/" tag="li" exact-active-class="router-link-exact-active"><a>Home</a></router-link>
				<router-link to="/about/1" tag="li"><a>About 1</a></router-link>
				<router-link to="/about/2" tag="li"><a>About 2</a></router-link>
				<router-link :to="{ name: 'MyVue' }" tag="li"><a>MyVue</a></router-link>
			</ul>
		</div>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
