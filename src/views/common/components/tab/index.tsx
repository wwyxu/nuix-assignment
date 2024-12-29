import React, { useState } from 'react';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    activeTab?: string;
    onTabClick?: any;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div>
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${tab.id}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tabs;