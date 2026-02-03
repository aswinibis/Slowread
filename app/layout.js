import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Political Study Point',
    description: 'A dedicated platform for Political Philosophy, Theory, Economics, History, and Geography.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main style={{ minHeight: '80vh' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
