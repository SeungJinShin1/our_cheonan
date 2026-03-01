export default function Festival() {
    return (
        <div className="section-content fade-in w-full h-full overflow-y-auto bg-yellow-50 scroll-smooth">
            <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-10 pb-20">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl text-yellow-800 mb-4 inline-block relative">
                        🎉 천안의 자랑거리
                        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow-200 -z-10 opacity-50 rounded-full"></div>
                    </h2>
                </div>
                <section>
                    <h3 className="text-2xl text-gray-700 mb-4 flex items-center gap-2">
                        <span className="bg-green-100 p-2 rounded-lg">🍇</span> 우리 고장 특산물 '하늘그린'
                    </h3>
                    <div className="bg-green-600 text-white p-6 rounded-2xl shadow-md mb-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-2">💡 '하늘그린'이 무슨 뜻인가요?</h4>
                            <p className="leading-relaxed opacity-90 text-sm md:text-base">
                                "하늘 그린은 <b>‘하늘(天) + 그린(Green)’</b>을 뜻해요.<br />
                                맑고 깨끗한 하늘을 대자연에 그린 천안의 농산물이라는 뜻과,<br />
                                <b>‘하늘에 그림을 그리다’</b>라는 멋진 뜻을 함께 담고 있답니다."
                            </p>
                        </div>
                        <div className="absolute -right-4 -bottom-8 opacity-20 text-9xl">🌿</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-orange-200 transition-all">
                            <div className="h-32 rounded-xl mb-3 flex items-center justify-center" style={{ backgroundColor: '#FEF3E2' }}>
                                <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="50" cy="50" rx="40" ry="35" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="3" />
                                    <path d="M50 15 V 85" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M25 30 Q 35 50 25 70" stroke="#8D6E63" strokeWidth="2" fill="none" opacity="0.6" />
                                    <path d="M35 25 Q 45 50 35 75" stroke="#8D6E63" strokeWidth="2" fill="none" opacity="0.6" />
                                    <path d="M75 30 Q 65 50 75 70" stroke="#8D6E63" strokeWidth="2" fill="none" opacity="0.6" />
                                    <path d="M65 25 Q 55 50 65 75" stroke="#8D6E63" strokeWidth="2" fill="none" opacity="0.6" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">호두</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">광덕면은 우리나라에서 호두를 처음 심은 곳이에요.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-yellow-200 transition-all">
                            <div className="h-32 bg-yellow-50 rounded-xl mb-3 flex items-center justify-center text-6xl">🍐</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">배</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">천안 성환 배는 껍질이 얇고 과즙이 정말 많아요.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-purple-200 transition-all">
                            <div className="h-32 bg-purple-50 rounded-xl mb-3 flex items-center justify-center text-6xl">🍇</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">포도</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">입장과 성거 지역은 '거봉 포도'가 유명해요.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-green-200 transition-all">
                            <div className="h-32 bg-green-50 rounded-xl mb-3 flex items-center justify-center text-6xl">🥒</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">오이</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">병천(아우내) 지역에서 많이 자라요.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-yellow-100 transition-all">
                            <div className="h-32 bg-orange-50 rounded-xl mb-3 flex items-center justify-center text-6xl">🍈</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">멜론</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">수신 멜론은 껍질에 무늬가 없어요. 달콤해요.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-gray-200 transition-all">
                            <div className="h-32 bg-gray-50 rounded-xl mb-3 flex items-center justify-center text-6xl">🍚</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">천안흥타령쌀</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">맑은 물과 깨끗한 땅에서 정성껏 키운 쌀이에요.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl text-gray-700 mb-6 flex items-center gap-2">
                        <span className="bg-pink-100 p-2 rounded-lg">💃</span> 신나는 축제 한마당
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-8 shadow-md border-l-8 border-pink-500 hover:shadow-xl transition-shadow flex flex-col justify-between">
                            <div>
                                <h4 className="text-2xl font-bold text-pink-600 mb-3">천안 흥타령 춤축제</h4>
                                <p className="text-gray-500 text-sm mb-4 font-bold">📍 천안종합운동장 일원</p>
                                <p className="text-gray-700 mb-6 leading-relaxed">전 세계의 춤꾼들이 천안에 모여요.</p>
                            </div>
                            <a href="https://www.cheonanfestival.com/ko/" target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-pink-100 text-pink-600 rounded-xl font-bold hover:bg-pink-500 hover:text-white transition-colors">
                                춤축제 누리집 가기 ➜
                            </a>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-md border-l-8 border-blue-600 hover:shadow-xl transition-shadow flex flex-col justify-between">
                            <div>
                                <h4 className="text-2xl font-bold text-blue-600 mb-3">K-컬처 박람회</h4>
                                <p className="text-gray-500 text-sm mb-4 font-bold">📍 독립기념관</p>
                                <p className="text-gray-700 mb-6 leading-relaxed">독립기념관에서 열리는 우리 문화 축제예요.</p>
                            </div>
                            <a href="https://www.kcultureexpo.com/kor/" target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-blue-100 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors">
                                박람회 누리집 가기 ➜
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
