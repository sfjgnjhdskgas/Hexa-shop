import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your one-stop e-commerce destination!</h1>
        <p className={styles.desc}>
          Discover a world of endless shopping possibilities at our online
          store. browse, choose
        </p>
        <button className={styles.button}></button>
      </div>
      <div className={styles.col}></div>
    </div>
  );
}
