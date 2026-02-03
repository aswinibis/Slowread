import Link from 'next/link'
import styles from './page.module.css'
import JournalCard from '@/components/JournalCard'
import { journals } from '@/data/journals'

export default function Home() {
    const featuredJournals = journals.slice(0, 3);

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Political Study Point</h1>
                    <p className={styles.heroSubtitle}>
                        Exploring the depths of Political Philosophy, Theory, Economics, History, and Geography.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/journals" className="btn btn-primary">
                            Read Latest Journals
                        </Link>
                        <Link href="/about" className="btn btn-outline" style={{ marginLeft: '1rem', color: 'white', borderColor: 'white' }}>
                            About the Scholar
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="text-center mb-4">
                    <h2 className={styles.sectionTitle}>Latest Analysis</h2>
                    <p className={styles.sectionSubtitle}>Recent publications and academic thoughts.</p>
                </div>

                <div className={styles.grid}>
                    {featuredJournals.map(journal => (
                        <JournalCard key={journal.id} journal={journal} />
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Link href="/journals" className="btn btn-outline">
                        View All Publications
                    </Link>
                </div>
            </section>

            <section className={styles.categoriesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Explore Categories</h2>
                    <div className={styles.categoryGrid}>
                        {[
                            'Political Philosophy', 'Political Theory', 'Political Economics',
                            'Political History', 'Political Geography', 'Public Administration', 'International Relations'
                        ].map(cat => (
                            <Link
                                href={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                                key={cat}
                                className={styles.categoryCard}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
