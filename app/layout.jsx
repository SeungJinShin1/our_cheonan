import './globals.css';

export const metadata = {
    title: '우리가 사는 천안',
    description: '우리가 사는 천안 - Next.js Migration',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
