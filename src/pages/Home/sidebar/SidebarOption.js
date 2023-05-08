import styles from "./SidebarOption.module.css";

import React from "react";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`${styles.sidebarOption} ${active && styles.sidebarOption2}`}>   
        <Icon className={styles.svg}/>
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
