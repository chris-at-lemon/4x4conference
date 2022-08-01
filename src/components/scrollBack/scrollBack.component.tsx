import React, { Component } from "react";
import Up from "../../../lib/svg/linearicons/chevron-up.svg";

export interface IScrollClass {
  scrollMonClass?: string;
}

import styles from "../../styles/components/scrollback/scrollback.module.scss";

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const ScrollBack = ({ scrollMonClass = "scrollDefault" }: IScrollClass) => (
  <div className={`${styles["scrollback"]}`}>
    <div className={`${styles["scrollBackWrapper"]} ${styles[scrollMonClass]}`}>
      <div onClick={() => scrollToTop()}>
        <img src={Up} alt="back to top" />
      </div>
    </div>
  </div>
);
