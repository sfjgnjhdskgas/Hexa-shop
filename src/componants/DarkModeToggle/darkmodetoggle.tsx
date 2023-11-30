import styles from "./mod.module.css";
export default function DarkModeToggle() {
  const mood = "dark";
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌛</div>
      <div className={styles.icon}>🌚</div>
      <div
        className={styles.switcher}
        style={mood === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
