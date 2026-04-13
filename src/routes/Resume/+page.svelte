<script>
    import "./resume.css";

    const experience = [
        {
            year: "2023 - Present",
            title: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            description:
                "Led development of full-stack web applications using SvelteKit and Node.js. Mentored junior developers and improved performance by 40%.",
        },
        {
            year: "2021 - 2023",
            title: "Full Stack Developer",
            company: "Digital Innovations LLC",
            description:
                "Built responsive web applications with React and implemented REST APIs. Collaborated with UX/UI teams to deliver pixel-perfect designs.",
        },
        {
            year: "2020 - 2021",
            title: "Junior Web Developer",
            company: "StartUp Hub",
            description:
                "Developed frontend components using HTML, CSS, and JavaScript. Fixed bugs and optimized application performance.",
        },
    ];

    const education = [
        {
            year: "2020",
            degree: "Bachelor of Science in Computer Science",
            school: "University of Texas at El Paso",
            description: "GPA: 3.9/4.0 | Dean's List 2018-2020",
        },
        {
            year: "2023",
            degree: "AWS Certified Solutions Architect",
            school: "Amazon Web Services",
            description: "Professional level certification",
        },
    ];
</script>

<svelte:head>
    <title>Megatron's Battle Record - Decepticon Commander</title>
</svelte:head>

<div class="resume-container">
    <div class="resume-header">
        <h1>Conquest Record</h1>
        <p>
            A testament to my strategic campaigns, conquered technologies, and
            expanded dominion across the digital frontier
        </p>
    </div>

    <div class="resume-content">
        <div class="pdf-viewer">
            <iframe src="/resume.pdf" width="100%" height="600px" title="Resume"
            ></iframe>
        </div>

        <section class="experience-section">
            <h2>Professional Experience</h2>
            <div class="timeline">
                {#each experience as job}
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-year">{job.year}</div>
                            <h3>{job.title}</h3>
                            <p class="company">{job.company}</p>
                            <p>{job.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section class="education-section">
            <h2>Education & Certifications</h2>
            <div class="education-grid">
                {#each education as edu}
                    <div class="education-card">
                        <div class="edu-year">{edu.year}</div>
                        <h3>{edu.degree}</h3>
                        <p class="edu-school">{edu.school}</p>
                        <p class="edu-description">{edu.description}</p>
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>
