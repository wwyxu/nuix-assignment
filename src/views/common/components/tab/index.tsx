import React from 'react';

import "./styles.css";

interface Tab {
    label: string;
    value: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabClick: Function;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="tab flex border-b border-gray-200">
            {tabs.map((tab) => (
                <button
                    className={activeTab == tab.value ? "selected-tab" : ""}
                    key={tab.value}
                    onClick={() => onTabClick(tab.value)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
