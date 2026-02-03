import JournalCard from '@/components/JournalCard'
import { journals } from '@/data/journals'

// Helper to format slug back to title case
const formatCategory = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function CategoryPage({ params }) {
    const categoryName = formatCategory(params.category);

    // Filter by matching category name or slug (handles multi-word categories)
    const filteredJournals = journals.filter(j =>
        j.category.toLowerCase().includes(categoryName.toLowerCase()) ||
        j.category.toLowerCase().replaceAll(' ', '-') === params.category
    );

    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <span style={{
                    color: 'var(--secondary)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>Category</span>
                <h1>{categoryName}</h1>
            </div>

            {filteredJournals.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredJournals.map(journal => (
                        <JournalCard key={journal.id} journal={journal} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-5">
                    <p>No journals found in this category yet.</p>
                </div>
            )}
        </div>
    )
}
