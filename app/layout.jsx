import './globals.css';

export const metadata = {
    title: '우리가 사는 천안',
    description: '우리가 사는 천안 - Next.js Migration',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    );
}
