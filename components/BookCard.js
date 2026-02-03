import Link from 'next/link'
import styles from './BookCard.module.css'

export default function BookCard({ book }) {
    const getBadgeClass = (type) => {
        switch (type.toUpperCase()) {
            case 'PDF':
                return styles.badgePdf;
            case 'EPUB':
                return styles.badgeEpub;
            case 'DJVU':
                return styles.badgeDjvu;
            default:
                return styles.badgePdf;
        }
    };

    const isPdf = book.type.toUpperCase() === 'PDF';
    const readerUrl = `/reader?file=${encodeURIComponent(book.file)}&title=${encodeURIComponent(book.title)}`;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{book.title}</h3>
                <span className={`${styles.badge} ${getBadgeClass(book.type)}`}>
                    {book.type}
                </span>
            </div>
            <p className={styles.author}>by {book.author}</p>
            <span className={styles.category}>{book.category}</span>
            <p className={styles.description}>{book.description}</p>
            <div className={styles.buttonGroup}>
                {isPdf ? (
                    <Link href={readerUrl} className={styles.readBtn}>
                        <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Read Online
                    </Link>
                ) : (
                    <span className={styles.readBtnDisabled}>
                        <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        PDF Only
                    </span>
                )}
                <a
                    href={book.file}
                    download
                    className={styles.downloadBtn}
                >
                    <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                </a>
            </div>
        </div>
    )
}
