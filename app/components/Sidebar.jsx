'use client';

export default function Sidebar({ showSection, toggleSidebar, isSidebarOpen }) {
    return (
        <nav
            className={`absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 flex flex-col border-r border-gray-100 h-full ${!isSidebarOpen ? 'md:w-0 md:overflow-hidden md:p-0' : ''
                }`}
        >
            <div className="p-6 bg-gradient-to-r from-cheonan-green to-cheonan-dark-green text-white shrink-0">
                <p className="text-xl font-bold">천안 탐험대</p>
                <p className="text-sm opacity-90 mt-1">어디로 가볼까요?</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth pb-20">
                <div className="text-xs font-bold text-gray-400 px-2 mt-2 mb-1">탐구 활동</div>
                <button
                    onClick={() => showSection('location-finder')}
                    className="w-full text-left p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 transition-all flex items-center gap-3 group"
                >
                    <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
                    <div>
                        <span className="block font-bold">우리 학교 찾기</span>
                        <span className="text-xs opacity-70">지도에서 우리 학교 찾기</span>
                    </div>
                </button>
                <button
                    onClick={() => showSection('festival')}
                    className="w-full text-left p-3 rounded-xl bg-yellow-50 hover:bg-yellow-100 text-yellow-800 transition-all flex items-center gap-3 group"
                >
                    <span className="text-2xl group-hover:scale-110 transition-transform">🎉</span>
                    <div>
                        <span className="block font-bold">특산물과 축제</span>
                        <span className="text-xs opacity-70">호두, 오이, 흥타령 등</span>
                    </div>
                </button>
                <button
                    onClick={() => showSection('photos')}
                    className="w-full text-left p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 transition-all flex items-center gap-3 group"
                >
                    <span className="text-2xl group-hover:scale-110 transition-transform">📸</span>
                    <div>
                        <span className="block font-bold">사진 자료실</span>
                        <span className="text-xs opacity-70">천안의 모습들</span>
                    </div>
                </button>
                <button
                    onClick={() => showSection('changing-cheonan')}
                    className="w-full text-left p-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 transition-all flex items-center gap-3 group"
                >
                    <span className="text-2xl group-hover:scale-110 transition-transform">📊</span>
                    <div>
                        <span className="block font-bold">변화하는 천안</span>
                        <span className="text-xs opacity-70">스마트 도시, 다문화 등</span>
                    </div>
                </button>

                <div className="text-xs font-bold text-gray-400 px-2 mt-4 mb-1">더 알아보기</div>
                <button
                    onClick={() => showSection('websites')}
                    className="w-full text-left p-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 transition-all flex items-center gap-3 group"
                >
                    <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
                    <div>
                        <span className="block font-bold">누리집 방문</span>
                        <span className="text-xs opacity-70">천안시청, 문화관광</span>
                    </div>
                </button>

                <div className="text-xs font-bold text-gray-400 px-2 mt-4 mb-1">선생님 전용</div>
                <button
                    onClick={() => showSection('teachers')}
                    className="w-full text-left p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition-all flex items-center gap-3 group"
                >
                    <span className="text-2xl group-hover:scale-110 transition-transform">👩‍🏫</span>
                    <div>
                        <span className="block font-bold">교사용 자료실</span>
                        <span className="text-xs opacity-70">교과서, 수업자료</span>
                    </div>
                </button>
            </div>

            <button onClick={toggleSidebar} className="md:hidden absolute top-2 right-2 text-white/80 hover:text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </nav>
    );
}
