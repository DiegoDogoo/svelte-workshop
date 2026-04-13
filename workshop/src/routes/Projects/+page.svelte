<script>
    import "./+page.css";

    const projects = [
        {
            id: 1,
            title: "Project Alpha",
            description: "A modern web application built with SvelteKit",
            tags: ["Svelte", "JavaScript", "Web"],
        },
        {
            id: 2,
            title: "Project Beta",
            description: "Real-time data visualization dashboard",
            tags: ["SvelteKit", "D3.js", "Analytics"],
        },
        {
            id: 3,
            title: "Project Gamma",
            description: "Mobile-first responsive design system",
            tags: ["Svelte", "CSS", "UI/UX"],
        },
    ];
</script>

<svelte:head>
    <title>Megatron's Constructions - Decepticon Weaponry</title>
</svelte:head>

<div class="container">
    <h1>Instruments of Conquest</h1>
    <div class="projects-grid">
        {#each projects as project (project.id)}
            <div class="card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div class="tags">
                    {#each project.tags as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
