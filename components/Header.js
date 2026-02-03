import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        Political Study Point
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/journals">Journals</Link></li>
                        <li><Link href="/library">Library</Link></li>
                        <li className={styles.dropdown}>
                            <span>Categories</span>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/category/political-philosophy">Philosophy</Link></li>
                                <li><Link href="/category/political-theory">Theory</Link></li>
                                <li><Link href="/category/political-economics">Economics</Link></li>
                                <li><Link href="/category/political-history">History</Link></li>
                                <li><Link href="/category/political-geography">Geography</Link></li>
                                <li><Link href="/category/public-administration">Public Admin</Link></li>
                                <li><Link href="/category/international-relations">Intl. Relations</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
