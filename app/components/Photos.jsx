export default function Photos() {
    return (
        <div className="section-content fade-in w-full h-full flex flex-col bg-indigo-50 overflow-y-auto scroll-smooth">
            <div className="max-w-4xl mx-auto p-6 md:p-10 flex flex-col h-full items-center justify-center pb-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-4">📸 천안 사진 자료실</h2>
                    <p className="text-gray-600">
                        천안의 멋진 모습과 산업단지 사진을 확인해보세요.<br />
                        (아래 버튼을 누르면 사진이 있는 곳으로 이동합니다)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                    <a href="https://works.do/x3h5IIR" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-indigo-400 hover:shadow-xl transition-all flex flex-col items-center text-center h-full">
                            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-5xl">📷</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">천안의 모습</h3>
                            <p className="text-gray-500 mb-4">우리 고장의 문화유산과 풍경 사진</p>
                            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-bold group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                사진 보러 가기 ➜
                            </span>
                        </div>
                    </a>

                    <a href="https://works.do/Fw0chX9" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-transparent hover:border-blue-400 hover:shadow-xl transition-all flex flex-col items-center text-center h-full">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-5xl">🏭</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">천안의 산업단지</h3>
                            <p className="text-gray-500 mb-4">천안에 있는 여러 공단 사진</p>
                            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                공단 사진 보기 ➜
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
