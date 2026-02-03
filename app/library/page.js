'use client';

import { useState } from 'react';
import BookCard from '@/components/BookCard';
import { books, getCategories } from '@/data/books';
import styles from './page.module.css';

export default function Library() {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', ...getCategories()];

    const filteredBooks = activeFilter === 'All'
        ? books
        : books.filter(book => book.category === activeFilter);

    const pdfCount = books.filter(b => b.type === 'PDF').length;
    const epubCount = books.filter(b => b.type === 'EPUB').length;

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>📚 Academic Library</h1>
                    <p className={styles.heroSubtitle}>
                        Explore our curated collection of books and research materials on political science, philosophy, economics, and governance.
                    </p>
                    <div className={styles.statsBar}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{books.length}</span>
                            <span className={styles.statLabel}>Total Resources</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{pdfCount}</span>
                            <span className={styles.statLabel}>PDFs</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{epubCount}</span>
                            <span className={styles.statLabel}>E-Books</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.filterSection}>
                <div className={`container ${styles.filterContainer}`}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${activeFilter === category ? styles.filterBtnActive : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            <section className="container">
                {filteredBooks.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noResults}>
                        <h3>No books found in this category</h3>
                        <p>Try selecting a different category</p>
                    </div>
                )}
            </section>
        </>
    );
}
