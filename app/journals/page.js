import JournalCard from '@/components/JournalCard'
import { journals } from '@/data/journals'

export default function Journals() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1>All Publications</h1>
                <p style={{ color: 'var(--text-light)' }}>Browse our complete collection of academic journals and articles.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
            }}>
                {journals.map(journal => (
                    <JournalCard key={journal.id} journal={journal} />
                ))}
            </div>
        </div>
    )
}
