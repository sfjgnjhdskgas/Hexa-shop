"use client";
import styles from "./Button.module.css";
export default function Button() {
  return (
    <button onClick={() => console.log("clicked")} className={styles.button}>
      LogOut
    </button>
  );
}
