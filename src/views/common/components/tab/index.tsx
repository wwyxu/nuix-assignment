import React from 'react';

interface Tab {
    label: string;
    value: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabClick: any;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div>
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
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

            {/* Tab Content */}
            {/* <div>
                {tabs.map((tab) => (
                    <div
                        key={tab.id || tab.guid}
                        className={`${(activeTab === tab.id || activeTab === tab.guid) ? 'block' : 'hidden'}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${(tab.id || tab.guid)}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Tabs;