'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Festival from './components/Festival';
import Photos from './components/Photos';
import Teachers from './components/Teachers';
import Websites from './components/Websites';
import ChangingCheonan from './components/ChangingCheonan';

// Dynamic import for Leaflet map component to prevent SSR issues
const LocationFinder = dynamic(() => import('./components/LocationFinder'), {
    ssr: false,
    loading: () => <div className="flex-1 w-full h-full bg-blue-50 flex justify-center items-center">지도를 불러오는 중...</div>
});

export default function Home() {
    const [activeSection, setActiveSection] = useState('location-finder');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const showSection = (sectionId) => {
        setActiveSection(sectionId);
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className="overflow-hidden w-full h-full flex flex-col font-jua">
            <Header toggleSidebar={toggleSidebar} showSection={showSection} />

            <div className="flex flex-1 relative overflow-hidden h-full">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    showSection={showSection}
                />

                <main className="flex-1 relative bg-gray-50 w-full h-full overflow-hidden flex flex-col">
                    {activeSection === 'location-finder' && <LocationFinder />}
                    {activeSection === 'festival' && <Festival />}
                    {activeSection === 'photos' && <Photos />}
                    {activeSection === 'changing-cheonan' && <ChangingCheonan />}
                    {activeSection === 'teachers' && <Teachers />}
                    {activeSection === 'websites' && <Websites />}
                </main>
            </div>
        </div>
    );
}
