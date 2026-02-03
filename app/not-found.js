import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
    return (
        <div className="container" style={{ textAlign: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: '700' }}>404</h1>
            <h2 style={{ marginBottom: '1.5rem' }}>Page Not Found</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="btn btn-primary">
                Return to Home
            </Link>
        </div>
    )
}
