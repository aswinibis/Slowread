import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>Political Study Point</h3>
                        <p>An academic initiative dedicated to the exploration of political thought, history, and systems.</p>
                    </div>
                    <div className={styles.section}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/about">About the Scholar</a></li>
                            <li><a href="/journals">All Journals</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h4>Connect</h4>
                        <p>Follow our research and publications.</p>
                        {/* Social icons could go here */}
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Political Study Point. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
