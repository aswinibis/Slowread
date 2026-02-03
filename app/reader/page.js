'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function ReaderContent() {
    const searchParams = useSearchParams();
    const file = searchParams.get('file');
    const title = searchParams.get('title') || 'Document';

    if (!file) {
        return (
            <div className={styles.error}>
                <h1>No file specified</h1>
                <p>Please select a book from the library to read.</p>
                <Link href="/library" className={styles.backBtn}>
                    ← Back to Library
                </Link>
            </div>
        );
    }

    const isPdf = file.toLowerCase().endsWith('.pdf');

    return (
        <div className={styles.readerContainer}>
            <div className={styles.toolbar}>
                <Link href="/library" className={styles.backBtn}>
                    ← Back to Library
                </Link>
                <h1 className={styles.title}>{title}</h1>
                <a href={file} download className={styles.downloadBtn}>
                    Download
                </a>
            </div>

            <div className={styles.viewer}>
                {isPdf ? (
                    <iframe
                        src={file}
                        className={styles.pdfFrame}
                        title={title}
                    />
                ) : (
                    <div className={styles.unsupported}>
                        <h2>Preview not available</h2>
                        <p>This file format ({file.split('.').pop()?.toUpperCase()}) cannot be previewed in the browser.</p>
                        <p>Please download the file to read it.</p>
                        <a href={file} download className={styles.downloadBtnLarge}>
                            Download File
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Reader() {
    return (
        <Suspense fallback={
            <div className={styles.loading}>
                <p>Loading reader...</p>
            </div>
        }>
            <ReaderContent />
        </Suspense>
    );
}
