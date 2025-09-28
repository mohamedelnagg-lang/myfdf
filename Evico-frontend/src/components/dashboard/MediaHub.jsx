import React, { useState } from "react";
import Analytics from "./media-hub/Analytics";
import ContentManagement from "./media-hub/ContentManagement";
import AI from "./media-hub/AI";
import Services from "./media-hub/Services";

export default function MediaHub() {
    const [activeTab, setActiveTab] = useState('analytics');

    const showMediaSection = (section) => {
        setActiveTab(section);
    };

    return (
        <div id="media" className="tab-content">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-evico-blue mb-4">المركز الإعلامي</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        className={`media-tab p-3 rounded-lg font-medium ${activeTab === 'analytics' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => showMediaSection('analytics')}
                    >
                        التحليلات
                    </button>
                    <button
                        className={`media-tab p-3 rounded-lg font-medium ${activeTab === 'content' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => showMediaSection('content')}
                    >
                        إدارة المحتوى
                    </button>
                    <button
                        className={`media-tab p-3 rounded-lg font-medium ${activeTab === 'ai' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => showMediaSection('ai')}
                    >
                        Evico AI
                    </button>
                    <button
                        className={`media-tab p-3 rounded-lg font-medium ${activeTab === 'services' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => showMediaSection('services')}
                    >
                        طلب الخدمات
                    </button>
                </div>
            </div>

            {activeTab === 'analytics' && <Analytics />}
            {activeTab === 'content' && <ContentManagement />}
            {activeTab === 'ai' && <AI />}
            {activeTab === 'services' && <Services />}
        </div>
    );
}
