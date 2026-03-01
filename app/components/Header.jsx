'use client';

export default function Header({ toggleSidebar, showSection }) {
    return (
        <header className="bg-white shadow-md z-40 flex items-center justify-between p-4 h-16 shrink-0">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cheonan-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h1 className="text-2xl md:text-3xl text-gray-800 pt-1 cursor-pointer" onClick={() => showSection('location-finder')}>
                    우리가 사는 <span className="text-cheonan-green">천안</span>
                </h1>
            </div>
            <button onClick={() => alert('궁금한 점이 있으면 선생님께 물어보세요!')} className="p-2 rounded-full hover:bg-yellow-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </header>
    );
}
