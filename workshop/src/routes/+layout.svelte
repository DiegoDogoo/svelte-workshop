<script>
	import favicon from "$lib/assets/favicon.svg";
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar">
	<div class="nav-container">
		<div class="nav-logo">Portfolio</div>
		<ul class="nav-menu">
			<li class="nav-item"><a href="/" class="nav-link">About</a></li>
			<li class="nav-item">
				<a href="/Projects" class="nav-link">Projects</a>
			</li>
			<li class="nav-item">
				<a href="/Resume" class="nav-link">Resume</a>
			</li>
		</ul>
	</div>
</nav>

<main class="main-content">
	{@render children()}
</main>

<footer class="footer">
	<p>&copy; 2026 Megatron. The Decepticon Dynasty shall reign eternal.</p>
</footer>
