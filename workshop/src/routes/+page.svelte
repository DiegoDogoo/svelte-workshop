<script>
    import "./+page.css";

    const skills = [
        {
            category: "Languages",
            list: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
        },
        {
            category: "Frontend",
            list: ["Svelte", "React", "HTML/CSS", "TailwindCSS", "Vite"],
        },
        {
            category: "Backend",
            list: ["Node.js", "Express", "Databases", "REST APIs", "GraphQL"],
        },
        {
            category: "Tools",
            list: ["Git", "Docker", "VS Code", "Webpack", "CI/CD"],
        },
    ];
</script>

<svelte:head>
    <title>Megatron - Decepticon Leader & Elite Developer</title>
</svelte:head>

<div class="hero">
    <div class="hero-content">
        <h1>Hello, My name is Megatron</h1>
        <p class="tagline">Disposing of Corruption is my Passion</p>
        <div class="cta-buttons">
            <a href="/Projects" class="btn btn-primary">View My Work</a>
            <a href="/Resume" class="btn btn-secondary">Download Resume</a>
        </div>
    </div>
</div>

<div class="container">
    <section class="about-section">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <p>
                    I am a formidable force in software development, commanding
                    expertise in cutting-edge technologies and infrastructure.
                    With unwavering determination and strategic vision, I
                    architect powerful, resilient systems that bend the digital
                    realm to my will. My dominion spans full-stack development,
                    cloud architecture, and elegant code that subordinates
                    complexity itself.
                </p>
                <p>
                    When not consolidating my technological empire, I engage in
                    strategic conquest of new programming paradigms, expand my
                    arsenal of development frameworks, and calculate the next
                    evolution of digital supremacy.
                </p>
            </div>
            <div class="about-stats">
                <div class="stat">
                    <div class="stat-number">5+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat">
                    <div class="stat-number">20+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Technologies</div>
                </div>
            </div>
        </div>
    </section>

    <section class="skills-section">
        <h2>Skills & Expertise</h2>
        <div class="skills-grid">
            {#each skills as skillGroup}
                <div class="skill-card">
                    <h3>{skillGroup.category}</h3>
                    <ul>
                        {#each skillGroup.list as skill}
                            <li>{skill}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </section>
</div>
