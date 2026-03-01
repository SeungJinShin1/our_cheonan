'use client';

import { useEffect, useRef } from 'react';

export default function LocationFinder() {
    const mapRef = useRef(null);

    useEffect(() => {
        let mapInstance = null;

        import('leaflet').then((L) => {
            if (!mapRef.current) return;

            // Cleanup if map already initialized (strict mode)
            if (mapRef.current._leaflet_id) {
                mapRef.current._leaflet_id = null;
            }

            const southWest = L.latLng(36.6200, 127.0650);
            const northEast = L.latLng(37.0000, 127.4400);
            const cheonanBounds = L.latLngBounds(southWest, northEast);

            mapInstance = L.map(mapRef.current, {
                maxBounds: cheonanBounds,
                maxBoundsViscosity: 1.0,
                minZoom: 11,
                maxZoom: 18
            }).setView([36.8151, 127.1139], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapInstance);

            L.marker([36.8151, 127.1139])
                .addTo(mapInstance)
                .bindPopup('<b>천안시청</b><br>여기가 천안의 중심이에요!')
                .openPopup();

            setTimeout(() => {
                if (mapInstance) {
                    mapInstance.invalidateSize();
                    mapInstance.fitBounds(cheonanBounds);
                }
            }, 100);
        });

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    return (
        <div className="section-content fade-in w-full h-full flex flex-col">
            <div className="p-6 bg-blue-50 border-b border-blue-100 z-10 shrink-0">
                <h2 className="text-2xl text-blue-800 mb-2">📍 우리 학교 찾아보기</h2>
                <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-sm flex items-start gap-3">
                    <span className="text-3xl">🤔</span>
                    <div>
                        <p className="font-bold text-lg text-gray-800">생각해보기</p>
                        <p className="text-gray-600">지도를 움직여서 우리 학교를 찾아보세요!</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative w-full h-full">
                <div ref={mapRef} className="w-full h-full z-0"></div>
            </div>
        </div>
    );
}
