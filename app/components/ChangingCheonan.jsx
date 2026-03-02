'use client';

export default function ChangingCheonan() {
    return (
        <div className="section-content fade-in w-full h-full overflow-y-auto bg-indigo-50 scroll-smooth">
            <div className="max-w-5xl mx-auto p-6 md:p-10 pb-20">
                <div className="bg-white rounded-3xl p-8 shadow-lg mb-8 border-l-8 border-indigo-600">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">📊 변화하는 천안</h2>
                    <p className="text-gray-600">스마트 도시로 거듭나고 있는 천안의 새로운 모습을 살펴보아요.</p>
                </div>

                <div className="space-y-12">
                    {/* 1. 지능정보화 (스마트 도시) 섹션 */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">🤖</span>
                            <h3 className="text-2xl font-bold text-indigo-900">지능정보화 (스마트 도시)</h3>
                        </div>
                        <p className="text-gray-600 mb-6 font-medium">첨단 기술과 만난 천안의 똑똑한 변화를 영상으로 확인해 보세요!</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 영상 1 */}
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 flex flex-col">
                                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                                    <iframe
                                        src="https://www.youtube.com/embed/h3MPj9d2GCk"
                                        title="(영상) Btv 중부)“핸들이 스스로!” 천안에 자율주행버스 달린다(2025.11.4.)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-4 flex-1">
                                    <p className="font-bold text-gray-800 text-sm md:text-base break-keep">
                                        “핸들이 스스로!” 천안에 자율주행버스 달린다 🚌
                                    </p>
                                </div>
                            </div>

                            {/* 영상 2 */}
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 flex flex-col">
                                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                                    <iframe
                                        src="https://www.youtube.com/embed/NhTl-qRbNvo"
                                        title="(영상)TJB)‘구글과 손 잡고 AI 행정 혁신’ 천안 스마트 도시 탄력(2025.4.22.)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-4 flex-1">
                                    <p className="font-bold text-gray-800 text-sm md:text-base break-keep">
                                        구글과 손 잡고 AI 행정 혁신! 천안 스마트 도시 탄력 🌐
                                    </p>
                                </div>
                            </div>

                            {/* 영상 3 */}
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 flex flex-col">
                                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                                    <iframe
                                        src="https://www.youtube.com/embed/SWhp7dRVerg"
                                        title="(영상)천안TV뉴스)천안시농업기술센터, 스마트팜 사관학교 청년농업인 오이 첫 출하(2025.7.3.)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-4 flex-1">
                                    <p className="font-bold text-gray-800 text-sm md:text-base break-keep">
                                        스마트팜 사관학교! 청년농업인 오이 첫 출하 🥒
                                    </p>
                                </div>
                            </div>

                            {/* 영상 4 */}
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 flex flex-col">
                                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                                    <iframe
                                        src="https://www.youtube.com/embed/Cf1QG9C-VxY"
                                        title="(영상)Btv 중부)천안시, ‘CCTV AI화’로 도시 안전 강화 (2026.2.4.)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-4 flex-1">
                                    <p className="font-bold text-gray-800 text-sm md:text-base break-keep">
                                        'CCTV AI화'로 똑똑하게! 천안시 도시 안전 강화 🚨
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. 사회 문제 현황 링크 섹션 */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">👥</span>
                            <h3 className="text-2xl font-bold text-indigo-900">다양한 이웃과 함께하는 천안</h3>
                        </div>
                        <p className="text-gray-600 mb-6 font-medium">천안시의 인구 변화, 다문화 가족, 반려동물과 관련된 통계와 소식을 알아보아요.</p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* 저출산 고령화 */}
                            <a href="https://www.cheonan.go.kr/prog/statAgeplt/stat/sub02_01_02/list.do" target="_blank" rel="noreferrer" className="block group h-full">
                                <div className="bg-rose-50 rounded-2xl p-6 border-2 border-transparent hover:border-rose-400 hover:shadow-lg transition-all flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100 rounded-bl-full -mr-4 -mt-4 opacity-50 z-0 group-hover:scale-110 transition-transform"></div>
                                    <div className="relative z-10 flex flex-col flex-1">
                                        <span className="text-4xl mb-4 group-hover:-translate-y-1 transition-transform">📉</span>
                                        <h4 className="text-xl font-bold text-rose-800 mb-2">저출산 고령화</h4>
                                        <p className="text-rose-600 font-bold mb-1 flex-1">연령별 인구 그래프 보기</p>
                                        <div className="mt-4 inline-flex items-center text-sm font-bold text-rose-500">
                                            통계청 자료 확인하기 <span className="ml-1">➔</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* 다문화 사회 */}
                            <div className="bg-sky-50 rounded-2xl p-6 border-2 border-transparent hover:border-sky-400 hover:shadow-lg transition-all flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-bl-full -mr-4 -mt-4 opacity-50 z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="relative z-10 flex flex-col flex-1">
                                    <span className="text-4xl mb-4 group-hover:-translate-y-1 transition-transform">🌏</span>
                                    <h4 className="text-xl font-bold text-sky-800 mb-2">다문화 사회</h4>
                                    <div className="flex flex-col gap-2 flex-1 mt-2">
                                        <a href="https://www.cheonan.go.kr/kor/sub06_08_01_01.do" target="_blank" rel="noreferrer" className="bg-white px-3 py-2 rounded-lg text-sky-700 font-bold text-sm shadow-sm hover:bg-sky-100 transition-colors flex items-center justify-between">
                                            <span>외국인 주민 현황</span>
                                            <span>➔</span>
                                        </a>
                                        <a href="https://www.cheonan.go.kr/bbs/BBSMSTR_000000000278/view.do" target="_blank" rel="noreferrer" className="bg-white px-3 py-2 rounded-lg text-sky-700 font-bold text-sm shadow-sm hover:bg-sky-100 transition-colors flex items-center justify-between">
                                            <span>다문화 외국인가구 통계</span>
                                            <span>➔</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 반려동물 양육 */}
                            <a href="https://www.cheonan.go.kr/prog/bbsArticle/BBSMSTR_000000000030/view.do?bbsId=BBSMSTR_000000000030&nttId=B000000502716Js5jK4" target="_blank" rel="noreferrer" className="block group h-full">
                                <div className="bg-amber-50 rounded-2xl p-6 border-2 border-transparent hover:border-amber-400 hover:shadow-lg transition-all flex flex-col h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -mr-4 -mt-4 opacity-50 z-0 group-hover:scale-110 transition-transform"></div>
                                    <div className="relative z-10 flex flex-col flex-1">
                                        <span className="text-4xl mb-4 group-hover:-translate-y-1 transition-transform">🐶</span>
                                        <h4 className="text-xl font-bold text-amber-800 mb-2">반려동물 양육</h4>
                                        <p className="text-amber-700 font-bold mb-1 flex-1 break-keep">
                                            취약계층 반려동물 장례비 지원소식
                                        </p>
                                        <div className="mt-4 inline-flex items-center text-sm font-bold text-amber-600">
                                            시청 보도자료 보기 <span className="ml-1">➔</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
