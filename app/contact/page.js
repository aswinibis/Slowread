import styles from './page.module.css'

export default function Contact() {
    return (
        <div className="container py-5">
            <div className={styles.contactHeader}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.subtitle}>Get in touch with Political Study Point</p>
            </div>

            <div className={styles.content}>
                <div className={styles.contactInfo}>
                    <h2>Reach Out</h2>
                    <p>
                        We welcome inquiries from students, academics, and anyone interested in
                        political philosophy, theory, economics, history, and geography.
                    </p>

                    <div className={styles.infoItem}>
                        <h3>Email</h3>
                        <p>contact@politicalstudypoint.com</p>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Academic Collaborations</h3>
                        <p>
                            For research collaborations, guest lectures, or academic partnerships,
                            please reach out via email with your proposal.
                        </p>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Feedback</h3>
                        <p>
                            We value your feedback on our publications. Share your thoughts
                            and suggestions to help us improve our content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
