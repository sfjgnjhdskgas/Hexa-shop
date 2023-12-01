"use client";
import { useContext } from "react";
import styles from "./mod.module.css";
import { ThemeContext } from "@/context/ThemeContext";
export default function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={() =>
        setTheme((prev: string) => (prev == "dark" ? "light" : "dark"))
      }
    >
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌚</div>
      <div
        className={styles.switcher}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
