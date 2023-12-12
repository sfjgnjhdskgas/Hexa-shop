"use client";
import Link from "next/link";
import { links } from "./data";
import styles from "./button.module.css";
import Button from "../Button/Buttom";
import { useState } from "react";
export default function DisplayButton() {
  const [display, setDisplay] = useState("");
  return (
    <>
      <button
        onClick={() => setDisplay((prev) => (prev ? "" : "display"))}
        className={styles.button}
      >
        <span className={display ? styles.x : styles.span}></span>
        <span className={display ? styles.x : styles.span}></span>
        <span className={display ? styles.x : styles.span}></span>
      </button>
      <div className={`${styles.links} ${display ? styles.display : ""}`}>
        {links.map((link) => {
          return (
            <Link key={link.id} href={`${link.link}`} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
        <Button />
      </div>
    </>
  );
}
