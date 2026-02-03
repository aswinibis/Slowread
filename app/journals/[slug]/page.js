import Link from 'next/link'
import { journals } from '@/data/journals'

export default function JournalPage({ params }) {
    const journal = journals.find(j => j.slug === params.slug);

    if (!journal) {
        return <div className="container py-5 text-center"><h1>Article not found</h1></div>
    }

    return (
        <article className="container py-5">
            <Link href="/journals" style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '2rem', display: 'inline-block' }}>
                &larr; Back to Journals
            </Link>

            <header style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {journal.category}
                </div>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{journal.title}</h1>
                <div style={{ color: 'var(--text-light)' }}>
                    By <strong>{journal.author}</strong> • {journal.date}
                </div>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '2rem', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--text-light)' }}>
                    {journal.excerpt}
                </p>
                <div className="article-content">
                    {journal.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} style={{ marginBottom: '1.5rem' }}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    )
}
