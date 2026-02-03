import styles from './page.module.css'

export default function About() {
    return (
        <div className="container py-5">
            <div className={styles.aboutHeader}>
                <h1 className={styles.title}>About the Scholar</h1>
                <p className={styles.subtitle}>Dedicated to the rigorous study of political systems and thought.</p>
            </div>

            <div className={styles.content}>
                <div className={styles.bio}>
                    <h2>Research Focus</h2>
                    <p>
                        Political Study Point is an academic initiative led by a dedicated research scholar.
                        The platform serves as a repository for in-depth analysis and scholarly articles covering
                        a wide spectrum of political disciplines.
                    </p>
                    <p>
                        Our mission is to foster critical thinking and provide high-quality resources for students,
                        academics, and anyone interested in the complexities of governance, history, and international relations.
                    </p>

                    <h3>Areas of Expertise</h3>
                    <ul>
                        <li><strong>Political Philosophy:</strong> Examining the fundamental questions of justice, power, and rights.</li>
                        <li><strong>Political Theory:</strong> Analyzing the concepts and principles that shape political life.</li>
                        <li><strong>Political Economics:</strong> Investigating the interplay between economic systems and political institutions.</li>
                        <li><strong>Political History:</strong> Tracing the evolution of political events and movements.</li>
                        <li><strong>Political Geography:</strong> Understanding how geography influences political processes.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
