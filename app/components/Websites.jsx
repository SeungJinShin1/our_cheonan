export default function Websites() {
    return (
        <div className="section-content fade-in w-full h-full overflow-y-auto bg-purple-50 scroll-smooth">
            <div className="max-w-4xl mx-auto p-6 md:p-10 flex flex-col h-full items-center justify-center pb-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-purple-800 mb-4">💻 천안시 누리집 방문하기</h2>
                    <p className="text-gray-600">더 많은 정보가 필요하면 아래 버튼을 눌러보세요.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl lg:max-w-6xl">
                    <a href="https://www.cheonan.go.kr/" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-cheonan-green hover:shadow-xl transition-all flex flex-col items-center text-center h-full">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-5xl">🏢</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">천안시청 누리집</h3>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold group-hover:bg-cheonan-green group-hover:text-white transition-colors mt-auto">
                                바로가기 ➜
                            </span>
                        </div>
                    </a>
                    <a href="https://www.cheonan.go.kr/tour.do" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-pink-400 hover:shadow-xl transition-all flex flex-col items-center text-center h-full">
                            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-5xl">🎡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">천안 문화관광</h3>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold group-hover:bg-pink-500 group-hover:text-white transition-colors mt-auto">
                                바로가기 ➜
                            </span>
                        </div>
                    </a>
                    <a href="https://www.cheonan.go.kr/dongnam/sub01_09.do" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-blue-400 hover:shadow-xl transition-all flex flex-col items-center text-center h-full">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-5xl">🧭</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">우리동네 이야기(동남구)</h3>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors mt-auto">
                                바로가기 ➜
                            </span>
                        </div>
                    </a>
                    <a href="https://www.cheonan.go.kr/seobuk/sub01_09.do" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-orange-400 hover:shadow-xl transition-all flex flex-col items-center text-center h-full">
                            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-5xl">🗺️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">우리동네 이야기(서북구)</h3>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors mt-auto">
                                바로가기 ➜
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
