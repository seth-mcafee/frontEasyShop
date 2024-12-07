"use client"
import { useState } from "react";
import styles from "./Tab.module.css";

export const Tabs = ({ leftTabs, rightTabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, onClick) => {
    if (onClick) {
      onClick();
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div className="container">
      <div className={styles.tabsContainer}>
        <div className={styles.leftTabs}>
          {leftTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index, tab.onClick)}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
            >
              {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
              {tab.label}
            </div>
          ))}
        </div>
        <div className={styles.rightTabs}>
          {rightTabs.map((tab, index) => (
            <div
              key={index + leftTabs.length}
              onClick={() => handleTabClick(index + leftTabs.length, tab.onClick)}
              className={`${styles.tab} ${activeTab === index + leftTabs.length ? styles.activeTab : ""}`}
            >
              {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tabContent}>
        {activeTab < leftTabs.length
          ? leftTabs[activeTab].content
          : rightTabs[activeTab - leftTabs.length].content}
      </div>
    </div>
  );
};
