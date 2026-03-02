export default function Teachers() {
    return (
        <div className="section-content fade-in w-full h-full overflow-y-auto bg-gray-50 scroll-smooth">
            <div className="max-w-4xl mx-auto p-6 md:p-10 pb-20">
                <div className="bg-white rounded-3xl p-8 shadow-lg mb-8 border-l-8 border-gray-600">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">👩‍🏫 선생님 자료실</h2>
                    <p className="text-gray-500">수업에 필요한 자료를 다운로드하세요.</p>
                </div>
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">PDF</span> 교과서 자료실
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <a href="https://works.do/GSwcJDg" target="_blank" rel="noreferrer" className="block p-4 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all flex justify-between items-center">
                                <span className="font-bold">📘 1단원</span> <span className="text-blue-500 text-sm">다운로드 ⬇</span>
                            </a>
                            <a href="https://works.do/5IKiaSX" target="_blank" rel="noreferrer" className="block p-4 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all flex justify-between items-center">
                                <span className="font-bold">📘 2단원</span> <span className="text-blue-500 text-sm">다운로드 ⬇</span>
                            </a>
                            <a href="https://works.do/xaKf75O" target="_blank" rel="noreferrer" className="block p-4 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all flex justify-between items-center">
                                <span className="font-bold">📘 3단원</span> <span className="text-blue-500 text-sm">다운로드 ⬇</span>
                            </a>
                            <a href="https://works.do/FvCQbEc" target="_blank" rel="noreferrer" className="block p-4 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all flex justify-between items-center">
                                <span className="font-bold">📘 부록</span> <span className="text-blue-500 text-sm">다운로드 ⬇</span>
                            </a>
                            <a href="https://works.do/GLfzH8W" target="_blank" rel="noreferrer" className="block p-4 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all flex justify-between items-center">
                                <span className="font-bold">📘 체험길</span> <span className="text-blue-500 text-sm">다운로드 ⬇</span>
                            </a>
                            <a href="https://works.do/FSHSnwf" target="_blank" rel="noreferrer" className="block p-4 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all flex justify-between items-center">
                                <span className="font-bold">🗺️ 천안시 지도</span> <span className="text-blue-500 text-sm">다운로드 ⬇</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="bg-green-100 text-green-600 p-2 rounded-lg text-sm">Game</span> 보드게임 자료
                        </h3>
                        <a href="https://works.do/GrleszX" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🎲</span>
                                <div>
                                    <div className="font-bold text-gray-700">천안 탐험 보드게임 세트</div>
                                    <div className="text-xs text-gray-500">게임판, 말, 카드 포함</div>
                                </div>
                            </div>
                            <span className="text-blue-500 font-bold text-sm">⬇ 다운로드</span>
                        </a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-sm">Doc</span> 학습지 자료
                        </h3>
                        <a href="https://works.do/GwGSlWb" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📝</span>
                                <div>
                                    <div className="font-bold text-gray-700">단원별 정리 학습지 모음</div>
                                    <div className="text-xs text-gray-500">HWP, PDF 파일 포함</div>
                                </div>
                            </div>
                            <span className="text-blue-500 font-bold text-sm">⬇ 다운로드</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
