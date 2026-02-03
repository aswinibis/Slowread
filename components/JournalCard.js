import Link from 'next/link'
import styles from './JournalCard.module.css'

export default function JournalCard({ journal }) {
    return (
        <article className={styles.card}>
            <div className={styles.category}>{journal.category}</div>
            <h3 className={styles.title}>
                <Link href={`/journals/${journal.slug}`}>
                    {journal.title}
                </Link>
            </h3>
            <div className={styles.meta}>
                <span>{journal.date}</span>
                <span className={styles.separator}>•</span>
                <span>{journal.author}</span>
            </div>
            <p className={styles.excerpt}>{journal.excerpt}</p>
            <Link href={`/journals/${journal.slug}`} className={styles.readMore}>
                Read Analysis &rarr;
            </Link>
        </article>
    )
}
