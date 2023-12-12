"use client";
import { useState } from "react";
import styles from "./counter.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
export default function Counter({ data }: { data: any }) {
  const { cart, setCart } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  function addToCart() {
    if (count > 0) {
      return (
        setCount(0),
        cart
          ? setCart((prev: any) => [...prev, { ...data, stock: count }])
          : setCart((prev: any) => [{ ...data, stock: count }])
      );
    } else {
      return;
    }
  }

  return (
    <>
      <p className={styles.stock}>
        {data.stock ? "In stock " : "not avialable"}
      </p>
      <div className={styles.buy}>
        <span
          className={styles.left_big}
          onClick={() => setCount((prev) => (prev > 9 ? prev - 10 : prev))}
        >
          ➖
        </span>
        <span
          className={styles.left}
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          ➖
        </span>
        <span className={styles.number}>{count}</span>
        <span
          className={styles.right}
          onClick={() => setCount((prev) => prev + 1)}
        >
          ➕
        </span>
        <span
          className={styles.right_big}
          onClick={() => setCount((prev) => prev + 10)}
        >
          ➕
        </span>
      </div>
      <button className={styles.cart} onClick={addToCart}>
        Add to cart
      </button>
      <button className={styles.buy_now}>Buy now</button>
      <button className={styles.wish}>Add to wish list</button>
    </>
  );
}
